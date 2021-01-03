import axios from 'axios';

const USER_REST_API = 'https://jag-rest-api.vercel.app/demo/rest/v1/api/users';

export async function getStocks(config) {
  console.log('fetch::getStocks::', config);
  const params = {};
  const response = await axios.get(USER_REST_API, { params });
  console.log('fetch::getStocks:: response:', response);
  const { data, meta } = response.data;
  return { data, pagination: meta };
}
