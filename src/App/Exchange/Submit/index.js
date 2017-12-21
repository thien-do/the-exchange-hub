import React from 'react';
import styled from 'styled-components';

import Button from 'Button';
import Vendor from 'Vendor';

const Container = styled.div`
  padding: 24px;
`;

const Label = ({ frm, balances, vendor }) => {
  const now = balances[frm.currency][vendor];
  if (!vendor) { return <span>Exchange</span>; }
  if (now === -1) { return <span>Connect <Vendor value={vendor} /></span>; }
  if (now - frm.amount < 0) { return <span>Deposit {frm.currency}</span>; }
  return <span>Exchange</span>;
};

const ExchangeSubmit = ({ frm, balances, vendor }) => (
  <Container>
    <Button type="submit" full x-large disabled={!vendor}>
      <Label frm={frm} balances={balances} vendor={vendor} />
    </Button>
  </Container>
);

export default ExchangeSubmit;
