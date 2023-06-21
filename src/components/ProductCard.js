import React, { useState, useEffect } from 'react';
import OrderModal from './OrderModal';

function ProductCard({ product, cartItems, setCartItems }) {
  const { id, name, price, description, img } = product;
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = (orderCustomization, cutleryRequested) => {
    const isProductInCart = cartItems.some((item) => item.id === product.id);
  
    if (isProductInCart) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity, orderCustomization, cutleryRequested } : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity, orderCustomization, cutleryRequested }]);
    }
  
    setQuantity(1);
    setShowModal(false);
  };
  
  

  useEffect(() => {
    console.log("Updated Cart Items:", cartItems);
  }, [cartItems]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-white p-4 h-[350px]">
      <img src={img} alt={name} className="w-full h-[200px] object-cover mb-4 rounded-md" />
      <div className="flex justify-between">
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-gray-500">{description}</p>
          <p className="text-green-600 font-semibold">Rp. {price}</p>
        </div>
        <div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mt-5"
          >
            +
          </button>
        </div>
      </div>
      {showModal && (
        <OrderModal
        product={product}
        quantity={quantity}
        setQuantity={setQuantity}
        handleAddToCart={handleAddToCart}
        handleClose={handleCloseModal}
        cutleryRequested={false} // Pass the initial value for cutleryRequested
      />
      )}
    </div>
  );
}

export default ProductCard;
