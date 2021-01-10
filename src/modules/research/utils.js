import { get, toNumber } from 'lodash-es';

export function _getHistoryKey() {
  const dt = new Date();
  const yr = dt.getFullYear();
  const month = dt.getMonth() + 1;
  return `${yr}-${month}`;
}

// function get(stock, src, key) {
//   // check: fetchStatus: "COMPLETED"
//   //   return stock[src] ? stock[src][hisKey] && stock[src][hisKey][key] : null;
//   return get(stock, `${src}.${hisKey}.${key}`, null);
// }
