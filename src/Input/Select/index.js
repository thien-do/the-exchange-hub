import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  background: hsla(0, 0%, 13%, 0.9);
  color: hsla(0, 0%, 96%, 0.9);
`;

const Select = styled.select`
  padding-left: 12px;
  width: ${props => props.full ? '100%' : 'auto'};

  font-size: ${props => props.large ? '15px' : 'inherit'};
  font-weight: ${props => props.large ? '600' : 'inherit'};
  line-height: ${props => props.large ? '36px' : 'inherit'};

  &:focus { box-shadow: 0 0 0 2px #80DEEA inset; };

  transition: all 0.2s;
`;

const Arrow = styled.div`
  position: absolute;
  top:0; right: 12px; bottom: 0;
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
    const { options, full, large, value } = this.props;
    return (
      <Wrapper>
        <Select full={full} large={large} value={value} onChange={this.onChange}>
          {options.map(option => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </Select>
        <Arrow>▼</Arrow>
      </Wrapper>
    );
  }
}

export default InputSelect;
