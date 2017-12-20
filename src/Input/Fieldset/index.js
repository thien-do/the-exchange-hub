import React from 'react';
import styled from 'styled-components';

const Fieldset = styled.fieldset`
`;

const Legend = styled.legend`
  font-weight: 600;
  font-size: 13px;
`;

const InputFieldset = ({ legend, children }) => (
  <Fieldset>
    <Legend>{legend}</Legend>
    {children}
  </Fieldset>
);

export default InputFieldset;
