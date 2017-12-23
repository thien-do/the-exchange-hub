import React from 'react';
import styled from 'styled-components';

import Link from './Link';

import image from './image.svg';

const Container = styled.div`
  /* bottom padding to fake button to consistent with More */
  padding: 24px;
  text-align: center;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Img = styled.img`
  margin: 0 auto;
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

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  /* each link will have padding 12px horizontal */
  margin: 0 -12px;
`;

const Welcome = () => (
  <Container>
    <hr/>
    <Img width="72" height="72" src={image} alt="Paperplane icon" />
    <div>
      <Title>Welcome to The Exchange Hub</Title>
      <Paragraph>
        Thing is, there are many crypto currencies exchanges, but their tools are often more complex than what you will need.
      </Paragraph>
      <Paragraph>
        This, therefore, is a simple tool to convert from one currency to another, via multiple markets that you can choose from.
      </Paragraph>
    </div>
    <Links>
      <Link
        first="dvkndn" second="@gmail" third=".com" highlight="first"
        to="mailto:dvkndn@gmail.com"
      />
      <Link
        first="github.com/" second="dvkndn/" third="exchange-hub" highlight="third"
        to="https://github.com/dvkndn/exchange-hub"
      />
      <Link
        first="version" second="11th" third="preview" highlight="second"
        to="https://github.com/dvkndn/exchange-hub/releases"
      />
    </Links>
  </Container>
);

export default Welcome;
