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

  /*
  // Move the snake up with a small delay
  conn.on('connect', () => {
    setInterval( () => conn.write('Move: up'), 50);
  });
 */

  /*
  conn.on('connect', () => {
    setTimeout(() => conn.write('Move: up'), 500);
  });
  conn.on('connect', () => {
    setTimeout(() => conn.write('Move: up'), 1000);
  });
  conn.on('connect', () => {
    setTimeout(() => conn.write('Move: up'), 1500);
  });
 */

  // Event listener for when data is received from the server
  conn.on('data', data => console.log(data));

  return conn;
};

module.exports = {
  connect,
};