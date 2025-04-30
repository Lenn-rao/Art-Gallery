import React from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '../data/products.js'; // Import data from the new file

function ProductList() {
  return (
    <div> {/* Removed container mx-auto etc. as it's now in App.jsx */}
      <h1 className="text-3xl sm:text-4xl font-display text-center mb-10 text-secondary">
        Our Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {productsData.map(product => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="group block bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1"
          >
            {/* Fixed Height Image Container */}
            <div className="w-full h-64 overflow-hidden"> {/* <--- Set fixed height here */}
               <img
                 src={product.image}
                 alt={product.name}
                 className="w-full h-full object-cover object-center transition duration-300 group-hover:scale-105" // Use object-cover
               />
            </div>
            <div className="p-5">
              <h2 className="text-xl lg:text-2xl font-display font-semibold text-secondary mb-2 truncate group-hover:text-primary transition-colors">
                {product.name}
              </h2>
              <p className="text-lg font-body text-primary font-medium">
                ${product.price.toFixed(2)} {/* Format price */}
              </p>
               {/* Optional: Add a small "View Details" hint */}
               <p className="text-sm text-gray-500 mt-2 group-hover:text-primary transition-colors">View Details →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductList;