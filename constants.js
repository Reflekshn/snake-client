// Global Constants
const IP = 'localhost';
const PORT = 50541;
const PLAYER_NAME = 'Name: JBO';

// Key bindings for the game
const keyBindings = {
  // Movement keys
  'w': 'Move: up',
  'a': 'Move: left',
  's': 'Move: down',
  'd': 'Move: right',
  
  // Chat messages
  'u': 'Say: Snakey is coming to get you',
  'i': 'Say: Hsssssssssssssssssssss',
  'o': 'Say: I\'m hungry',
  'p': 'Say: Mmmm yum!'
}

module.exports = {
  IP,
  PORT,
  PLAYER_NAME,
  keyBindings
}