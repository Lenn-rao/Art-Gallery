import React from 'react';
import { Link } from 'react-router-dom';

function Checkout() {
  // In a real app, you'd fetch cart details here
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 text-center">
      <h1 className="text-2xl md:text-3xl font-bold font-display text-secondary mb-6">Checkout</h1>
      <p className="text-gray-600 mb-8">
        This is where the checkout process would begin. Full checkout functionality is beyond this example.
      </p>
      <div className="space-x-4">
         <Link
           to="/cart"
           className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-body font-semibold py-2 px-6 rounded-lg transition duration-300"
         >
           Back to Cart
         </Link>
          <Link
           to="/products"
           className="inline-block bg-primary hover:bg-indigo-700 text-white font-body font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
         >
           Continue Shopping
         </Link>
      </div>
    </div>
  );
}

export default Checkout;