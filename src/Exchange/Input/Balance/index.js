import React from 'react';
import styled from 'styled-components';

import Money from 'Money';
import Vendor from 'Vendor';

const Container = styled.div`
  color: hsla(0, 0%, 62%, 1.0);
  line-height: 18px;
`;

const ExchangeInputBalance = ({ balances, currency, amount, vendor, add }) => {
  const now = balances[currency][vendor];
  if (now === undefined) {
    return <Container><p>–</p><p>–</p></Container>;
  }
  const next = now + ((add ? 1 : -1) * amount);
  const change = add ? 'increase' : 'decrease';
  return (
    <Container>
      <p>{currency} balance at <Vendor value={vendor} /> will {change}:</p>
      <p>
        <span>
          <Money currency={currency} value={now} />
          <span> → </span>
          <Money currency={currency} value={next} />
        </span>
      </p>
    </Container>
  );
};

export default ExchangeInputBalance;
