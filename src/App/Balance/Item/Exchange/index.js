import React from 'react';
import styled from 'styled-components';

import Money from 'Money';
import Percent from 'Percent';
import Exchange from 'Exchange';

const Container = styled.div`display: flex; padding: 0 12px;`;
const Name = styled.div`flex: 1 1 0px;`;
const Value = styled.div`flex: 1.6 1 0px; text-align: right;`;
const PercentCon = styled.div`
  flex: 1 1 0px; text-align: right;
  color: hsla(0.0, 0.0%, 62.0%, 1.0);
`;
const Info = styled.p`color: hsla(0.0, 0.0%, 62.0%, 1.0);`;

const BalanceItemExchange = ({ exchange, currency, value, percent }) => (
  <Container>
    <Name><Exchange value={exchange} /></Name>
    {value !== -1 && <PercentCon><Percent value={percent} /></PercentCon>}
    <Value>
      {value === -1
        ? <Info>Not connected</Info>
        : <Money currency={currency} value={value} />}
    </Value>
  </Container>
);

export default BalanceItemExchange;
