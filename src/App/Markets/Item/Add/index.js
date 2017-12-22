import React from 'react';

import Select from 'Input/Select';
import { names } from 'Exchange';

const MarketsItemAdd = ({ market, submit, selected }) => {
  const options = market.exchanges
    .filter(exchange => !selected.includes(exchange))
    .map(exchange => ({ value: exchange, label: names[exchange] }));
  options
    .unshift({ value: 'placeholder', label: 'Add', disabled: true });
  return <Select inverse options={options} value="placeholder" onChange={submit} />;
};

export default MarketsItemAdd;
