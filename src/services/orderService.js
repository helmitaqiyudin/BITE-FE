import axios from 'axios';

export const getOrderStatus = async (orderId) => {
  try {
    const response = await axios.get(`/api/orders/${orderId}/status`);
    return response.data.status;
  } catch (error) {
    console.error('Error occurred while fetching order status:', error);
    throw error;
  }
};