// src/pages/GetStarted.jsx
import React, { useState } from 'react';

const recommendedStocks = [
  { symbol: 'AAPL', name: 'Apple Inc.' },
  { symbol: 'GOOGL', name: 'Alphabet Inc.' },
  { symbol: 'AMZN', name: 'Amazon.com Inc.' },
  { symbol: 'MSFT', name: 'Microsoft Corporation' },
  { symbol: 'TSLA', name: 'Tesla Inc.' },
];

const GetStarted = () => {
  const [search, setSearch] = useState('');
  const [filteredStocks, setFilteredStocks] = useState([]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    // You can replace this with an actual API call to fetch stock data
    setFilteredStocks(recommendedStocks.filter(stock => 
      stock.symbol.toLowerCase().includes(event.target.value.toLowerCase())
    ));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Get Started with Stock Market Prediction</h1>
      
      <div className="flex justify-center mb-8">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search for a stock..."
          className="border border-gray-300 rounded-lg p-2 w-full md:w-1/2"
        />
      </div>

      <h2 className="text-2xl font-semibold mb-4">Recommended Stocks</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recommendedStocks.map(stock => (
          <div key={stock.symbol} className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold">{stock.symbol}</h3>
            <p>{stock.name}</p>
          </div>
        ))}
      </div>

      {filteredStocks.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredStocks.map(stock => (
              <div key={stock.symbol} className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold">{stock.symbol}</h3>
                <p>{stock.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GetStarted;
