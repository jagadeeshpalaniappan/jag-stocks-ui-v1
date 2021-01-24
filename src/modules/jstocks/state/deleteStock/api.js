import axios from 'axios';
const API_URL = `http://localhost:8000/api/stocks`;

export async function deleteStock(stock) {
  console.log('fetch::deleteStock:: stock:', stock);

  const response = await axios.delete(`${API_URL}/${stock.id}`);

  console.log('fetch::deleteStock:: response:', response);
  return response.data;
}
