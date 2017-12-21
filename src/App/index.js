import React from 'react';
import styled from 'styled-components';

import Exchange from './Exchange';

const Container = styled.div`
  width: 100%; height: 90%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => (
  <Container>
    <Exchange />
  </Container>
);

export default App;
