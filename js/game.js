// font size
var FONT = 32;
 
// map dimensions
var ROWS =  30;
var COLS =  30;
 


var game = new Phaser.Game(COLS * FONT, ROWS * FONT, Phaser.CANVAS, null, {
        create: create
});

// the structure of the map, and the function necessary to draw it
var map;



function onKeyUp(event) {
        // draw map to overwrite previous actors positions
        drawMap();
        
        // act on player input
        var acted = false;
        switch (event.keyCode) {
                case Phaser.Keyboard.LEFT:
                        snake.move(DIRECTION_ENUM.LEFT)
                        break;
 
                case Phaser.Keyboard.RIGHT:
                        snake.move(DIRECTION_ENUM.RIGHT)
                        break;
 
                case Phaser.Keyboard.UP:
                        snake.move(DIRECTION_ENUM.UP)
                        break;
 
                case Phaser.Keyboard.DOWN:
                snake.move(DIRECTION_ENUM.DOWN)
                        break;
                // case Phaser.Keyboard.ONE:
                //             console.log("Time going to rollback")
                //             rollBackTime(player);
        }



// stub
function preload() {
}

function create() {
	// init keyboard commands
	game.input.keyboard.addCallbacks(null, null, onKeyUp);

}


function update() {
}
