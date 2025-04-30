import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import useCart

function Navbar() {
  const { totalItems } = useCart(); // Get total items from context

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-bold font-display text-secondary hover:text-primary transition-colors">
              Artistry
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <Link
                to="/products"
                className="font-body text-gray-600 hover:text-primary px-3 py-2 rounded-md text-lg font-medium transition-colors"
              >
                Shop
              </Link>
              <Link
                to="/cart"
                className="relative font-body text-gray-600 hover:text-primary px-3 py-2 rounded-md text-lg font-medium transition-colors"
              >
                {/* Cart Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Cart
                {/* Cart Badge */}
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button (optional) */}
          {/* Add logic here if you need a hamburger menu for smaller screens */}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;