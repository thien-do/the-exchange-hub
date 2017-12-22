import React from 'react';
import styled from 'styled-components';

import markets from '../_data/markets';
import allRates from '../_data/rates';
import colors from '../_data/colors';

import Chart from './Chart';
import Add from './Add';
import Exchange from './Exchange';

const Container = styled.div`
  background: hsla(0, 0%, 96%, 1);
  position: relative;
`;
const Header = styled.div`
  background: hsla(0, 0%, 96%, 0.9);
  position: absolute;
  top: 0; left: 0;
  font-weight: 600;
  font-size: 15px;
  padding: 6px 12px;
`;
const ChartContainer = styled.div`
  height: 84px;
`;
const Child = styled.div`
  border-bottom: solid 2px hsla(0.0, 0.0%, 93.3%, 1.0);
`;

const getInitialExchanges = (symbol) => {
  // check saved value first
  const saved = JSON.parse(localStorage.getItem(`hub-markets-${symbol}`));
  if (saved) { return saved; }
  // if not then populate with the first available exchange
  const exchange = markets
    .find(market => market.symbol === symbol)
    .exchanges[0];
  return [exchange]
};

class MarketsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exchanges: getInitialExchanges(this.props.symbol),
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
    const market = markets.find(m => m.symbol === this.props.symbol);
    const { exchanges, rates } = this.state;
    return (
      <Container>
        <Header>{market.symbol}</Header>
        <ChartContainer>
          <Chart colors={colors} exchanges={exchanges} rates={rates} />
        </ChartContainer>
        <div>
          {exchanges.map((exchange, index) => (
            <Child key={exchange}>
              <Exchange
                market={market} exchange={exchange}
                rates={rates[exchange]} color={colors[index]}
                remove={this.removeExchange}
              />
            </Child>
          ))}
          <Add market={market} selected={exchanges} submit={this.addExchange} />
        </div>
      </Container>
    );
  }
};

export default MarketsItem;
