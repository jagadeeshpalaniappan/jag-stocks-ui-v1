import axios from 'axios';

import appConfig from '../../../app/config';
const API_URL = `${appConfig.api.stocks}/api/stocks`;

export async function getStocks(config) {
  console.log('fetch::getStocks::', config);
  const params = {};
  const response = await axios.get(API_URL, { params });
  console.log('fetch::getStocks:: response:', response);
  const { data, meta } = response.data;
  return { data, pagination: meta };
}
