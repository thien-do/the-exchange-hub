import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 18px 12px 18px 72px;
  width: 100%;
  background: hsla(0, 0%, 96%, 1);
`;
const Info = styled.p`color: hsla(0, 0%, 62%, 1);`;

const ExchangeVendorUnavailable = ({ frm, to }) => (
  <Container>
    <p>No exchange supports {frm.currency} → {to.currency} conversion.</p>
    <Info>Please select another pair.</Info>
  </Container>
);

export default ExchangeVendorUnavailable;
