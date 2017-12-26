import React from 'react';
import styled from 'styled-components';

import Button from 'Button';

const Container = styled.div`
  background: hsla(0, 0%, 96%, 1);

  padding: 6px 12px;
`;
const Title = styled.h2`
  font-weight: 600;
  font-size: 15px;
  padding: 3px 0;
`;
const Description = styled.p`
  line-height: 18px;
  padding: 3px 0;
  color: hsla(0, 0%, 62%, 1);
`;
const Cta = styled.p`
  padding: 6px 0;
`;

const start = () => alert(
  'This feature is not implemented in the prototype.\n\n' +
  'In the complete version, this is where we offer a paid membership program.\n'
);

const BalanceHelp = () => (
  <Container>
    <Title>Need help?</Title>
    <Description>
      Creating account and moving funds at several exchanges is often painful and time consuming.
    </Description>
    <Description>
      Therefore, we provides a membership program, in which we will do all the operational
      things like above, so you can focus on trading:
    </Description>
    <Cta>
      <Button full large onClick={start}>Getting Started →</Button>
    </Cta>
  </Container>
);

export default BalanceHelp;
