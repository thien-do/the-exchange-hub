import React from 'react';
import styled from 'styled-components';

const Main = styled.button`
  background: hsla(0, 0%, 13%, 1);
  color: hsla(0, 0%, 96%, 1);

  text-align: center;
  width: ${props => props.full ? '100%' : 'auto'};
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;

  font-size: ${props => {
    if (props['x-large']) { return '18px'; }
    if (props['large']) { return '15px'; }
    return 'inherit';
  }};
  line-height: ${props => {
    if (props['x-large']) { return '48px'; }
    if (props['large']) { return '36px'; }
    return 'inherit';
  }};

  &:focus { box-shadow: 0 0 0 2px hsla(187, 72%, 71%, 1) inset; };
  &:disabled { background: hsla(0.0, 0.0%, 62.0%, 1.0); };

  transition: all 0.2s;
`;

const Button = (props) => (
  <Main type="button" {...props} />
);

export default Button;
