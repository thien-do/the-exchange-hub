import React from 'react';
import styled from 'styled-components';

import image from './image.svg';

const Container = styled.div`
  padding: 24px 24px 84px;
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

const History = () => (
  <Container>
    <hr />
    <Img width="72" height="72" src={image} alt="Rocket icon" />
    <div>
      <Title>Error 501</Title>
      <Paragraph>
        Implemented, this screen was not.
        <br /><br /><br />
      </Paragraph>
      <Paragraph>
        <br /><br /><br />
      </Paragraph>
    </div>
    <hr />
  </Container>
);

export default History;
