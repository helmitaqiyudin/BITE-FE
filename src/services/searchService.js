import axios from 'axios';

export async function searchProducts(searchTerm) {
  try {
    const response = await axios.get(`/api/search?term=${searchTerm}`);
    return response.data;
  } catch (error) {
    console.error('Error occurred during search:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
}