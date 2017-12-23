import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  display: flex;
  justify-content: space-between;

  width: ${props => props.state ? 'calc(100% + 12px)' : '100%'};
  padding: 0 12px;

  background: ${props => props.state ? 'hsla(0, 0%, 13%, 1)' : 'none'};
  color: ${props => props.state ? 'hsla(0, 0%, 96%, 1)' : 'hsla(0.0, 0.0%, 62.0%, 1.0)'};

  font-size: 13px; line-height: 36px;
  font-weight: 600;
  text-transform: uppercase;

  transition: all 0.1s;

  &:focus { box-shadow: 0 0 0 2px #80DEEA inset; };
`;

const MenuItem = ({ label, state, toggle }) => (
  <Container state={state} type="button" onClick={toggle}>
    <span>{label}</span>
    {state && <span>✕</span>}
  </Container>
);

export default MenuItem;
