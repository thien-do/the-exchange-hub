import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: hsla(0, 0%, 13%, 1);
  color: hsla(0, 0%, 96%, 1);

  padding: 6px 12px;
`;
const Title = styled.h2`
  font-weight: 600;
  font-size: 15px;
  padding: 3px 0;
`;
const Description = styled.p`
  line-height: 18px;
  padding: 3px 0;
  color: hsla(0, 0%, 62%, 1);
`;

const BalanceFund = () => (
  <Container>
    <Title>Deposit & Withdraw</Title>
    <Description>
      This app does not support Deposit & Withdraw at the moment.
    </Description>
    <Description>
      Please move your funds via the exchange's website/app.
    </Description>
  </Container>
);

export default BalanceFund;
