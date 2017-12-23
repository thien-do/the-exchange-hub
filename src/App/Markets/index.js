import React from 'react';
import styled from 'styled-components';

import Item from './Item';
import Add from './Add';

import markets from './_data/markets';

const Container = styled.div`
  width: 100%; height: 100%;
  overflow: auto;
  padding: 24px;
`;

const Child = styled.div`
  margin-top: 24px;
  &:first-child { margin-top: 0px; };
`;

class Markets extends React.Component {
  constructor(props) {
    super(props);
    this.state =
      JSON.parse(localStorage.getItem('hub-markets')) ||
      { symbols: ['BTCJPY', 'ETHBTC'] };
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.setStateAndSave = this.setStateAndSave.bind(this);
  }
  add(symbol) {
    this.setStateAndSave({ symbols: this.state.symbols.concat(symbol) });
  }
  remove(symbol) {
    this.setStateAndSave({ symbols: this.state.symbols.filter(s => s !== symbol) });
  }
  setStateAndSave(nextState) {
    this.setState(nextState, () => {
      const string = JSON.stringify(this.state);
      localStorage.setItem('hub-markets', string);
    });
  }
  render() {
    const { symbols } = this.state;
    return (
      <Container>
        {symbols.map(symbol => (
          <Child key={symbol}>
            <Item symbol={symbol} markets={markets} remove={this.remove} />
          </Child>
        ))}
        <Child>
          <Add symbols={symbols} markets={markets} submit={this.add} />
        </Child>
      </Container>
    );
  }
}

export default Markets;
