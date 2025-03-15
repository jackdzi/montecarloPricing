// src/StockSearch.jsx
import React, { useState } from 'react';

function StockSearch({ onSearch }) {
  const [localTicker, setLocalTicker] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the ticker up to the parent component
    onSearch(localTicker);
  };

  return (
    <div className="flex h-full items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Stock Search</h2>
        <div className="mb-4">
          <label htmlFor="ticker" className="block text-gray-700 font-medium mb-2">
            Stock Ticker
          </label>
          <input
            type="text"
            id="ticker"
            value={localTicker}
            onChange={(e) => setLocalTicker(e.target.value)}
            placeholder="e.g., AAPL"
            className=" center- border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className="center- bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default StockSearch;
