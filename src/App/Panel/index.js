import React from 'react';
import styled from 'styled-components';

const widths = {
  entering: '0px', entered: '364px', // 300 + 36*2 (shadow)
  exiting: '0px', exited: '0px',
};

const Outer = styled.div`
  height: 558px; /* 486 + 36*2 (shadow) */
  overflow: hidden;
  position: relative;
  width: ${props => widths[props.state]};
  transition: all ease 0.4s;
`;

const Inner = styled.div`
  position: absolute;
  top: 24px; /* top = 36 - 12 */ left: 36px;

  background: hsla(0, 0%, 98%, 0.9);
  backdrop-filter: blur(3px);

  width: 300px; height: 486px;
  overflow: hidden;

  box-shadow: 0 12px 36px 0 hsla(0, 0%, 13%, 0.8);
`;

const Close = styled.button`
  position: absolute;
  left: 0px; right: 0px; bottom: 6px;
  margin: auto;

  width: 108px; line-height: 36px;
  text-align: center;

  color: hsla(0, 0%, 98%, 1);
  font-weight: 600;
  text-transform: uppercase;

  &:focus { box-shadow: 0 0 0 2px #80DEEA inset; };
  &:active { background: hsla(0.0, 0.0%, 12.9%, 0.3); };
`;

const Panel = ({ state, children, close }) => (
  <Outer state={state}>
    <Inner>{children}</Inner>
    <Close type="button" onClick={close}>✕ Close</Close>
  </Outer>
);

export default Panel;
