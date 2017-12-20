import { infos as moneyInfos } from 'Money';

const validateAmount = (markets, state, group) => {
  // if no vendor supports this then just skip
  if (!state.vendor) { return state; }
  // get detail information
  const detail = markets[state.frm.currency][state.to.currency]
    .find(vendor => vendor.name === state.vendor);
  const opsGroup = group === 'to' ? 'frm' : 'to';
  // calculate amount with rate
  let nextAmount = group === 'frm'
    ? state[group].amount * detail.rate
    : state[group].amount / detail.rate;
  // take fee into account
  nextAmount = group === 'frm'
    ? nextAmount * (1 - detail.fee)
    : nextAmount * (1 + detail.fee);
  // rounding using Money
  const info = moneyInfos[state[opsGroup].currency];
  nextAmount = info.format(nextAmount).replace(/,/g, '');
  nextAmount = Number(nextAmount);
  // put amount into next state
  const nextGroup = { ...state[opsGroup], amount: nextAmount };
  const nextState = { ...state, [opsGroup]: nextGroup };
  return nextState;
};

export default validateAmount;
