import React from 'react';
import styled from 'styled-components';

import Money from 'Money';
import Percent from 'Percent';
import Exchange from 'Exchange';

const Container = styled.div`display: flex;padding: 0 12px;`;
const Name = styled.div`flex: 1 1 0px;`;
const Rate = styled.div`flex: 2 1 0px; text-align: right;`;
const Change = styled.div`flex: 1 1 0px; text-align: right;`;
const Remove = styled.button`flex: 0 0 auto;`;

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
    const percentChange = (lastRate - rates[0]) / rates[0];
    return (
      <Container>
        <Name style={{ color }}><Exchange value={exchange} /> </Name>
        <Rate><Money value={lastRate} currency={market.quote} /></Rate>
        <Change><Percent value={percentChange} /></Change>
        <Remove type="button" onClick={this.remove}>✕</Remove>
      </Container>
    );
  }
};

export default MarketsItemExchange;
