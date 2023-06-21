'use client'
import React, { useState, useEffect } from 'react';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Searchbar from "@/components/Searchbar";
import CartModal from "@/components/CartModal";
import { getAllProducts } from '@/services/productService';

export default function Home() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false); // New state variable for the Cart modal

  const dummyData = [
    {
     "id": 1,
     "name": "Nasi Uduk",
     "price": 12000,
     "description": "nasi yang diuduk",
     "img": "assets/produk/NasiUduk.jpg",
     "created_at": null,
     "updated_at": null
    },
    {
     "id": 2,
     "name": "Martabak Manis",
     "price": 20000,
     "description": "pancake tebal",
     "img": "assets/produk/MartabakManis.jpg",
     "created_at": null,
     "updated_at": null
    },
    {
     "id": 3,
     "name": "Soto Betawi",
     "price": 25000,
     "description": "Sup daging sapi",
     "img": "assets/produk/SotoBetawi.jpg",
     "created_at": null,
     "updated_at": null
    },
    {
     "id": 4,
     "name": "Bakso",
     "price": 15000,
     "description": "Bola daging ",
     "img": "assets/produk/Bakso.jpg",
     "created_at": null,
     "updated_at": null
    },
    {
     "id": 5,
     "name": "Rujak",
     "price": 10000,
     "description": "Campuran buah-buahan segar",
     "img": "assets/produk/Rujak.jpg",
     "created_at": null,
     "updated_at": null
    },
    {
     "id": 6,
     "name": "Nasi Kuning",
     "price": 15000,
     "description": "Nasi yang dimasak dengan kunyit",
     "img": "assets/produk/NasiKuning.jpg",
     "created_at": null,
     "updated_at": null
    },
    {
     "id": 7,
     "name": "Pempek",
     "price": 20000,
     "description": "Makanan khas Palembang",
     "img": "assets/produk/Pempek.jpg",
     "created_at": null,
     "updated_at": null
    },
    {
     "id": 8,
     "name": "Sate Padang",
     "price": 30000,
     "description": "Sate yang terbuat dari daging sapi",
     "img": "assets/produk/SatePadang.jpg",
     "created_at": null,
     "updated_at": null
    },
    {
     "id": 9,
     "name": "Ketoprak",
     "price": 15000,
     "description": "Campuran tahu, bihun, sayuran, dan lontong",
     "img": "assets/produk/Ketoprak.jpg",
     "created_at": null,
     "updated_at": null
    },
    {
     "id": 10,
     "name": "Gudeg",
     "price": 25000,
     "description": "Hidangan nangka muda",
     "img": "assets/produk/Gudeg.jpg",
     "created_at": null,
     "updated_at": null
    },
    {
     "id": 11,
     "name": "Rawon",
     "price": 30000,
     "description": "sup daging sapi yang berwarna hitam",
     "img": "assets/produk/Rawon.jpg",
     "created_at": null,
     "updated_at": null
    },
    {
     "id": 12,
     "name": "Es Cendol",
     "price": 10000,
     "description": "minuman segar",
     "img": "assets/produk/EsCendol.jpg",
     "created_at": null,
     "updated_at": null
    },
    {
     "id": 13,
     "name": "Nasi Liwet",
     "price": 25000,
     "description": "nasi yang dimasak dengan santan kelapa",
     "img": "assets/produk/NasiLiwet.jpg",
     "created_at": null,
     "updated_at": null
    },
    {
     "id": 14,
     "name": "Pindang Ikan Patin",
     "price": 35000,
     "description": "ikan patin yang dimasak dalam kuah asam pedas",
     "img": "assets/produk/PindangIkanPatin.jpg",
     "created_at": null,
     "updated_at": null
    },
    {
     "id": 15,
     "name": "Sambal Goreng Ati",
     "price": 20000,
     "description": "Hidangan dari hati ayam atau hati sapi",
     "img": "assets/produk/SambalGorengAti.jpg",
     "created_at": null,
     "updated_at": null
    },
    {
     "id": 16,
     "name": "Nasi Goreng",
     "price": 20000,
     "description": "nasi digoreng",
     "img": "assets/produk/NasiGoreng.jpg",
     "created_at": null,
     "updated_at": null
    },
    {
     "id": 17,
     "name": "Gado-Gado",
     "price": 15000,
     "description": "campuran sayuran segar seperti kubis, tauge, dan kentang",
     "img": "assets/produk/Gado2.jpg",
     "created_at": null,
     "updated_at": null
    },
    {
     "id": 18,
     "name": "Sate Ayam",
     "price": 25000,
     "description": "Potongan daging ayam yang ditusuk",
     "img": "assets/produk/SateAyam.jpg",
     "created_at": null,
     "updated_at": null
    },
    {
     "id": 19,
     "name": "Rendang",
     "price": 35000,
     "description": "Hidangan daging sapi",
     "img": "assets/produk/Rendang.jpg",
     "created_at": null,
     "updated_at": null
    },
    {
     "id": 20,
     "name": "Soto Ayam",
     "price": 18000,
     "description": "Sup ayam dengan kuah kaldu",
     "img": "assets/produk/Soto Ayam.jpg",
     "created_at": null,
     "updated_at": null
    }
   ]

  // Fetch products and set state
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    // const products = await getAllProducts();
    // setProducts(products);
    // setFilteredProducts(products);
    setProducts(dummyData);
    setFilteredProducts(dummyData);
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

      <div className="bg-white text-black flex justify-center">
        <div className="grid grid-cols-4 w-[75%] gap-5">
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
