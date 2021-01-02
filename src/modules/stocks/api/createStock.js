import axios from 'axios';

const USER_REST_API = 'https://jag-rest-api.vercel.app/demo/rest/v1/api/users';

async function createStock(stock) {
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
  const response = await axios.post(USER_REST_API, body);

  console.log('fetch::createStock:: response:', response);
  return response.data.user;
}

export default createStock;
