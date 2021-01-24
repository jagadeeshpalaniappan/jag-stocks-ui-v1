import axios from 'axios';
import appConfig from '../../../app/config';
const API_URL = `${appConfig.api.stocks}/api/stocks`;

export async function updateStock(stock) {
  console.log('fetch::updateStock::', stock);

  const { name, email, stockname, phone, sex, role, isActive } = stock;
  const body = { name, email, stockname, phone, sex, role, isActive };
  const response = await axios.put(`${API_URL}/${stock.id}`, body);

  console.log('fetch::updateStock:: response:', response);
  return response.data.stock;
}
