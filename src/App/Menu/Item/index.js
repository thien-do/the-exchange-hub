import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  display: block;
  position: relative;
  width: ${props => props.state ? 'calc(100% + 12px)' : '100%'};
  /* padding left for Char: 12px (original padding) + 18px (width) + 6px (margin) */
  padding: 6px 0 6px 36px;

  background: ${props => props.state ? 'hsla(0, 0%, 13%, 1)' : 'none'};
  color: ${props => props.state ? 'hsla(0, 0%, 96%, 1)' : 'hsla(0.0, 0.0%, 62.0%, 1.0)'};

  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;

  transition: all 0.1s;

  &:focus { box-shadow: 0 0 0 2px #80DEEA inset; };
  &:active {
    background: ${props => props.state
      ? 'hsla(0.0, 0.0%, 25.9%, 1.0)'
      : 'hsla(0.0, 0.0%, 87.8%, 1.0)'};
  };
`;

const Close = styled.div`
  position: absolute;
  top: 0; bottom: 0; right: 12px;
  margin: auto;

  height: 24px;
`;

const Char = styled.div`
  position: absolute;
  top: 0; bottom: 0; left: 12px;
  margin: auto;

  width: 18px; height: 18px;
  border-radius: 4px;

  font-feature-settings: "tnum";
  line-height: 18px;
  font-size: 10px;
  text-align: center;
  vertical-align: middle;

  background: ${props => props.state
    ? 'hsla(0.0, 0.0%, 25.9%, 1.0)'
    : 'hsla(0.0, 0.0%, 87.8%, 1.0)'};
  transition: all 0.1s;
`;

const MenuItem = ({ char, label, state, toggle }) => (
  <Container state={state} type="button" onClick={toggle}>
    <Char state={state}>{char}</Char>
    <span>{label}</span>
    {state && <Close>✕</Close>}
  </Container>
);

export default MenuItem;
