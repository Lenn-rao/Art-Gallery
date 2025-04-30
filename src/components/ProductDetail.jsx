import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsData } from '../data/products.js'; // Import data
import { useCart } from '../context/CartContext';   // Import useCart

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart(); // Get addToCart function
  const product = productsData.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center py-20">
         <h2 className="text-2xl font-semibold text-red-600">Product not found!</h2>
         <Link to="/products" className="text-primary hover:underline mt-4 inline-block">Back to Collection</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
     addToCart(product);
     // Optional: Add user feedback (e.g., a toast notification)
     alert(`${product.name} added to cart!`);
  }

  return (
    <div> {/* Removed container as it's in App.jsx */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Image section */}
          <div className="md:w-1/2 flex items-center justify-center bg-gray-100 p-4">
            <img
              src={product.image}
              alt={product.name}
              className="max-w-full max-h-[70vh] object-contain rounded" // Contain within bounds
            />
          </div>

          {/* Content section */}
          <div className="md:w-1/2 p-6 md:p-10 flex flex-col">
            <div>
              <h1 className="text-3xl lg:text-4xl font-display font-bold text-secondary mb-3">
                {product.name}
              </h1>
              <p className="text-2xl lg:text-3xl font-body text-primary font-semibold mb-6">
                ${product.price.toFixed(2)}
              </p>
              <div className="w-16 h-1 bg-primary mb-6"></div> {/* Decorative line */}
              <div className="bg-gray-50 p-4 rounded-md mb-8 shadow-inner">
                <h3 className="text-lg font-display font-semibold text-secondary mb-2">
                  About this artwork
                </h3>
                <p className="text-gray-700 font-body leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="mt-auto pt-6">
              <button
                onClick={handleAddToCart} // Call handleAddToCart on click
                className="w-full bg-primary hover:bg-indigo-700 text-white font-body font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 flex items-center justify-center text-lg shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM6 16a2 2 0 11-4 0 2 2 0 014 0zM16 16a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Back button */}
      <div className="mt-8 text-center md:text-left">
        <Link to="/products" className="inline-flex items-center font-body text-primary hover:text-indigo-800 transition-colors group">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Collection
        </Link>
      </div>
    </div>
  );
}

export default ProductDetail;