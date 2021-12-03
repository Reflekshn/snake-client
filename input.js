// Stores the active TCP connection object
let connection;

// Initialize user input
const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  connection = conn;

  return stdin;
};

// Function to handle all user inputs
const handleUserInput = function(key) {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }

  // WASD Movement keys
  if (key === 'w') {
    connection.write('Move: up');
  } else if (key === 'a') {
    connection.write('Move: left');
  } else if (key === 's') {
    connection.write('Move: down');
  } else if (key === 'd') {
    connection.write('Move: right');
  }

  // Chat messages
  if (key === 'u') {
    connection.write('Say: Snakey is coming to get you');
  } else if (key === 'i') {
    connection.write('Say: Hssssssssssssssssssssssss');
  } else if (key === 'o') {
    connection.write('Say: I\'m Huuuungry');
  } else if (key === 'p') {
    connection.write('Say: Mmmm yum!');
  }
};

module.exports = {
  setupInput,
  handleUserInput,
};