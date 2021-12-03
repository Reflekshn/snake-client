const net = require('net');

// Establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // Set character encoding to UTF-8
  conn.setEncoding('utf8');

  // Event listeners for a successful connection to the server
  conn.on('connect', () => console.log('Successfully connected to the game server'));
  conn.on('connect', () => conn.write('Name: JBO'));

  // Event listener for when data is received from the server
  conn.on('data', data => console.log(data));

  return conn;
};

module.exports = {
  connect,
};