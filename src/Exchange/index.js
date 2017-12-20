import React from 'react';

import Panel from 'Panel';
import Input from './Input';
import Vendor from './Vendor';

import markets from './data/markets';
import balances from './data/balances';

const validateVendor = (state) => {
  const vendors = markets[state.frm.currency][state.to.currency];
  // no vendors support this exchange
  if (!vendors) { return { ...state, vendor: '' }; }
  // check to see if current vendor support this exchange
  const found = vendors.find(vendor => vendor.name === state.vendor);
  return found ? state : { ...state, vendor: vendors[0].name };
};

class Exchange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    nextState = key === 'currency' ? validateVendor(nextState) : nextState;
    this.setState(nextState);
  }
  render() {
    const { state, set } = this;
    return (
      <Panel>
        <form>
          <Input
            legend="Spend exactly:" minus
            currency={state.frm.currency} setCurrency={set.frm.currency}
            amount={state.frm.amount} setAmount={set.frm.amount}
            balances={balances} vendor={state.vendor}
          />
          <Vendor
            frm={state.frm.currency} to={state.to.currency}
            vendor={state.vendor} setVendor={set.vendor}
            markets={markets}
          />
          <Input
            legend="Receive approximately:" add
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
