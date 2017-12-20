import React from 'react';
import styled from 'styled-components';

import Select from 'Input/Select';
import Text from 'Input/Text';
import Fieldset from 'Input/Fieldset';

const options = [
  { value: 'JPY', label: 'JPY' },
  { value: 'BTC', label: 'BTC' },
  { value: 'ETH', label: 'ETH' },
];

const Background = styled.div`padding: 18px 24px;`;
const Inputs = styled.div`display: flex;`;
const Currency = styled.div`flex: 0 0 84px;`;
const Value = styled.div`flex: 1 1 0px;`;
const Balance = styled.p`color: hsla(0, 0%, 62%, 1.0);`;

const ExchangeInput = ({ legend, currency, value, balance }) => (
  <Background>
    <Fieldset legend={legend}>
      <Inputs>
        <Currency><Select full large value={currency} options={options} /></Currency>
        <Value><Text full large value={value} /></Value>
      </Inputs>
      <Balance>
        Balance: {balance} → {balance + value}
      </Balance>
    </Fieldset>
  </Background>
);

export default ExchangeInput;
