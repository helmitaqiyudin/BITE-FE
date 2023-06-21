import axios from 'axios';

export async function registerUser(name, email, password) {
    const response = await axios.post('http://localhost:3000/api/register', {
        name,
        email,
        password,
    });
    return response.data;
  }