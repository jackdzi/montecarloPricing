// src/Graph.jsx
import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function Graph({ ticker }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Only connect if a ticker is provided.
    if (!ticker) return;

    // Open a new WebSocket connection.
    const socket = new WebSocket('ws://localhost:4000');

    socket.addEventListener('open', () => {
      console.log('WebSocket connection opened');
      // Send a subscription message with the ticker.
      socket.send(JSON.stringify({ type: 'subscribe', ticker }));
    });

    socket.addEventListener('message', (event) => {
      console.log('Message received:', event.data);
      try {
        const parsedData = JSON.parse(event.data);
        // Ensure parsedData is an array (e.g., [{ time: '10:00', value: 123 }])
        if (Array.isArray(parsedData)) {
          // Append new data points to existing data.
          setData((prevData) => [...prevData, ...parsedData]);
        }
      } catch (error) {
        console.error('Error parsing WebSocket data:', error);
      }
    });

    // Clean up when the ticker changes or the component unmounts.
    return () => {
      socket.close();
      console.log('WebSocket connection closed');
    };
  }, [ticker]);

  return (
    <div>
      {ticker ? (
        <>
          <h2 className="text-center text-xl mb-4">
            Real-Time Data for {ticker.toUpperCase()}
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </>
      ) : (
        <p className="text-center text-gray-600">Enter a stock ticker to see live data.</p>
      )}
    </div>
  );
}

export default Graph;
