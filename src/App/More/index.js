import React from 'react';
import styled from 'styled-components';

import Panel from 'Panel';

import image from './image.svg';

const Container = styled.div`
  padding: 24px;
  text-align: center;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const Paragraph = styled.p`
  line-height: 18px;
  padding: 6px 0;
`;

const Go = styled.a`
  display: block;
  background: hsla(0, 0%, 13%, 1);
  color: hsla(0, 0%, 96%, 1);
  padding: 12px 0;

  font-size: 18px; font-weight: 600;
  text-transform: uppercase;
  line-height: 18px; letter-spacing: 0.5px;

  &:focus { box-shadow: 0 0 0 2px hsla(187, 72%, 71%, 1) inset; };
`;

const More = () => (
  <Panel>
    <Container>
      <hr/>
      <img src={image} alt="Rocket icon" />
      <div>
        <Title>We glad you want more</Title>
        <Paragraph>
          This is just the beginning. There are much more interesting things in the
          world of crypto currency trading.
        </Paragraph>
        <Paragraph>
          Let us proudly welcome you to the world of professional trading, with charts, margin
          trading, multi-markets and more:
        </Paragraph>
      </div>
      <Go autoFocus href="https://trade.quoinex.com">
        Go To<br />Trading Dashboard
      </Go>
    </Container>
  </Panel>
);

export default More;
