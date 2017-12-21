import React from 'react';
import styled from 'styled-components';

import Available from './Available';
import Unavailable from './Unavailable';

import pathYes from './images/yes.svg';
import pathNo from './images/no.svg';

const Container = styled.div`
  line-height: 18px;
  position: relative;
  height: 90px;
`;

const Path = styled.img`
  position: absolute;
  top: -12px; left: 36px;
`;

const ExchangeVendor = ({ frm, to, vendor, markets, action }) => (
  <Container>
    {vendor
      ? <Available frm={frm} to={to} vendor={vendor} markets={markets} action={action} />
      : <Unavailable frm={frm} to={to} />}
    <Path src={vendor ? pathYes : pathNo} />
  </Container>
);

export default ExchangeVendor;
