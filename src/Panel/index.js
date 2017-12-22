import React from 'react';
import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from {
    box-shadow:
      0 0 0 12px #80DEEA,
      0 12px 36px 0 hsla(0, 0%, 13%, 0.8);
  }
  to {
    box-shadow:
      0 0 0 12px transparent,
      0 12px 36px 0 hsla(0, 0%, 13%, 0.8);
  }
`;

const Background = styled.div`
  background: hsla(0, 0%, 98%, 0.9);
  backdrop-filter: blur(3px);
  width: 300px; height: 486px;
  overflow: hidden;

  box-shadow: 0 12px 36px 0 hsla(0, 0%, 13%, 0.8);

  animation: ${appear} 1s linear 1;
`;

const Panel = ({ children }) => (
  <Background>{children}</Background>
);

export default Panel;
