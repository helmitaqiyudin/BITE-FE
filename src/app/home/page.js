'use client'
import { useState, useEffect } from 'react'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Searchbar from "@/components/Searchbar";
import { searchProducts } from '@/services/searchService';
import { getAllProducts } from '@/services/productService';

export default function Home() {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const productsData = await getAllProducts();
            setProducts(productsData);
        } catch (error) {
            console.error('Error occurred while fetching products:', error);
            // Perform error handling specific to the component's needs
        }
    };

    const handleSearch = async (searchTerm) => {
        try {
          const searchResults = await searchProducts(searchTerm);
          setFilteredProducts(searchResults);
        } catch (error) {
          console.error('Error occurred during search:', error);
          // Perform error handling specific to the component's needs
        }
    }

    return (
        <div>
            <Navbar/>

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
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>

            <Footer/>
        </div>
    )
}