import axios from 'axios';

export async function getAllProducts() {
    try {
        const response = await axios.get('/api/products');
        return response.data;
    } catch (error) {
        console.error('Error occurred while fetching products:', error);
        throw error;
    }
}
