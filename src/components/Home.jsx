import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center py-16 md:py-24 lg:py-32 px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-secondary mb-4 leading-tight">
        Welcome to Artistry
      </h1>
      <p className="text-lg md:text-xl text-gray-600 font-body max-w-2xl mx-auto mb-8">
        Discover unique and inspiring artwork curated from talented artists around the globe. Bring beauty into your space.
      </p>
      <Link
        to="/products"
        className="inline-block bg-primary hover:bg-indigo-700 text-white font-body font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
      >
        Explore Collection
      </Link>
    </div>
  );
}

export default Home;