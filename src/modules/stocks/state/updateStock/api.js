import axios from 'axios';
import { API_URL_MAP, STOCKS } from 'src/modules/common/constants';
// const API_URL = `${API_URL_MAP[STOCKS]}/stocks`;
const API_URL = `${API_URL_MAP[STOCKS]}/users`;

export async function updateStock(stock) {
  console.log('fetch::updateStock::', stock);

  const { name, email, username, phone, sex, role } = stock;
  const body = {
    name,
    email: 'tmp@jag.sh',
    username: 'jagtmp',
    phone: '1111',
    sex: 'M',
    role: 'Dev'
  };
  const response = await axios.put(`${API_URL}/${stock.id}`, body);

  console.log('fetch::updateStock:: response:', response);
  return response.data.user;
}
