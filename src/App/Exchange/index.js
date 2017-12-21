import React from 'react';
import styled from 'styled-components';

import Panel from 'Panel';

import Input from './Input';
import Vendor from './Vendor';
import VendorSelect from './VendorSelect';
import Confirm from './Confirm';
import Submit from './Submit';

import markets from './_data/markets';
import balances from './_data/balances';

import validateAmount from './_validate/amount';
import validateVendor from './_validate/vendor';

const Container = styled.div`position: relative;`;
const Popover = styled.div`
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
`;

class Exchange extends React.Component {
  constructor(props) {
    super(props);
    this.state =
      JSON.parse(localStorage.getItem('hub-exchange')) || {
        frm: { currency: 'JPY', amount: 4000000 },
        to: { currency: 'BTC', amount: 1.80866545 },
        vendor: 'bitflyer', vendorSelect: false,
        confirm: true,
      };

    this.setStateAndSave = this.setStateAndSave.bind(this);

    this.toggleVendorSelect = this.toggleVendorSelect.bind(this);

    this.set = { frm: {}, to: {} };
    this.set.frm.currency = this.rawSet.bind(this, 'frm', 'currency');
    this.set.frm.amount = this.rawSet.bind(this, 'frm', 'amount');
    this.set.to.currency = this.rawSet.bind(this, 'to', 'currency');
    this.set.to.amount = this.rawSet.bind(this, 'to', 'amount');
    this.set.vendor = this.rawSet.bind(this, 'vendor', null);
    this.set.confirm = this.rawSet.bind(this, 'confirm', null);
  }
  toggleVendorSelect() {
    this.setStateAndSave({ vendorSelect: !this.state.vendorSelect });
  }
  rawSet(group, key, value) {
    const nextGroup = key
      ? { ...this.state[group], [key]: value } // frm & to
      : value; // vendor
    let nextState = { ...this.state, [group]: nextGroup };
    if (group === 'vendor') {
      // when change vendor we should update the amount
      // TODO: target group here should be whatever last group chosen
      nextState = validateAmount(markets, nextState, 'to');
    } else if (key === 'currency') {
      nextState = validateVendor(markets, nextState);
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
      localStorage.setItem('hub-exchange', string);
    });
  }
  render() {
    const { state, set, toggleVendorSelect } = this;
    return (
      <Panel>
        <Container>
          <form>
            <Input
              legend="Spend:" minus autoFocus
              currency={state.frm.currency} setCurrency={set.frm.currency}
              amount={state.frm.amount} setAmount={set.frm.amount}
              balances={balances} vendor={state.vendor}
            />
            <Vendor
              frm={state.frm} to={state.to} markets={markets}
              vendor={state.vendor} action={toggleVendorSelect}
            />
            <Input
              legend="Receive:" add
              currency={state.to.currency} setCurrency={set.to.currency}
              amount={state.to.amount} setAmount={set.to.amount}
              balances={balances} vendor={state.vendor}
            />
            <Confirm
              confirm={state.confirm} setConfirm={set.confirm}
            />
            <Submit
              balances={balances} frm={state.frm} vendor={state.vendor}
            />
          </form>
          {state.vendorSelect && (
            <Popover>
              <VendorSelect
                markets={markets} balances={balances} close={toggleVendorSelect}
                value={state.vendor} onChange={set.vendor}
                frm={state.frm.currency} to={state.to.currency}
              />
            </Popover>
          )}
        </Container>
      </Panel>
    );
  }
}

export default Exchange;
