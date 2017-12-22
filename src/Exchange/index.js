import React from 'react';

export const names = {
  quoinex: 'QUOINEX',
  bitflyer: 'Bitflyer',
  gdax: 'GDAX',
  kraken: 'Kraken',
  qryptos: 'QRYPTOS',
  poloniex: 'Poloniex',
};

const Exchange = ({ value }) => (
  <span>{names[value]}</span>
);

export default Exchange;
