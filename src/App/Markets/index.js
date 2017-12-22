import React from 'react';
import styled from 'styled-components';

import Panel from 'Panel';
import Item from './Item';

const Container = styled.div`
  width: 100%; height: 100%;
  display: flex;
  flex-direction: column;
`;

const List = styled.div`
  flex: 1 1 0px;
  overflow: auto;
  padding: 24px;
`;

const ItemContainer = styled.div`
  margin-top: 24px;
  &:first-child { margin-top: 0px; };
`;

const AddContainer = styled.div`
  flex: 0 0 auto;
  padding: 24px;
`;

class Markets extends React.Component {
  constructor(props) {
    super(props);
    this.state =
      JSON.parse(localStorage.getItem('hub-markets')) || {
        symbols: ['BTCJPY', 'ETHBTC'],
      };
  }
  render() {
    return (
      <Panel>
        <Container>
          <List>
            {this.state.symbols.map(symbol => (
              <ItemContainer key={symbol}>
                <Item symbol={symbol} />
              </ItemContainer>
            ))}
          </List>
          <AddContainer>add</AddContainer>
        </Container>
      </Panel>
    );
  }
}

export default Markets;
