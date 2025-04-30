import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cartItems, removeFromCart, addToCart, decreaseQuantity, totalPrice, totalItems } = useCart();

  if (totalItems === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold font-display text-secondary mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-6">Looks like you haven't added any artwork yet.</p>
        <Link
          to="/products"
          className="inline-block bg-primary hover:bg-indigo-700 text-white font-body font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold font-display text-secondary mb-6 border-b pb-4">
        Your Shopping Cart ({totalItems} {totalItems === 1 ? 'item' : 'items'})
      </h1>

      <div className="space-y-6">
        {cartItems.map(item => (
          <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between border-b pb-4 last:border-b-0">
            {/* Item Info */}
            <div className="flex items-center space-x-4 mb-4 sm:mb-0 flex-grow">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md shadow" />
              <div>
                <Link to={`/product/${item.id}`} className="text-lg font-semibold font-body text-secondary hover:text-primary transition-colors">
                  {item.name}
                </Link>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
            </div>

            {/* Quantity Controls & Remove */}
            <div className="flex items-center space-x-3 sm:space-x-4">
               <div className="flex items-center border rounded">
                 <button
                   onClick={() => decreaseQuantity(item.id)}
                   className="px-3 py-1 text-gray-700 hover:bg-gray-100 rounded-l"
                   aria-label="Decrease quantity"
                 >
                   -
                 </button>
                 <span className="px-3 py-1 text-center w-10">{item.quantity}</span>
                 <button
                   onClick={() => addToCart(item)} // Use addToCart to increase
                   className="px-3 py-1 text-gray-700 hover:bg-gray-100 rounded-r"
                   aria-label="Increase quantity"
                 >
                   +
                 </button>
               </div>
               <button
                 onClick={() => removeFromCart(item.id)}
                 className="text-red-500 hover:text-red-700 transition-colors"
                 aria-label="Remove item"
               >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
               </button>
               <p className="font-semibold w-20 text-right text-secondary hidden sm:block"> {/* Item Total */}
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-8 pt-6 border-t">
        <div className="flex justify-end items-center">
          <span className="text-xl font-semibold font-display text-secondary mr-4">
            Subtotal:
          </span>
          <span className="text-2xl font-bold font-body text-primary">
            ${totalPrice.toFixed(2)}
          </span>
        </div>
        <div className="mt-6 flex justify-end">
          <Link
            to="/checkout"
            className="bg-primary hover:bg-indigo-700 text-white font-body font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;