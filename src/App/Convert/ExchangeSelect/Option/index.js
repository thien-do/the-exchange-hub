import React from 'react';
import styled from 'styled-components';

import Exchange from 'Exchange';
import Money from 'Money';
import check from './check.svg';

const Container = styled.button`
  padding: 18px 12px 18px 48px;
  position: relative;
  width: 100%;

  background: hsla(0, 0%, 96%, 1);
  &:focus { box-shadow: 0 0 0 2px #80DEEA inset; };
  &:active { background: hsla(0.0, 0.0%, 93%, 1.0); };

  line-height: 18px;
`;
const Title = styled.span`display: block; font-weight: 600;`;
const Info = styled.span`display: block; color: hsla(0, 0%, 62%, 1);`;
const Check = styled.img`
  position: absolute;
  top: 0; bottom: 0; left: 12px;
  margin: auto;
`;

class ExchangeSelectOption extends React.Component {
  constructor(props) {
    super(props);
    this.select = this.select.bind(this);
  }
  select() {
    this.props.onChange(this.props.exchange.name);
    this.props.close();
  }
  render() {
    const { exchange, value, balances, frm, to } = this.props;
    const balance = balances[frm][exchange.name];
    return (
      <Container type="button" onClick={this.select} autoFocus={exchange.name === value}>
        {exchange.name === value && <Check src={check} />}
        <Title>
          <Exchange value={exchange.name} />
          <span>: </span>
          <Money currency={to} value={exchange.rate} display="symbol" />
        </Title>
        <Info>
          <span>{frm} balance: </span>
          {balance !== -1
            ? <Money currency={frm} value={balance} display="symbol" />
            : <span>Not connected</span>}
        </Info>
        <Info>
          Fee rate: {exchange.fee}%
        </Info>
      </Container>
    );
  }
};

export default ExchangeSelectOption;
