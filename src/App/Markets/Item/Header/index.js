import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: hsla(0, 0%, 96%, 0.9);
  font-weight: 600;
  font-size: 15px;
  padding: 0 12px;
  line-height: 36px;
`;
const Remove = styled.button`
  padding: 0 12px;
  &:focus { box-shadow: 0 0 0 2px #80DEEA inset; };
  &:active { background: hsla(0.0, 0.0%, 93%, 1.0); };
  transition: all 0.2s;
`;

class MarketsItemHeader extends React.Component {
  constructor(props) {
    super(props);
    this.remove = this.remove.bind(this);
  }
  remove() {
    this.props.remove(this.props.market.symbol);
  }
  render() {
    return (
      <Container>
        <span>{this.props.market.symbol}</span>
        <Remove type="button" onClick={this.remove}>✕</Remove>
      </Container>
    );
  }
};

export default MarketsItemHeader;
