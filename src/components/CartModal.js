import React, { useState } from 'react';
import * as Unicons from '@iconscout/react-unicons';

function CartModal({ cartItems, onClose }) {
  const cartSubtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const [orderSummary, setOrderSummary] = useState(null);

  const handleCheckout = () => {
    // Perform any necessary checkout logic or API calls here

    // Set the order summary in the state
    const summary = {
      cartItems,
      cartSubtotal
    };
    setOrderSummary(summary);

    // Set the order summary in localStorage
    localStorage.setItem('orderSummary', JSON.stringify(summary));

    // Navigate to the checkout page
    window.location.href = '/checkout';
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 w-3/4">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
          <Unicons.UilTimes size="50" />
        </button>
        <div className="text-2xl font-bold text-black mb-6">Cart</div>
        {cartItems.length === 0 ? (
          <div className="text-center text-black">Your cart is empty.</div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <div className="text-lg font-semibold text-black">{item.name}</div>
                    <div className="text-gray-500">Rp. {item.price} per piece</div>
                    {item.orderCustomization && item.orderCustomization.cutleryRequested && (
                      <div className="text-gray-500">Cutlery Requested</div>
                    )}
                    {item.orderCustomization && item.orderCustomization.specialInstructions && (
                      <div className="text-gray-500">
                        Special Instructions: {item.orderCustomization.specialInstructions}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="font-semibold text-black">{item.quantity}</div>
                  <div className="text-gray-500">x</div>
                  <div className="font-semibold text-black">Rp. {item.price * item.quantity}</div>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between mt-6">
              <div className="font-semibold text-black">Subtotal:</div>
              <div className="font-semibold text-black">Rp. {cartSubtotal}</div>
            </div>
            <div className="flex justify-end mt-8">
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartModal;
