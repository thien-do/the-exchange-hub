import React from 'react';
import styled from 'styled-components';

import Money from 'Money';
import Percent from 'Percent';
import Exchange from 'Exchange';

const Container = styled.div`display: flex;`;
const Name = styled.div`flex: 1 1 0px; padding-left: 12px;`;
const Rate = styled.div`flex: 1.5 1 0px; text-align: right;`;
const Change = styled.div`flex: 1 1 0px; text-align: right;`;
const Remove = styled.button`
  flex: 0 0 auto; padding: 0 12px;
  &:focus { box-shadow: 0 0 0 2px #80DEEA inset; };
  &:active { background: hsla(0.0, 0.0%, 93%, 1.0); };
  transition: all 0.2s;
`;

class MarketsItemExchange extends React.Component {
  constructor(props) {
    super(props);
    this.remove = this.remove.bind(this);
  }
  remove() {
    this.props.remove(this.props.exchange);
  }
  render() {
    const { rates, exchange, market, color } = this.props;
    if (!rates) { return null; }
    const lastRate = rates[rates.length - 1];
    const change = (lastRate - rates[0]) / rates[0];
    return (
      <Container>
        <Name style={{ color }}><Exchange value={exchange} /> </Name>
        <Rate><Money value={lastRate} currency={market.quote} /></Rate>
        <Change>{change > 0 && '+'}<Percent value={change} /></Change>
        <Remove type="button" onClick={this.remove}>✕</Remove>
      </Container>
    );
  }
};

export default MarketsItemExchange;
