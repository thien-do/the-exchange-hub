import React from 'react';

import Panel from 'Panel';
import Input from './Input';
import Vendor from './Vendor';

import markets from './data/markets';
import balances from './data/balances';

import validateAmount from './validate/amount';
import validateVendor from './validate/vendor';

class Exchange extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(localStorage.getItem('hub-exchange')) || {
      frm: { currency: 'JPY', amount: 4000000 },
      to: { currency: 'BTC', amount: 1.80866545 },
      vendor: 'bitflyer',
    };

    this.set = { frm: {}, to: {} };
    this.set.frm.currency = this.rawSet.bind(this, 'frm', 'currency');
    this.set.frm.amount = this.rawSet.bind(this, 'frm', 'amount');
    this.set.to.currency = this.rawSet.bind(this, 'to', 'currency');
    this.set.to.amount = this.rawSet.bind(this, 'to', 'amount');
    this.set.vendor = this.rawSet.bind(this, 'vendor', null);
  }
  rawSet(group, key, value) {
    const nextGroup = key
      ? { ...this.state[group], [key]: value } // frm & to
      : value; // vendor
    let nextState = { ...this.state, [group]: nextGroup };
    if (key === 'currency') {
      nextState = validateVendor(markets, nextState);
      nextState = validateAmount(markets, nextState, group);
    } else if (key === 'amount') {
      nextState = validateAmount(markets, nextState, group);
    }
    this.setState(nextState);
    localStorage.setItem('hub-exchange', JSON.stringify(nextState));
  }
  render() {
    const { state, set } = this;
    return (
      <Panel>
        <form>
          <Input
            legend="Spend:" minus
            currency={state.frm.currency} setCurrency={set.frm.currency}
            amount={state.frm.amount} setAmount={set.frm.amount}
            balances={balances} vendor={state.vendor}
          />
          <Vendor
            frm={state.frm} to={state.to} markets={markets}
            vendor={state.vendor}
          />
          <Input
            legend="Receive:" add
            currency={state.to.currency} setCurrency={set.to.currency}
            amount={state.to.amount} setAmount={set.to.amount}
            balances={balances} vendor={state.vendor}
          />
        </form>
      </Panel>
    );
  }
}

export default Exchange;
