import React from 'react';
import styled from 'styled-components';

const Container = styled.a`
  text-align: left;
  line-height: 15px;
`;

const Line = styled.span`
  display: block;
  color: ${props => props[props.highlight] ? '' : 'hsla(0, 0%, 62%, 1.0)'};
`;

const WelcomeLink = ({ to, first, second, third, highlight }) => (
  <Container href={to} target="_blank">
    <Line first highlight={highlight}>{first}</Line>
    <Line second highlight={highlight}>{second}</Line>
    <Line third highlight={highlight}>{third}</Line>
  </Container>
);

export default WelcomeLink;
