const net = require('net');

// Establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // Set character encoding to UTF-8
  conn.setEncoding('utf8');

  // Create event listener for when data is received
  conn.on('data', data => console.log(data));

  return conn;
};

module.exports = {
  connect,
};