// src/App.jsx
import React, { useState } from 'react';
import StockSearch from './StockSearch';
import Graph from './Graph';

function App() {
  // Parent state for the ticker value
  const [ticker, setTicker] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Stock Search Section */}
        <div className="md:w-1/2 p-4 bg-white rounded shadow">
          <StockSearch onSearch={setTicker} />
        </div>
        {/* Graph Section */}
        <div className="md:w-1/2 p-4 bg-white rounded shadow">
          <h1 className="text-center text-3xl font-bold p-4">Stock Data Graph</h1>
          <Graph ticker={ticker} />
        </div>
      </div>
    </div>
  );
}

export default App;
