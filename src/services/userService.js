import axios from 'axios';

export async function loginUser(email, password) {
    try {
        const response = await axios.post('http://localhost:8000/api/login', {
          email,
          password,
        });
    
        // Handle success
        return response.data;
      } catch (error) {
        // Handle error
        throw error;
      }
}