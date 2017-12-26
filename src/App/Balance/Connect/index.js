import React from 'react';
import styled from 'styled-components';

import Select from 'Input/Select';
import { names } from 'Exchange';

const Container = styled.div`
  background: hsla(0, 0%, 13%, 1);
  color: hsla(0, 0%, 96%, 1);

  padding: 6px 12px 12px;
`;

const Title = styled.h2`
  padding: 3px 0;
  font-weight: 600;
  font-size: 15px;
`;
const Description = styled.p`
  line-height: 18px;
  color: hsla(0, 0%, 62%, 1);
  padding: 3px 0;
`;
const Action = styled.div`
  margin-top: 6px;
`;
const Hr = styled.hr`
  margin-top: 12px;
  border-top: solid 2px hsla(0.0, 0.0%, 25.9%, 1.0);
  margin-bottom: 6px;
`;

const onChange = () => {
  alert(
    'This function is not implemented in the prototype.\n\n' +
    'In the complete version, user will be redirect to the exchange\n' +
    'to give permission to this app.'
  );
};

const BalanceConnect = ({ balances }) => {
  // init
  const placeholder = { value: 'placeholder', disabled: true };
  const connected = [{ ...placeholder, label: 'Select exchange to disconnect' }];
  const disconnected = [{ ...placeholder, label: 'Select exchange to connect' }];
  // populate connected and not connected exchanges
  // all exchanges support BTC so for now this is enough (in future maybe it's ETH)
  // or we might need to change structure
  Object.keys(balances.BTC).forEach(exchange => {
    const value = balances.BTC[exchange];
    const option = { value: exchange, label: names[exchange] };
    (value === -1 ? disconnected : connected).push(option);
  });
  return (
    <Container>
      <Title>Connect an Exchange</Title>
      <Description>
        See your balances at an exchange and convert currencies that it supports.
      </Description>
      <Action>
        <Select
          value="placeholder" onChange={onChange}
          inverse options={disconnected}
        />
      </Action>
      <Hr />
      <Title>Disconnect from an Exchange</Title>
      <Description>
        Stop seeing your balances at an exchange. You also cann't convert currencies via its markets anymore.
      </Description>
      <Action>
        <Select
          value="placeholder" onChange={onChange}
          inverse options={connected}
        />
      </Action>
    </Container>
  );
};

export default BalanceConnect;
