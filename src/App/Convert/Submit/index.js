import React from 'react';
import styled from 'styled-components';

import Button from 'Button';
import Exchange from 'Exchange';

const Container = styled.div`
  padding: 24px;
`;

const Label = ({ frm, balances, exchange }) => {
  const now = balances[frm.currency][exchange];
  if (!exchange) { return <span>Exchange</span>; }
  if (now === -1) { return <span>Connect <Exchange value={exchange} /></span>; }
  if (now - frm.amount < 0) { return <span>Deposit {frm.currency}</span>; }
  return <span>Exchange</span>;
};

const ConvertSubmit = ({ frm, balances, exchange }) => (
  <Container>
    <Button type="submit" full x-large disabled={!exchange}>
      <Label frm={frm} balances={balances} exchange={exchange} />
    </Button>
  </Container>
);

export default ConvertSubmit;
