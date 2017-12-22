import React from 'react';
import styled from 'styled-components';

const Container = styled.span`
  font-feature-settings: "tnum";
`;

const format = Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  style: 'percent',
}).format;

const Percent = ({ value }) => <Container>{format(value)}</Container>;

export default Percent;
