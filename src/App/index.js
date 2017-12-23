import React from 'react';
import styled from 'styled-components';
import { Transition, TransitionGroup } from 'react-transition-group'

import Panel from './Panel';
import Menu from './Menu';

import Welcome from './Welcome';
import Convert from './Convert';
import Balance from './Balance';
import History from './History';
import Markets from './Markets';
import More from './More';

const panels = [
  { name: 'welcome', Component: Welcome },
  { name: 'convert', Component: Convert },
  { name: 'balance', Component: Balance },
  { name: 'history', Component: History },
  { name: 'markets', Component: Markets },
  { name: 'more', Component: More },
];

const Container = styled(TransitionGroup)`
  width: 100%; height: 90%;
  overflow: scroll;

  display: flex;
  justify-content: center;
  align-items: center;

  /* to mimic the menu to center if there's one panel */
  padding-right: 180px;
`;

const MenuCon = styled.div`
  flex: 0 0 auto;
  margin-right: 72px;
`;

// should not define margin here as it will affect the animation
const PanelCon = styled.div`
  flex: 0 0 auto;
`;

const PanelTrans = ({ children, ...props }) => (
  <Transition {...props} timeout={{ enter: 10, exit: 400 }}>
    {(state) => <PanelCon><Panel state={state}>{children}</Panel></PanelCon>}
  </Transition>
);


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state =
      JSON.parse(localStorage.getItem('hub-app')) || {
        welcome: false, more: false,
        convert: true, history: false, balance: false, markets: false,
      };

    this.toggle = Object.keys(this.state).reduce((prev, key) => ({
      ...prev, [key]: this.rawToggle.bind(this, key),
    }), {});
  }
  rawToggle(key) {
    this.setState({ [key]: !this.state[key] }, () => {
      const string = JSON.stringify(this.state);
      localStorage.setItem('hub-app', string);
    });
  }
  render() {
    const { state, toggle } = this;
    return (
      <Container>
        <MenuCon><Menu state={state} toggle={toggle} /></MenuCon>
        {panels
          .filter(panel => state[panel.name])
          .map(({ name, Component }) => <PanelTrans key={name}><Component /></PanelTrans>)}
      </Container>
    );
  };
};

export default App;
