import axios from 'axios';
import { API_URL_MAP, STOCKS } from 'src/modules/stocks/constants';
// const API_URL = `${API_URL_MAP[STOCKS]}/stocks`;
const API_URL = `${API_URL_MAP[STOCKS]}/users`;

export async function deleteStock(stock) {
  console.log('fetch::deleteUser:: user:', stock);

  const response = await axios.delete(`${API_URL}/${stock.id}`);

  console.log('fetch::deleteUser:: response:', response);
  return response.data;
}
