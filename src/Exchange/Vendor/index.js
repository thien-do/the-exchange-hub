import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 18px 0;
  background: hsla(0, 0%, 96%, 1);
`;

const ExchangeInput = ({ markets, frm, to, vendor, setVendor }) => (
  <Container>
    {vendor || <span>none</span>}
  </Container>
);

export default ExchangeInput;
