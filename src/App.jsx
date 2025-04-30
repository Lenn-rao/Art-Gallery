import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import ProductList from './components/ProductList.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import Cart from './components/Cart.jsx';
import Checkout from './components/Checkout.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import {Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> {/* Ensure full height */}
        <Navbar />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8"> {/* Add padding and make it grow */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            {/* Optional: Add a 404 Not Found Route */}
            <Route path="*" element={<div className='text-center py-20'> <h1 className='text-4xl font-bold'>404 - Not Found</h1> <Link to="/" className="text-primary hover:underline mt-4 inline-block">Go Home</Link></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;