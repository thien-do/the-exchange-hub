const validateVendor = (markets, state) => {
  const vendors = markets[state.frm.currency][state.to.currency];
  // no vendors support this exchange
  if (!vendors) { return { ...state, vendor: '' }; }
  // check to see if current vendor support this exchange
  const found = vendors.find(vendor => vendor.name === state.vendor);
  return found ? state : { ...state, vendor: vendors[0].name };
};

export default validateVendor;
