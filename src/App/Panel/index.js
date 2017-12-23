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

const Panel = ({ state, children }) => (
  <Outer state={state}>
    <Inner>{children}</Inner>
  </Outer>
);

export default Panel;
