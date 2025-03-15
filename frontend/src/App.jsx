// src/App.js
import React from 'react';
import StockSearch from './StockSearch';
import Graph from './Graph';

function App() {
  return (
    <div className="bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row">
        {/* Stock Search Section */}
        <div className="md:w-1/2 p-4">
          <StockSearch />
        </div>
        {/* Graph Section */}
        <div className="md:w-1/2 p-4">
          <h1 className="text-center text-3xl font-bold p-4">
            Stock Data Graph
          </h1>
          <Graph />
        </div>
      </div>
    </div>
  );
}

export default App;
