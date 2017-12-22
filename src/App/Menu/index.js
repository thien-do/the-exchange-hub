import React from 'react';
import styled from 'styled-components';

import Item from './Item';

const Hr = styled.hr`
  border-top: solid 2px hsla(0.0, 0.0%, 88%, 1.0);
  margin: 6px auto;
  width: 50%;
`;

const Container = styled.div`
  background: hsla(0, 0%, 98%, 0.9);
  backdrop-filter: blur(3px);
  box-shadow: 0 12px 36px 0 hsla(0, 0%, 13%, 0.8);
  width: 108px;
  padding: 6px 0;
`;

const Menu = ({ state, toggle }) => (
  <Container>
    <Item label="Welcome" state={state.welcome} toggle={toggle.welcome} />
    <Hr />
    <Item label="Exchange" state={state.exchange} toggle={toggle.exchange} />
    <Item label="Balance" state={state.balance} toggle={toggle.balance} />
    <Item label="History" state={state.history} toggle={toggle.history} />
    <Hr />
    <Item label="More?" state={state.more} toggle={toggle.more} />
  </Container>
);

export default Menu;
