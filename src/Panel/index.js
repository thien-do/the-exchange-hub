import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  background: hsla(0, 0%, 98%, 0.9);
  box-shadow: 0 12px 36px 0 hsla(0, 0%, 13%, 0.8);
  width: 300px; height: 486px;
`;

const Panel = ({ children }) => (
  <Background>{children}</Background>
);

export default Panel;
