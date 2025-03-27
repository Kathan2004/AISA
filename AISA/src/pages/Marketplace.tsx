import React, { useState } from 'react';
import { Search, Filter, ShoppingCart, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Organic Wheat',
    farmer: 'Rajendra Chaudhari',
    location: 'Punjab',
    price: '₹2,800/quintal',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    available: '50 quintals'
  },
  {
    id: 2,
    name: 'Fresh Tomatoes',
    farmer: 'Anita Patel',
    location: 'Maharashtra',
    price: '₹40/kg',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    available: '200 kg'
  },
  {
    id: 3,
    name: 'Basmati Rice',
    farmer: 'Sukhwinder Singh',
    location: 'Haryana',
    price: '₹120/kg',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    available: '500 kg'
  },
  {
    id: 4,
    name: 'Organic Potatoes',
    farmer: 'Meena Kumari',
    location: 'Uttar Pradesh',
    price: '₹25/kg',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    available: '300 kg'
  }
];

export function Marketplace() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="marketplace-pattern min-h-screen">
      <div className="gradient-overlay min-h-screen py-8">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-white text-shadow">Farmer's Marketplace</h1>
            <button className="relative glass-morphism p-3 rounded-full">
              <ShoppingCart className="w-6 h-6 text-green-800" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          <div className="flex gap-4 mb-8">
            <div className="flex-1 glass-morphism rounded-lg flex items-center px-4">
              <Search className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search products, farmers..."
                className="w-full py-3 bg-transparent border-none focus:outline-none text-gray-800"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="glass-morphism px-4 py-2 rounded-lg flex items-center gap-2">
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="glass-morphism rounded-xl overflow-hidden card-hover">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-green-800">{product.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm">{product.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">by {product.farmer}</p>
                  <p className="text-gray-600 text-sm mb-3">{product.location}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-green-700 font-semibold">{product.price}</span>
                    <span className="text-sm text-gray-600">Available: {product.available}</span>
                  </div>
                  <button
                    onClick={() => setCartCount(prev => prev + 1)}
                    className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}