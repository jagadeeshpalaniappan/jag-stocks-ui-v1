import axios from 'axios';

const API_URL = `http://localhost:8000/api/stocks`;

export async function getUsers(config) {
  console.log('fetch::getUsers::', config);
  const params = {};
  const response = await axios.get(API_URL, { params });
  console.log('fetch::getUsers:: response:', response);
  const { data, meta } = response.data;
  return { data, pagination: meta };
}
