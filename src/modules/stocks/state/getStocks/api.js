import axios from 'axios';

import { API_URL_MAP, STOCKS } from 'src/modules/common/constants';
const API_URL = `${API_URL_MAP[STOCKS]}/stocks`;

export async function getStocks(config) {
  console.log('fetch::getStocks::', config);
  const params = {};
  const response = await axios.get(API_URL, { params });
  console.log('fetch::getStocks:: response:', response);
  const { data, meta } = response.data;
  return { data, pagination: meta };
}
