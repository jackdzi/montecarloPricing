// server.js
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 4000 });

wss.on('connection', (ws) => {
  console.log('Client connected');

  let ticker = null;
  let interval;

  ws.on('message', (message) => {
    try {
      const data = JSON.parse(message);
      if (data.type === 'subscribe' && data.ticker) {
        ticker = data.ticker;
        console.log(`Subscribed to ticker: ${ticker}`);

        // Clear any previous interval before starting a new one
        if (interval) clearInterval(interval);

        // Send simulated data every 2 seconds
        interval = setInterval(() => {
          const responseData = [
            {
              time: new Date().toLocaleTimeString(),
              value: Math.floor(Math.random() * 100),
            },
          ];
          ws.send(JSON.stringify(responseData));
        }, 2000);
      }
    } catch (error) {
      console.error('Error handling message:', error);
    }
  });

  ws.on('close', () => {
    if (interval) clearInterval(interval);
    console.log('Client disconnected');
  });
});

console.log('WebSocket server is running on ws://localhost:4000');
