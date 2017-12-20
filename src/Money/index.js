import React from 'react';

const makeFormat = (digits) =>
  Intl.NumberFormat('en-US', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format;

const infos = {
  JPY: { symbol: '¥', code: 'JPY', format: makeFormat(0) },
  USD: { symbol: '$', code: 'USD', format: makeFormat(2) },
  BTC: { symbol: '₿', code: 'BTC', format: makeFormat(8) },
  ETH: { symbol: 'Ξ', code: 'ETH', format: makeFormat(8) },
};

const Money = ({ value, currency, display }) => {
  const info = infos[currency];
  return <span>{info.format(value)}</span>;
};

Money.defaultProps = {
  display: 'symbol',
};

export default Money;
