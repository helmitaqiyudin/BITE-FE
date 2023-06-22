import axios from "axios";

export async function getCoupon(couponCode) {
    try {
        const response = await axios.get(`/api/coupon/${couponCode}`);
        return response.data;
    } catch (error) {
        console.error("Error occurred while fetching coupon:", error);
        throw error;
    }
}

export async function sendProofOfPayment() {
    try {
        const response = await axios.post("/api/proof");
        return response.data;
    } catch (error) {
        console.error("Error occurred while sending proof of payment:", error);
        throw error;
    }
}

export const placeOrder = async (orderData, status) => {
    try {
        const response = await axios.post(`/api/orders`, {
            ...orderData,
            status,
        });
        return response.data;
    } catch (error) {
        throw new Error('Error placing the order:', error);
    }
};
