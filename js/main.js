// map dimensions
// var ROWS =  7 //model's number of rows
// var COLS =  7 

// var cellWidth = 100 //draw size
// var cellHeight = 100 
// // Create a new game instance 600px wide and 450px tall:
var game = new Phaser.Game(700, 700, Phaser.CANVAS, 'gameDiv');
// Second parameter is an object containing the needed methods for state functionality
game.state.add('Start', Start);
// Adding the Game state.
game.state.add('Game', Game);

game.state.start('Start');
