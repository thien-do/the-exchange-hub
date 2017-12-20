import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  background: hsla(0, 0%, 96%, 1);

  text-align: center;
  width: ${props => props.full ? '100%' : 'auto'};

  font-size: ${props => props.large ? '15px' : 'inherit'};
  font-weight: ${props => props.large ? '600' : 'inherit'};
  line-height: ${props => props.large ? '36px' : 'inherit'};

  &:focus { box-shadow: 0 0 0 2px hsla(187, 72%, 71%, 1) inset; };

  transition: all 0.2s;
`;

class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.props.onChange(e.target.value, e);
  }
  render() {
    const props = { ...this.props };
    delete props.onChange;
    return (
      <Input type="text" onChange={this.onChange} {...props} />
    );
  }
}

export default InputText;
