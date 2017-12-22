import React from 'react';
import styled from 'styled-components';

import Button from 'Button';
import Option from './Option';
import Coming from './Coming';

const Container = styled.div`
  background: hsla(0.0, 0.0%, 88%, 0.9);
  width: 100%; height: 100%;
  backdrop-filter: blur(3px);

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

const ExchangeSelect = ({ balances, markets, value, onChange, close, frm, to }) => (
  <Container>
    <List>
      {markets[frm][to].map(exchange => (
        <Child key={exchange.name}>
          <Option
            exchange={exchange} value={value} onChange={onChange}
            balances={balances} frm={frm} to={to} close={close}
          />
        </Child>
      ))}
      <Child>
        <Coming
          title="Limit Rate"
          description="Exchange at a particular rate or better to take profit."
        />
      <Child>
      </Child>
        <Coming
          title="Stop Rate"
          description="Exchange when market reachs a certain rate to stop loss."
        />
      </Child>
    </List>
    <Back>
      <Button full x-large onClick={close}>Back to Exchange</Button>
    </Back>
  </Container>
);

export default ExchangeSelect;
