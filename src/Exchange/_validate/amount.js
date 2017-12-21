import { infos as moneyInfos } from 'Money';

// NOTE: "target" here is the group that have the amount that need to be calculated again
// --->  "base" is the opposite group that has the amount that supposed to be fixed
const validateAmount = (markets, state, target) => {
  // if no vendor supports this then just skip
  if (!state.vendor) { return state; }
  // get detail information
  const detail = markets[state.frm.currency][state.to.currency]
    .find(vendor => vendor.name === state.vendor);
  // calculate amount with rate
  const base = target === 'frm' ? 'to' : 'frm';
  let nextAmount = base === 'frm'
    ? state[base].amount * detail.rate
    : state[base].amount / detail.rate;
  // take fee into account
  nextAmount = base === 'frm'
    ? nextAmount * (1 - detail.fee)
    : nextAmount * (1 + detail.fee);
  // rounding using Money
  const info = moneyInfos[state[target].currency];
  nextAmount = info.format(nextAmount).replace(/,/g, '');
  nextAmount = Number(nextAmount);
  // put amount into next state
  const nextGroup = { ...state[target], amount: nextAmount };
  const nextState = { ...state, [target]: nextGroup };
  return nextState;
};

export default validateAmount;
