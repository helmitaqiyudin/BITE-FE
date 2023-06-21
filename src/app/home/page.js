'use client'
import React, { useState, useEffect } from 'react';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Searchbar from "@/components/Searchbar";
import CartModal from "@/components/CartModal";
import { searchProducts } from '@/services/searchService';
import { getAllProducts } from '@/services/productService';

export default function Home() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false); // New state variable for the Cart modal

  // Fetch products and set state
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    // Simulating API call or data fetching
    const dummyProducts = [
      {
        id: 1,
        name: "Burger",
        price: 50000,
        description: "This is a burger",
        image: "/assets/produk/flashsale1.png",
      },
      {
        id: 2,
        name: "Pizza",
        price: 90000,
        description: "This is a pizza",
        image: "/assets/produk/flashsale2.png",
      },
      // Add more dummy products as needed
    ];

    setProducts(dummyProducts);
    setFilteredProducts(dummyProducts);
  };

  const handleSearch = async (searchTerm) => {
    // Filtering logic
    const filteredResults = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filteredResults);
  };

  const handleCartOpen = () => {
    setIsCartModalOpen(true);
  };

  const handleCartClose = () => {
    setIsCartModalOpen(false);
  };

  return (
    <div>
      <Navbar cartItems={cartItems} setCartItems={setCartItems} onCartOpen={handleCartOpen} /> {/* Pass the onCartOpen callback to the Navbar */}

      <div className="h-[500px] text-white flex justify-center items-center" style={{
        backgroundImage: `url('assets/background/home.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: 'center',
      }}>
        <div className="text-center">
          <h1 className="text-5xl font-bold">Welcome to <span className="text-red-600">BITE</span></h1>
          <p className="text-xl mt-5">
            The best food delivery app in the world!
          </p>
        </div>
      </div>

      <div>
        <Searchbar onSearch={handleSearch} />
      </div>

      <div className="bg-white text-black flex justify-center h-full">
        <div className="grid grid-cols-4 w-[75%] grid-rows-3 gap-5">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          ))}
        </div>
      </div>

      <Footer />

      {isCartModalOpen && (
        <CartModal cartItems={cartItems} onClose={handleCartClose} /> 
      )}
    </div>
  );
}
