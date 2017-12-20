import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  /* reset */
  appearance: checkbox;
  /* hide */
  opacity: 0;
  position: absolute;
  pointer-events: none;

  &:focus + div { box-shadow: 0 0 0 2px hsla(187, 72%, 71%, 1) inset; };
  &:active + div { background: hsla(0.0, 0.0%, 93%, 1.0); };
  &:checked + div:before { content: '✓'; };
`;

const Check = styled.div`
  width: 12px; height: 12px;
  box-shadow: 0 0 0 2px hsla(0, 0%, 13%, 1) inset;

  margin-right: 12px;

  &:before {
    display: block; width: 12px;
    font-size: 10px; line-height: 12px;
    text-align: center ;
  };
`;

class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.props.onChange(e.target.checked, e);
  }
  render() {
    const { children, value, ...others } = this.props;
    delete others.onChange;
    return (
      <Label class="container">
        <Input type="checkbox" {...others} checked={value} onChange={this.onChange} />
        <Check />
        <span>{children}</span>
      </Label>
    );
  }
}

export default InputText;
