import React from 'react';
import styled from 'styled-components';

import Checkbox from 'Input/Checkbox';

const Container = styled.div`
  padding: 6px 24px;
  background: hsla(0, 0%, 96%, 1);
`;

const ConvertConfirm = ({ confirm, setConfirm }) => (
  <Container>
    <Checkbox value={confirm} onChange={setConfirm}>
      Ask for confirmation
    </Checkbox>
  </Container>
);

export default ConvertConfirm;
