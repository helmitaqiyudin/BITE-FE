'use client'
import React, { useState, useEffect } from 'react';
import { getCoupon, placeOrder, sendProofOfPayment } from '@/services/paymentService';

function Payment() {
  const [couponCode, setCouponCode] = useState('');
  const [subtotal, setSubtotal] = useState(0);
  const [showProofModal, setShowProofModal] = useState(false);
  const [orderSummary, setOrderSummary] = useState(null);

  useEffect(() => {
    // Retrieve the order summary from localStorage
    const summary = localStorage.getItem('orderSummary');
    if (summary) {
      setOrderSummary(JSON.parse(summary));
      setSubtotal(JSON.parse(summary).cartSubtotal);
    }
  }, []);

  const handleCouponCodeChange = (event) => {
    setCouponCode(event.target.value);
  };

  const handleApplyCoupon = async () => {
    try {
      const coupon = await getCoupon(couponCode);
      if (coupon) {
        const discountedSubtotal = subtotal - subtotal * coupon.discount;
        setSubtotal(discountedSubtotal);
      } else {
        // Coupon not found or invalid
        console.log('Coupon not found or invalid');
      }
    } catch (error) {
      console.log('Error retrieving coupon:', error);
    }
  };

  const handleSendProof = async () => {
    try {
      // Perform logic to send proof to admin via WhatsApp
      await sendProofOfPayment();

      // if successful, close the modal
      setShowProofModal(false);

      // After sending proof, navigate to the order success page
    } catch (error) {
      console.log('Error sending proof of payment:', error);
    }
  };

  const handleOpenProofModal = () => {
    setShowProofModal(true);
  };

  const handleCloseProofModal = () => {
    setShowProofModal(false);
  };

  const handlePlaceOrder = async (event) => {
    event.preventDefault();

    try {
      // Perform logic to place order
      await placeOrder();

      // After placing order, go back to the home page
      window.location.href = '/';

      // After placing order, navigate to the order success page
    } catch (error) {
      console.log('Error placing order:', error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Payment</h2>

      <div className="border rounded p-4 mb-4">
        <h3 className="text-lg font-semibold mb-2">Order Summary:</h3>
        <ul>
          {orderSummary?.cartItems.map((item) => (
            <li key={item.id} className="mb-2">
              <div>{item.name}</div>
              <div>Quantity: {item.quantity}</div>
              <div>Price: Rp. {item.price * item.quantity}</div>
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <h4 className="font-semibold">Subtotal: Rp. {subtotal}</h4>
        </div>
      </div>

      <div className="border rounded p-4">
        <h3 className="text-lg font-semibold mb-2">Coupon Code:</h3>
        <div className="flex items-center mb-4">
          <input
            className="border rounded px-4 py-2 mr-2 text-black"
            type="text"
            value={couponCode}
            onChange={handleCouponCodeChange}
            placeholder="Enter coupon code"
          />
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            onClick={handleApplyCoupon}
          >
            Apply Coupon
          </button>
        </div>


          <div>
            <h4 className="font-semibold">Bank Transfer:</h4>
            <div className="flex items-center mb-4">
              <ul>
                <li>Bank Bca - 5025201152</li>
                <li>Bank Mandiri - 1234567890</li>
              </ul>
            </div>
          </div>

        <h3 className="text-lg font-semibold mb-2">Payment Details:</h3>
        <div>
          {/* Add your payment details form or integration here */}
        </div>

        <div className="flex justify-between mt-4">
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            onClick={handleOpenProofModal}
          >
            Send Proof of Payment
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      </div>

      {/* Proof of Payment Modal */}
      {showProofModal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex items-center justify-center text-black">
          <div className="bg-white rounded p-4">
            <h3 className="text-lg font-semibold mb-2">Proof of Payment</h3>
            <p>Upload your proof of payment here:</p>
            <div className="flex items-center mt-4">
              <input
                className="border rounded px-4 py-2 mr-2"
                type="file"
                accept="image/*"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                Upload
              </button>
            </div>
            <div className="flex justify-end mt-4">
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                onClick={handleCloseProofModal}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded ml-2"
                onClick={handleSendProof}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;
