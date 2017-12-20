import React from 'react';
import styled from 'styled-components';

import Available from './Available';
import Unavailable from './Unavailable';

import pathYes from './images/yes.svg';
import pathNo from './images/no.svg';

const Container = styled.div`
  padding: 18px 12px 18px 72px;
  background: hsla(0, 0%, 96%, 1);

  line-height: 18px;
  position: relative;
  height: 90px;
`;

const Path = styled.img`
  position: absolute;
  top: -12px; left: 36px;
`;

const ExchangeVendor = ({ frm, to, vendor, markets }) => (
  <Container>
    <Path src={vendor ? pathYes : pathNo} />
    {vendor
      ? <Available frm={frm} to={to} vendor={vendor} markets={markets} />
      : <Unavailable frm={frm} to={to} />}
  </Container>
);

export default ExchangeVendor;
