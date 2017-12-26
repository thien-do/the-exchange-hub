import React from 'react';
import styled from 'styled-components';

import Item from './Item';
import Fund from './Fund';
import Connect from './Connect';
import Help from './Help';

import balances from '_data/balances';

const Container = styled.div`
  padding: 24px;
`;

const Child = styled.div`
  margin-top: 24px;
  &:first-child { margin-top: 0px; };
`;

const Hr = styled.hr`
  margin-top: 24px;
  border-top: solid 2px hsla(0.0, 0.0%, 87.8%, 1.0);
`;

const Balance = () => (
  <Container>
    {Object.keys(balances).map(key => (
      <Child key={key}>
        <Item balances={balances[key]} currency={key} />
      </Child>
    ))}
    <Hr />
    <Child><Connect balances={balances} /></Child>
    <Hr />
    <Child><Fund /></Child>
    <Hr />
    <Child><Help /></Child>
  </Container>
);

export default Balance;
