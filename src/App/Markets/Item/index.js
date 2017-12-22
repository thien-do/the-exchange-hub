import React from 'react';
import styled from 'styled-components';

import allRates from './_data/rates';
import colors from './_data/colors';

import Header from './Header';
import Chart from './Chart';
import Add from './Add';
import Exchange from './Exchange';

const Container = styled.div`
  background: hsla(0, 0%, 96%, 1);
  position: relative;
`;
const HeaderContainer = styled.div`
  position: absolute;
  top: 0; left: 0;
`;
const ChartContainer = styled.div`
  height: 84px;
`;
const ExchangeContainer = styled.div`
  border-bottom: solid 2px hsla(0.0, 0.0%, 93.3%, 1.0);
`;
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 12px 0 6px;
`;
const Info = styled.span`
  color: hsla(0.0, 0.0%, 62.0%, 1.0);
`;

const getInitialExchanges = (props) => {
  // check saved value first
  const saved = JSON.parse(localStorage.getItem(`hub-markets-${props.symbol}`));
  if (saved) { return saved; }
  // if not then populate with the first available exchange
  const exchange = props.markets
    .find(market => market.symbol === props.symbol)
    .exchanges[0];
  return [exchange]
};

class MarketsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exchanges: getInitialExchanges(this.props),
      rates: {},
    };
    this.addExchange = this.addExchange.bind(this);
    this.removeExchange = this.removeExchange.bind(this);
    this.setStateAndSave = this.setStateAndSave.bind(this);
  }
  addExchange(exchange) {
    // TODO: we will add a loading here while loading the rates
    // but now we will have the rates immediatelly
    const rate = allRates[this.props.symbol][exchange];
    const nextState = {
      exchanges: this.state.exchanges.concat(exchange),
      rates: { ...this.state.rates, [exchange]: rate },
    };
    this.setStateAndSave(nextState);
  }
  removeExchange(exchange) {
    // it's ok to leave the rate as it is (ie: no need to remove)
    this.setStateAndSave({ exchanges: this.state.exchanges.filter(e => e !== exchange) });
  }
  setStateAndSave(nextState) {
    this.setState(nextState, () => {
      const string = JSON.stringify(this.state.exchanges);
      localStorage.setItem(`hub-markets-${this.props.symbol}`, string);
    });
  }
  componentDidMount() {
    // load rates for initial exchanges
    this.state.exchanges.forEach((exchange) => {
      // In reality this could take time for each exchange
      const rate = allRates[this.props.symbol][exchange];
      this.setState(prevState => {
        const nextRates = { ...prevState.rates, [exchange]: rate };
        return { rates: nextRates };
      });
    });
  }
  render() {
    const market = this.props.markets.find(m => m.symbol === this.props.symbol);
    const { exchanges, rates } = this.state;
    return (
      <Container>
        <HeaderContainer>
          <Header market={market} remove={this.props.remove} />
        </HeaderContainer>
        <ChartContainer>
          <Chart colors={colors} exchanges={exchanges} rates={rates} />
        </ChartContainer>
        {exchanges.map((exchange, index) => (
          <ExchangeContainer key={exchange}>
            <Exchange
              market={market} exchange={exchange}
              rates={rates[exchange]} color={colors[index]}
              remove={this.removeExchange}
            />
          </ExchangeContainer>
        ))}
        <Footer>
          <Add market={market} selected={exchanges} submit={this.addExchange} />
          <Info>Last 24h rate</Info>
        </Footer>
      </Container>
    );
  }
};

export default MarketsItem;
