// 1 level is frm, ie: the currency to sell (minus from balance)
// ---> use market bid
// 2 level is to, ie: the currency to buy (add to balance)
// ---> use market ask
export default {
  BTC: {
    JPY: [
      { name: 'bitflyer', rate: 1964820, fee: 0.001 },
      { name: 'quoinex', rate: 1995212.11056, fee: 0.0015 },
    ],
    USD: [
      { name: 'gdax', rate: 16998.35, fee: 0.002 },
      { name: 'kraken', rate: 16655.30, fee: 0.002 },
      { name: 'quoinex', rate: 17643.78319, fee: 0.0015 },
    ],
    ETH: [
      { name: 'qryptos', rate: 1/0.04725, fee: 0.0015 },
      { name: 'poloniex', rate: 1/0.04710561, fee: 0.002 },
      { name: 'quoinex', rate: 1/0.0455, fee: 0.0015 },
    ],
  },
  ETH: {
    BTC: [
      { name: 'qryptos', rate: 0.04701, fee: 0.0015 },
      { name: 'poloniex', rate: 0.04710394, fee: 0.002 },
      { name: 'quoinex', rate: 0.04431, fee: 0.0015 },
    ],
    JPY: [
      { name: 'kraken', rate: 92925, fee: 0.002 },
      { name: 'quoinex', rate: 89104.695, fee: 0.0015 },
    ],
  },
  JPY: {
    BTC: [
      { name: 'bitflyer', rate: 1/2044545, fee: 0.001 },
      { name: 'quoinex', rate: 1/1997620.40501, fee: 0.0015 },
    ],
    ETH: [
      { name: 'kraken', rate: 1/97500, fee: 0.002 },
      { name: 'quoinex', rate: 1/90969, fee: 0.0015 },
    ],
  },
  USD: {
    BTC: [
      { name: 'gdax', rate: 1/16999.98, fee: 0.002 },
      { name: 'kraken', rate: 1/16764.60, fee: 0.002 },
      { name: 'quoinex', rate: 1/17665.22579, fee: 0.0015 },
    ],
  },
};
