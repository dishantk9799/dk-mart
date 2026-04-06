import React, { useState, useMemo, useEffect } from 'react';
import { FiSearch } from "react-icons/fi";
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'react-router';

const Shop = () => {
    const { products } = useProducts();
    const [searchParams] = useSearchParams();
    const categoryQuery = searchParams.get('category');

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All Categories");
    const [sortBy, setSortBy] = useState("Featured");

    useEffect(() => {
        if (categoryQuery) {
            setSelectedCategory(categoryQuery);
        }
    }, [categoryQuery]);

    const filteredProducts = useMemo(() => {
        let result = [...products];

        // Filter by Search Query
        if (searchQuery) {
            result = result.filter(p =>
                p.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Filter by Category
        if (selectedCategory !== "All Categories") {
            result = result.filter(p => p.category === selectedCategory);
        }

        // Sort Data
        if (sortBy === "Price: Low → High") {
            result.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        } else if (sortBy === "Price: High → Low") {
            result.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        } else if (sortBy === "Top Rated") {
            result.sort((a, b) => b.rating - a.rating);
        }

        return result;
    }, [products, searchQuery, selectedCategory, sortBy]);

    return (
        <div className="min-h-screen bg-[#09090b] px-6 md:px-12 py-10">

            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-4xl font-extrabold text-white mb-1">All Products</h1>
                <p className="text-zinc-500 text-sm font-medium">
                    {filteredProducts.length} products found
                </p>
            </div>

            {/* Filter Bar */}
            <div className="w-full bg-zinc-900/30 border border-zinc-800 rounded-3xl p-3 flex flex-col md:flex-row gap-3 items-center mb-12">

                {/* Search Input */}
                <div className="relative flex-1 w-full">
                    <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search products..."
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl py-3 pl-12 pr-4 text-white text-sm outline-none focus:border-[#CAFF00]/50 transition-all"
                    />
                </div>

                {/* Categories Select */}
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full md:w-auto bg-zinc-900 border border-zinc-800 rounded-2xl py-3 px-6 text-white text-sm outline-none cursor-pointer"
                >
                    <option value="All Categories">All Categories</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Home">Home</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Sports">Sports</option>
                </select>

                {/* Sorting Select */}
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full md:w-auto bg-zinc-900 border border-zinc-800 rounded-2xl py-3 px-6 text-white text-sm outline-none cursor-pointer"
                >
                    <option value="Featured">Featured</option>
                    <option value="Price: Low → High">Price: Low → High</option>
                    <option value="Price: High → Low">Price: High → Low</option>
                    <option value="Top Rated">Top Rated</option>
                </select>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20">
                    <h2 className="text-zinc-500 text-xl font-bold">No products match your filters.</h2>
                </div>
            )}
        </div>
    );
};

export default Shop;