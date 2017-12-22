const validateExchange = (markets, state) => {
  const exchanges = markets[state.frm.currency][state.to.currency];
  // no exchanges support this exchange
  if (!exchanges) { return { ...state, exchange: '' }; }
  // check to see if current exchange support this convert
  const found = exchanges.find(exchange => exchange.name === state.exchange);
  return found ? state : { ...state, exchange: exchanges[0].name };
};

export default validateExchange;
