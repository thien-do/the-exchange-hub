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
  { char: 'q', name: 'welcome', label: 'Welcome', Component: Welcome },
  { char: 'w', name: 'convert', label: 'Convert', Component: Convert },
  { char: 'e', name: 'balance', label: 'Balance', Component: Balance },
  { char: 'r', name: 'history', label: 'History', Component: History },
  { char: 't', name: 'markets', label: 'Markets', Component: Markets },
  { char: 'y', name: 'more', label: 'More?', Component: More },
];

const Container = styled(TransitionGroup)`
  width: 100%; height: 90%;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  /* to mimic the menu to center if there's one panel */
  padding-right: 180px;
`;

const MenuCon = styled.div`
  flex: 0 0 auto;
  margin-right: 36px;
`;

// should not define margin here as it will affect the animation
const PanelCon = styled.div`
  flex: 0 0 auto;
`;

const PanelTrans = ({ Component, close, ...others }) => (
  <Transition in={others.in} timeout={{ enter: 10, exit: 400 }} unmountOnExit>
    {(state) => (
      <PanelCon>
        <Panel close={close} state={state}><Component /></Panel>
      </PanelCon>
    )}
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
  componentDidMount() {
    document.addEventListener('keydown', (event) => {
      const panel = panels.find(p => p.char === event.key);
      if (!panel) { return; }
      const toggle = this.toggle[panel.name];
      if (!toggle) { return; }
      toggle();
    });
  }
  render() {
    const { state, toggle } = this;
    return (
      <Container>
        {/* this Transition here is because Container is a TransitionGroup */}
        <Transition timeout={0}>
          <MenuCon><Menu panels={panels} state={state} toggle={toggle} /></MenuCon>
        </Transition>
        {panels
          .filter(panel => state[panel.name])
          .map((panel) => (
            <PanelTrans key={panel.name} close={toggle[panel.name]} Component={panel.Component} />
          ))}
      </Container>
    );
  };
};

export default App;
