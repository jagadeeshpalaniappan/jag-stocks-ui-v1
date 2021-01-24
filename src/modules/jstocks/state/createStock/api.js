import axios from 'axios';
const API_URL = `http://localhost:8000/api/stocks`;

export async function createStock(stock) {
  console.log('fetch::createStock::', stock);
  const body = stock;
  const response = await axios.post(API_URL, body);
  console.log('fetch::createStock:: response:', response);
  return response.data.stock;
}
