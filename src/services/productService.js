import axios from 'axios';

export async function getAllProducts() {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/food');
        // edit response.data.img to add assets/produk/
        response.data.forEach((product) => {
            product.img = `assets/produk/${product.img}`;
        });
        return response.data;
    } catch (error) {
        console.error('Error occurred while fetching products:', error);
        throw error;
    }
}
