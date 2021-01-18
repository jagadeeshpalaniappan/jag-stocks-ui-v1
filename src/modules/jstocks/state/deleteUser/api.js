import axios from 'axios';
const API_URL = `http://localhost:8000/api/stocks`;

export async function deleteUser(user) {
  console.log('fetch::deleteUser:: user:', user);

  const response = await axios.delete(`${API_URL}/${user.id}`);

  console.log('fetch::deleteUser:: response:', response);
  return response.data;
}
