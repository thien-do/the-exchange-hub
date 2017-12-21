import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 18px 12px 18px 48px;
  width: 100%;
  background: hsla(0, 0%, 96%, 1);
  line-height: 18px;
  color: hsla(0, 0%, 62%, 1);
`;

const VendorSelectCustom = () => (
  <Container>
    <p>Custom rate (Coming Soon)</p>
    <p>Set your rate and wait until it matched.</p>
  </Container>
);

export default VendorSelectCustom;
