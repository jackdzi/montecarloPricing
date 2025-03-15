import React, { useState } from 'react';

function StockSearch() {
  // 1. Create a piece of state to hold the ticker
  const [ticker, setTicker] = useState('');

  // 2. Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Ticker:', ticker);
    // Here, you could send the ticker to a backend, 
    // or do anything else you need with it.
  };

  return (
    <div className="flex items-top-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Stock Search</h2>
        
        <div className="mb-4">
          <label htmlFor="ticker" className="block text-gray-700 font-medium mb-2">
            Stock Ticker
          </label>
          {/* 3. Update state on input change */}
          <input
            type="text"
            id="ticker"
            value={ticker}
            onChange={(e) => setTicker(e.target.value)}
            placeholder="e.g., AAPL"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        
        <button
          type="submit"
          className="space x- 5pt w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default StockSearch;
