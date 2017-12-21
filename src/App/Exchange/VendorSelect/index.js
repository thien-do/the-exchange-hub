import React from 'react';
import styled from 'styled-components';

import Button from 'Button';
import Option from './Option';
import Custom from './Custom';

const Container = styled.div`
  background: hsla(0.0, 0.0%, 88%, 0.9);
  width: 100%; height: 100%;

  display: flex;
  flex-direction: column;
`;

const List = styled.div`
  flex: 1 1 0px;
  overflow: auto;
  padding: 24px;
`;

const Child = styled.div`
  margin-top: 24px;
  &:first-child { margin-top: 0px; };
`;

const Back = styled.div`
  flex: 0 0 auto;
  padding: 24px;
`;

const VendorSelect = ({ balances, markets, value, onChange, close, frm, to }) => (
  <Container>
    <List>
      {markets[frm][to].map(vendor => (
        <Child key={vendor.name}>
          <Option
            vendor={vendor} value={value} onChange={onChange}
            balances={balances} frm={frm} to={to} close={close}
          />
        </Child>
      ))}
      <Child><Custom /></Child>
    </List>
    <Back>
      <Button full x-large onClick={close}>Back to Exchange</Button>
    </Back>
  </Container>
);

export default VendorSelect;
