import React from 'react';
import styled from 'styled-components';

import Money from 'Money';
import Vendor from 'Vendor';

const Container = styled.div`
  color: hsla(0, 0%, 62%, 1.0);
  line-height: 18px;
`;

const ExchangeInputBalance = ({ balances, currency, amount, vendor, add }) => {
  // if no vendor is matched ---> nothing to do
  if (!vendor) {
    return <Container><p>&nbsp;</p><p>&nbsp;</p></Container>;
  }
  // now we have vendor ---> check balance of that vendor
  const balanceMessage = <span>{currency} balance at <Vendor value={vendor} /></span>;
  const now = balances[currency][vendor];
  // if balance is -1 ---> not connected yet
  if (now === -1) {
    return <Container><p>{balanceMessage}: Not connected</p><p>&nbsp;</p></Container>;
  }
  // now we have balance to use
  const next = now + ((add ? 1 : -1) * amount);
  const change = add ? 'increase' : 'decrease';
  return (
    <Container>
      <p>{balanceMessage} will {change}:</p>
      <p>
        <Money currency={currency} value={now} />
        <span> → </span>
        <Money currency={currency} value={next} />
      </p>
    </Container>
  );
};

export default ExchangeInputBalance;
