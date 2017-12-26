import React from 'react';
import styled from 'styled-components';

import keyboard from './keyboard.svg';

const Container = styled.div`
  text-align: center;
  padding: 6px 0; /* to make height 36px */
  color: hsla(0.0, 0.0%, 12.9%, 1.0);
  font-style: italic;
`;

const Img = styled.img`
  vertical-align: top;
  margin-right: 6px;
`;

const Tips = () => (
  <Container>
    <p>
      <Img src={keyboard} alt="keyboard icon" />
      You can navigate using keyboard. Try pressing “W” or “Tab”.
    </p>
  </Container>
);

export default Tips;
