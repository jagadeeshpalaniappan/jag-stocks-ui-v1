import axios from 'axios';
import appConfig from '../../../app/config';
const API_URL = `${appConfig.api.stocks}/api/stocks`;

export async function deleteStock(stock) {
  console.log('fetch::deleteStock:: stock:', stock);

  const response = await axios.delete(`${API_URL}/${stock.id}`);

  console.log('fetch::deleteStock:: response:', response);
  return response.data;
}
