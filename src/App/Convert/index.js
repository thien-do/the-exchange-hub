import React from 'react';
import styled from 'styled-components';

import Panel from 'Panel';

import Input from './Input';
import Exchange from './Exchange';
import ExchangeSelect from './ExchangeSelect';
import Confirm from './Confirm';
import Submit from './Submit';

import markets from './_data/markets';
import balances from './_data/balances';

import validateAmount from './_validate/amount';
import validateExchange from './_validate/exchange';

const Container = styled.div`position: relative;`;
const Popover = styled.div`
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
`;

class Convert extends React.Component {
  constructor(props) {
    super(props);
    this.state =
      JSON.parse(localStorage.getItem('hub-convert')) || {
        frm: { currency: 'JPY', amount: 4000000 },
        to: { currency: 'BTC', amount: 1.80866545 },
        exchange: 'bitflyer', exchangeSelect: false,
        confirm: true,
      };

    this.setStateAndSave = this.setStateAndSave.bind(this);

    this.toggleExchangeSelect = this.toggleExchangeSelect.bind(this);

    this.set = { frm: {}, to: {} };
    this.set.frm.currency = this.rawSet.bind(this, 'frm', 'currency');
    this.set.frm.amount = this.rawSet.bind(this, 'frm', 'amount');
    this.set.to.currency = this.rawSet.bind(this, 'to', 'currency');
    this.set.to.amount = this.rawSet.bind(this, 'to', 'amount');
    this.set.exchange = this.rawSet.bind(this, 'exchange', null);
    this.set.confirm = this.rawSet.bind(this, 'confirm', null);
  }
  toggleExchangeSelect() {
    this.setStateAndSave({ exchangeSelect: !this.state.exchangeSelect });
  }
  rawSet(group, key, value) {
    const nextGroup = key
      ? { ...this.state[group], [key]: value } // frm & to
      : value; // exchange
    let nextState = { ...this.state, [group]: nextGroup };
    if (group === 'exchange') {
      // when change exchange we should update the amount
      // TODO: target group here should be whatever last group chosen
      nextState = validateAmount(markets, nextState, 'to');
    } else if (key === 'currency') {
      nextState = validateExchange(markets, nextState);
      // when change currency we want to validate the amount of the same group
      nextState = validateAmount(markets, nextState, group);
    } else if (key === 'amount') {
      // when change amount, we want to validate the amount of the opposite group
      const target = group === 'to' ? 'frm' : 'to';
      nextState = validateAmount(markets, nextState, target);
    }
    this.setStateAndSave(nextState);
  }
  setStateAndSave(nextState) {
    this.setState(nextState, () => {
      const string = JSON.stringify(this.state);
      localStorage.setItem('hub-convert', string);
    });
  }
  render() {
    const { state, set, toggleExchangeSelect } = this;
    return (
      <Panel>
        <Container>
          <form>
            <Input
              legend="Spend:" minus autoFocus
              currency={state.frm.currency} setCurrency={set.frm.currency}
              amount={state.frm.amount} setAmount={set.frm.amount}
              balances={balances} exchange={state.exchange}
            />
            <Exchange
              frm={state.frm} to={state.to} markets={markets}
              exchange={state.exchange} action={toggleExchangeSelect}
            />
            <Input
              legend="Receive:" add
              currency={state.to.currency} setCurrency={set.to.currency}
              amount={state.to.amount} setAmount={set.to.amount}
              balances={balances} exchange={state.exchange}
            />
            <Confirm
              confirm={state.confirm} setConfirm={set.confirm}
            />
            <Submit
              balances={balances} frm={state.frm} exchange={state.exchange}
            />
          </form>
          {state.exchangeSelect && (
            <Popover>
              <ExchangeSelect
                markets={markets} balances={balances} close={toggleExchangeSelect}
                value={state.exchange} onChange={set.exchange}
                frm={state.frm.currency} to={state.to.currency}
              />
            </Popover>
          )}
        </Container>
      </Panel>
    );
  }
}

export default Convert;
