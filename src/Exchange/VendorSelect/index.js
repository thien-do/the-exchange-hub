import React from 'react';
import styled from 'styled-components';

import Button from 'Button';

const Container = styled.div`
  background: hsla(0, 0%, 98%, 0.9);
  width: 100%; height: 100%;
`;

const ButtonContainer = styled.div`
  padding: 24px;
`;

const VendorSelect = ({ balances, markets, vendor, close }) => (
  <Container>
    {vendor}
    <ButtonContainer>
      <Button autoFocus full x-large onClick={close}>Back to Exchange</Button>
    </ButtonContainer>
  </Container>
);

export default VendorSelect;
