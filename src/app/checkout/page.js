'use client'
import React, { useEffect, useState } from 'react';

function CheckoutPage() {
  const [orderSummary, setOrderSummary] = useState(null);

  useEffect(() => {
    // Retrieve the order summary from localStorage
    const summary = localStorage.getItem('orderSummary');
    if (summary) {
      setOrderSummary(JSON.parse(summary));
    }
  }, []);

  const handlePlaceOrder = (event) => {
    event.preventDefault();

    // Perform any necessary place order logic or API calls here

    // Navigate to the payment page
    window.location.href = '/payment';
  };

  if (!orderSummary) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (!orderSummary) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      <div className="border rounded p-4 mb-4">
        <h3 className="text-lg font-semibold mb-2">Order Summary:</h3>
        <ul>
          {orderSummary.cartItems.map((item) => (
            <li key={item.id} className="mb-2">
              <div>{item.name}</div>
              <div>Quantity: {item.quantity}</div>
              <div>Price: Rp. {item.price * item.quantity}</div>
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <h4 className="font-semibold">Subtotal: Rp. {orderSummary.cartSubtotal}</h4>
        </div>
      </div>

      <div className="border rounded p-4">
        <h3 className="text-lg font-semibold mb-2">Delivery Information:</h3>
        <form onSubmit={handlePlaceOrder}>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="name">
              Name:
            </label>
            <input
              className="border rounded px-4 py-2 w-full text-black"
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="address">
              Address:
            </label>
            <textarea
              className="border rounded px-4 py-2 w-full text-black"
              id="address"
              name="address"
              placeholder="Enter your address"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="phone">
              Phone:
            </label>
            <input
              className="border rounded px-4 py-2 w-full text-black"
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              type="submit"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckoutPage;
