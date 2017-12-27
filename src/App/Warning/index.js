import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0; right: 0;
  width: 72px; height: 100%;

  background: hsla(186.8, 71.6%, 71.0%, 0.9);
  backdrop-filter: blur(2px);
  opacity: ${props => props.visible ? '1' : '0'};
  transition: opacity 0.4s ease;

  font-weight: 600;
  text-align: center;

  pointer-events: none;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Arrow = styled.div`
  font-size: 24px;
`;

const Warning = ({ visible }) => (
  <Container visible={visible}>
    <div>
      <Arrow>→</Arrow>
      <div>Scroll</div>
    </div>
  </Container>
);

export default Warning;
