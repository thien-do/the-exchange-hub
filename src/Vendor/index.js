import React from 'react';

const names = {
  quoinex: 'QUOINEX',
  bitflyer: 'Bitflyer',
  gdax: 'GDAX',
  kraken: 'Kraken',
  qryptos: 'QRYPTOS',
  poloniex: 'Poloniex',
};

const Vendor = ({ value }) => (
  <span>{names[value]}</span>
);

export default Vendor;
