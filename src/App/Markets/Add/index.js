import React from 'react';
import styled from 'styled-components';

import Select from 'Input/Select';

// mimic Select large style
const Info = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: hsla(0.0, 0.0%, 62.0%, 1.0);
`;

const MarketsAdd = ({ markets, symbols, submit }) => {
  const options = markets
    .filter(market => !symbols.includes(market.symbol))
    .map(market => ({ value: market.symbol, label: market.symbol }));
  // if all added ---> show message
  if (options.length === 0) { return <Info>All markets added</Info>; }
  // else ---> use this as instruction text
  options.unshift({ value: 'placeholder', label: 'Add market', disabled: true });
  return <Select large options={options} value="placeholder" onChange={submit} />;
};;

export default MarketsAdd;
