import React from 'react';
import styled from 'styled-components';

import Menu from './Menu';
import Welcome from './Welcome';
import Exchange from './Exchange';
import Balance from './Balance';
import History from './History';
import Markets from './Markets';
import More from './More';

const Container = styled.div`
  width: 100%; height: 100%;
  overflow: scroll;

  display: flex;
  justify-content: center;
  align-items: center;

  /* to mimic the menu to center if there's one panel */
  padding-right: 180px;
`;

const MenuContainer = styled.div`
  flex: 0 0 auto;
  margin-right: 72px;
`;

const Panel = styled.div`
  flex: 0 0 auto;
  margin-right: 36px;

  &:last-child { margin-right: 0; };
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state =
      JSON.parse(localStorage.getItem('hub-main')) || {
        welcome: false, more: false,
        exchange: true, history: false, balance: false, markets: false,
      };

    this.toggle = Object.keys(this.state).reduce((prev, key) => ({
      ...prev, [key]: this.rawToggle.bind(this, key),
    }), {});
  }
  rawToggle(key) {
    this.setState({ [key]: !this.state[key] }, () => {
      const string = JSON.stringify(this.state);
      localStorage.setItem('hub-main', string);
    });
  }
  render() {
    const { state, toggle } = this;
    return (
      <Container>
        <MenuContainer><Menu state={state} toggle={toggle} /></MenuContainer>
        {state.welcome && <Panel><Welcome /></Panel>}
        {state.exchange && <Panel><Exchange /></Panel>}
        {state.balance && <Panel><Balance /></Panel>}
        {state.history && <Panel><History /></Panel>}
        {state.markets && <Panel><Markets /></Panel>}
        {state.more && <Panel><More /></Panel>}
      </Container>
    );
  };
};

export default App;
