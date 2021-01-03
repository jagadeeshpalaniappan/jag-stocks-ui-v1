import axios from 'axios';
import { API_URL_MAP, STOCKS } from 'src/modules/common/constants';
// const API_URL = `${API_URL_MAP[STOCKS]}/stocks`;
const API_URL = `${API_URL_MAP[STOCKS]}/users`;

export async function createStock(stock) {
  console.log('fetch::createStock::', stock);

  const { name, email, username, phone, sex, role } = stock;
  const body = {
    name,
    email: 'tmp@jag.sh',
    username: 'jagtmp',
    phone: '1111',
    sex: 'M',
    role: 'Dev'
  };
  const response = await axios.post(API_URL, body);

  console.log('fetch::createStock:: response:', response);
  return response.data.user;
}
