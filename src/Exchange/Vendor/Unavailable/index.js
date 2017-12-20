import React from 'react';
import styled from 'styled-components';

const Info = styled.p`color: hsla(0, 0%, 62%, 1);`;

const ExchangeVendorUnavailable = ({ frm, to }) => (
  <div>
    <p>No exchange supports {frm.currency} → {to.currency} conversion.</p>
    <Info>Please select another pair.</Info>
  </div>
);

export default ExchangeVendorUnavailable;
