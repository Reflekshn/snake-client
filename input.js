const { keyBindings } = require('./constants');

// Stores the active TCP connection object
let connection;

// Initialize user input
const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // Run handleUserInput when a data event occurs
  stdin.on("data", handleUserInput);

  // Store the conn object in global variable so it can be used below
  connection = conn;

  return stdin;
};

// Function to handle all user inputs
const handleUserInput = function(key) {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }

  // Process key bindings
  connection.write(keyBindings[key]);
};

module.exports = {
  setupInput,
  handleUserInput,
};