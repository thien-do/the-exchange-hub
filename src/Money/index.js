import React from 'react';

const makeFormat = (digits) =>
  Intl.NumberFormat('en-US', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format;

export const infos = {
  JPY: { symbol: '¥', code: 'JPY', format: makeFormat(0) },
  USD: { symbol: '$', code: 'USD', format: makeFormat(2) },
  BTC: { symbol: '₿', code: 'BTC', format: makeFormat(8) },
  ETH: { symbol: 'Ξ', code: 'ETH', format: makeFormat(8) },
};

const Money = ({ value, currency, display }) => {
  const info = infos[currency];
  const number = info.format(value);
  const prefix = display === 'none' ? '' : info[display];
  return <span>{prefix}{number}</span>;
};

Money.defaultProps = {
  display: 'none',
};

export default Money;
