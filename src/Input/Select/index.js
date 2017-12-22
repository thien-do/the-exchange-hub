import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  background: ${props => !props.inverse ? 'hsla(0, 0%, 13%, 1)' : ''};
  color: ${props => !props.inverse ? 'hsla(0, 0%, 96%, 1)' : ''};

  display: ${props => props.full ? 'block' : 'inline-block'};
`;

const Select = styled.select`
  padding-left: ${props => props.large ? '12px' : '6px'};
  padding-right: ${props => props.large ? '30px' : '24px'}; /* for arrow */

  width: ${props => props.full ? '100%' : 'auto'};

  font-size: ${props => props.large ? '15px' : 'inherit'};
  font-weight: ${props => props.large ? '600' : 'inherit'};
  line-height: ${props => props.large ? '36px' : 'inherit'};

  &:focus { box-shadow: 0 0 0 2px #80DEEA inset; };

  transition: all 0.2s;
`;

const Arrow = styled.div`
  position: absolute;
  top:0; bottom: 0;
  right: ${props => props.large ? '12px' : '6px'};
  margin: auto;
  height: 24px; /* height to make vertical align works */

  font-size: 8px;
  pointer-events: none;

  width: 12px;
  text-align: center;
`;

class InputSelect extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.props.onChange(e.target.value, e);
  }
  render() {
    const { options, full, large, value, autoFocus, inverse } = this.props;
    return (
      <Container full={full} large={large} inverse={inverse}>
        <Select
          full={full} large={large} autoFocus={autoFocus}
          value={value} onChange={this.onChange}
        >
          {options.map(option => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </Select>
        <Arrow large={large}>▼</Arrow>
      </Container>
    );
  }
}

export default InputSelect;
