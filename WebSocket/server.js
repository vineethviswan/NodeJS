const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (ws) => {
    console.log('New client connected');

    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        ws.send(`Hello, you sent -> ${message}`);
    });

    ws.on('close', () => {
        console.log('Client has disconnected');
    });
});

console.log('WebSocket server is running on ws://localhost:8080');