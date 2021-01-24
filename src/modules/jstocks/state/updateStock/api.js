import axios from 'axios';
const API_URL = `http://localhost:8000/api/stocks`;

export async function updateStock(stock) {
  console.log('fetch::updateStock::', stock);

  const { name, email, stockname, phone, sex, role, isActive } = stock;
  const body = { name, email, stockname, phone, sex, role, isActive };
  const response = await axios.put(`${API_URL}/${stock.id}`, body);

  console.log('fetch::updateStock:: response:', response);
  return response.data.stock;
}
