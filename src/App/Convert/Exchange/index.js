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

const ConvertExchange = ({ frm, to, exchange, markets, action }) => (
  <Container>
    {exchange
      ? <Available frm={frm} to={to} exchange={exchange} markets={markets} action={action} />
      : <Unavailable frm={frm} to={to} />}
    <Path src={exchange ? pathYes : pathNo} />
  </Container>
);

export default ConvertExchange;
