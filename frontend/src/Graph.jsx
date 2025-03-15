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

function Graph() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Create a new WebSocket connection.
    const socket = new WebSocket('ws://localhost:4000');

    // When the connection opens, you can send an optional message to the server.
    socket.addEventListener('open', () => {
      console.log('WebSocket connection opened');
      // socket.send(JSON.stringify({ type: 'INIT', message: 'Client connected' }));
    });

    // Listen for messages from the server.
    socket.addEventListener('message', (event) => {
      console.log('Message received:', event.data);
      try {
        const parsedData = JSON.parse(event.data);
        // Update the data state. This assumes your data is an array of objects.
        setData(parsedData);
      } catch (error) {
        console.error('Error parsing WebSocket data:', error);
      }
    });

    // Clean up the WebSocket connection when the component unmounts.
    return () => {
      socket.close();
    };
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Graph;
