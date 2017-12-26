import React from 'react';
import styled from 'styled-components';

import Money from 'Money';
import Exchange from './Exchange';

const Container = styled.div`
  background: hsla(0, 0%, 96%, 1);
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 36px;
  font-weight: 600;
  font-size: 15px;
  padding: 0px 12px;
`;
const Child = styled.div`
  border-bottom: solid 2px hsla(0.0, 0.0%, 93.3%, 1.0);
  &:last-child { border-bottom: none; };
`;

const BalanceItem = ({ balances, currency }) => {
  const exchanges = Object.keys(balances);

  const total = exchanges.reduce((prev, exchange) => {
    const value = balances[exchange];
    const increment = value === -1 ? 0 : value;
    return prev + increment;
  }, 0);

  return (
    <Container>
      <Header>
        <span>{currency}</span>
        <Money value={total} currency={currency} display="symbol" />
      </Header>
      {exchanges.map(exchange => {
        const value = balances[exchange];
        if (value === -1) { return null; }
        return (
          <Child key={exchange}>
            <Exchange
              currency={currency} value={value}
              exchange={exchange} percent={value / total}
            />
          </Child>
        );
      })}
    </Container>
  );
};

export default BalanceItem;
