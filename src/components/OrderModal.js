import React, { useState } from 'react';
import  * as Unicons from '@iconscout/react-unicons';

function OrderModal({ product, quantity, setQuantity, handleAddToCart, handleClose }) {
  const { name, image } = product;
  const [cutleryRequested, setCutleryRequested] = useState(false);
  const [specialInstructions, setSpecialInstructions] = useState('');

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleToggleCutlery = () => {
    setCutleryRequested(!cutleryRequested);
  };

  const handleSpecialInstructionsChange = (e) => {
    setSpecialInstructions(e.target.value);
  };

  const handleAddToCartWithCustomization = () => {
    const orderCustomization = {
      cutleryRequested,
      specialInstructions,
    };
    handleAddToCart(orderCustomization, cutleryRequested); // Pass cutleryRequested as an argument
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
            <Unicons.UilTimes size="50" />
        </button>
        <div className="flex items-center mb-4">
          <img src={image} alt={name} className="w-12 h-12 rounded-md mr-4" />
          <h3 className="text-xl font-semibold">{name}</h3>
        </div>
        <div className="flex items-center mb-4">
          <button
            onClick={handleDecreaseQuantity}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-l-md h-10"
          >
            -
          </button>
          <input
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="w-12 h-10 px-2 py-1 text-center border border-gray-300 rounded-none"
          />
          <button
            onClick={handleIncreaseQuantity}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-r-md h-10"
          >
            +
          </button>
        </div>
        <div className="flex items-center mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={cutleryRequested}
              onChange={handleToggleCutlery}
              className="mr-2"
            />
            Request Cutlery
          </label>
        </div>
        <div className="mb-4">
          <label className="block font-medium">Special Instructions</label>
          <textarea
            value={specialInstructions}
            onChange={handleSpecialInstructionsChange}
            className="w-full px-2 py-1 border border-gray-300 rounded"
            rows="3"
          ></textarea>
        </div>
        <button
          onClick={handleAddToCartWithCustomization}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default OrderModal;
