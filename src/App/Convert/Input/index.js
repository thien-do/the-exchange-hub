import React from 'react';
import styled from 'styled-components';

import Select from 'Input/Select';
import Text from 'Input/Text';
import Fieldset from 'Input/Fieldset';
import Balance from './Balance';

const options = [
  { value: 'Fiat', label: 'Fiat', disabled: true },
  { value: 'JPY', label: 'JPY' },
  { value: 'USD', label: 'USD' },
  { value: 'Crypto', label: 'Crypto', disabled: true },
  { value: 'BTC', label: 'BTC' },
  { value: 'ETH', label: 'ETH' },
];

const Container = styled.div`padding: 18px 24px;`;
const Inputs = styled.div`display: flex;`;
const Currency = styled.div`flex: 0 0 84px;`;
const Amount = styled.div`flex: 1 1 0px;`;

const ConvertInput = ({
  legend, balances, add, exchange, autoFocus,
  currency, setCurrency, amount, setAmount,
}) => (
  <Container>
    <Fieldset legend={legend}>
      <Inputs>
        <Currency>
          <Select
            full large options={options} autoFocus={autoFocus}
            value={currency} onChange={setCurrency}
          />
        </Currency>
        <Amount>
          <Text
            step="any" min="0" type="number" full large
            value={amount} onChange={setAmount}
          />
        </Amount>
      </Inputs>
      <Balance
        balances={balances} currency={currency} exchange={exchange}
        amount={amount} add={add}
      />
    </Fieldset>
  </Container>
);

export default ConvertInput;
