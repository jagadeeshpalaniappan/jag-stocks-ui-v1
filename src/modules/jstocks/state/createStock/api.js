import axios from 'axios';
import appConfig from '../../../app/config';
const API_URL = `${appConfig.api.stocks}/api/stocks`;

export async function createStock(stock) {
  console.log('fetch::createStock::', stock);
  const body = stock;
  const response = await axios.post(API_URL, body);
  console.log('fetch::createStock:: response:', response);
  return response.data.stock;
}
