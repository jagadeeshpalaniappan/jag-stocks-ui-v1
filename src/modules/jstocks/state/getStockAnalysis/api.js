import axios from 'axios';
import { get } from 'lodash-es';
import { _getHistoryKey } from '../../utils';
import appConfig from '../../../app/config';
const API_URL = `${appConfig.api.stocks}/api/stockAnalysis`;

const sleep = timer => new Promise(resolve => setTimeout(resolve, timer));

async function getStockAnalysisDetails({ stockId, fetchSrcs }) {
  console.log('fetch::getStockAnalysisDetails::', stockId, fetchSrcs);

  const allPromises = [];
  for (const fetchSrc of fetchSrcs) {
    await sleep(500);
    const resp = axios.get(`${API_URL}/${stockId}/${fetchSrc}`);
    allPromises.push(resp);
  }

  const allSrcResp = await Promise.all(allPromises);
  console.log('fetch::getStockAnalysisDetails:: response:', allSrcResp);
  return allSrcResp;
}

const canFetch = (stock, src) => {
  return !get(stock, ['analysis', src, _getHistoryKey()]);
};

export async function getStockAnalysis(stocks) {
  console.log('fetch::getStockAnalysis::', stocks);
  const fetchStockSrcMap = stocks.reduce((res, stock) => {
    const fetchSrcs = [];
    if (canFetch(stock, 'yf')) fetchSrcs.push('yf');
    if (canFetch(stock, 'rh')) fetchSrcs.push('rh');
    if (canFetch(stock, 'rhg')) fetchSrcs.push('rhg');
    if (fetchSrcs.length > 0) res[stock.stockId] = fetchSrcs;
    return res;
  }, {});

  console.log('fetch::getStockAnalysis:: fetchStockSrcMap:', fetchStockSrcMap);

  const allPromises = [];
  for (const stockId of Object.keys(fetchStockSrcMap)) {
    await sleep(500);
    const resp = getStockAnalysisDetails({
      stockId,
      fetchSrcs: fetchStockSrcMap[stockId]
    });
    allPromises.push(resp);
  }
  const allStocksResp = await Promise.all(allPromises);
  console.log('fetch::getStockAnalysis:: response:', allStocksResp);
  return allStocksResp;
}
