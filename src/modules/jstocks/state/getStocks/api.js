import axios from 'axios';

const API_URL = `http://localhost:8000/api/stocks`;

export async function getStocks(config) {
  console.log('fetch::getStocks::', config);
  const params = {};
  const response = await axios.get(API_URL, { params });
  console.log('fetch::getStocks:: response:', response);
  const { data, meta } = response.data;
  return { data, pagination: meta };
}
