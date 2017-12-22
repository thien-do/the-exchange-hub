import React from 'react';
import styled from 'styled-components';

import Select from 'Input/Select';
import { names } from 'Exchange';

const Info = styled.div`
  padding-left: 6px; /* same with Select */
  color: hsla(0.0, 0.0%, 62.0%, 1.0);
`;

const MarketsItemAdd = ({ market, submit, selected }) => {
  const options = market.exchanges
    .filter(exchange => !selected.includes(exchange))
    .map(exchange => ({ value: exchange, label: names[exchange] }));
  // if all added ---> show message
  if (options.length === 0) { return <Info>All exchanges added</Info>; }
  // else ---> use this as instruction text
  options.unshift({ value: 'placeholder', label: 'Add exchange', disabled: true });
  return <Select inverse options={options} value="placeholder" onChange={submit} />;
};

export default MarketsItemAdd;
