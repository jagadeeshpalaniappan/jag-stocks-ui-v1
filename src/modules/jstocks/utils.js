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

export const getLatestVal = (stock, path1, path2) => {
  // const analysis = get(stock, ['analysis', 'yf', hisKey, 'name']);
  const analysis = get(stock, path1, ['analysis', 'yf']);
  const latestAnalysis = Object.keys(analysis).sort((a, b) => b - a);
  // console.log({ stock, path1, path2, latestAnalysis });
  return get(analysis, [latestAnalysis[0], ...path2]);
};
