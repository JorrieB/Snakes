// font size
var FONT = 32
 
// map dimensions
var ROWS =  30
var COLS =  30

var timestep = 0
var snakeArray = [] 


var game = new Phaser.Game(COLS * FONT, ROWS * FONT, Phaser.CANVAS, null, {
        create: create
});

// the structure of the map, and the function necessary to draw it
var map



function onKeyUp(event) {
        // act on player input
        var acted = false
        switch (event.keyCode) {
                case Phaser.Keyboard.LEFT:
                        acted = snake.move(DIRECTION_ENUM.LEFT)
                        break
 
                case Phaser.Keyboard.RIGHT:
                        acted = snake.move(DIRECTION_ENUM.RIGHT)
                        break
 
                case Phaser.Keyboard.UP:
                        acted = snake.move(DIRECTION_ENUM.UP)
                        break
 
                case Phaser.Keyboard.DOWN:
                        acted = snake.move(DIRECTION_ENUM.DOWN)
                        break
                // case Phaser.Keyboard.ONE:
                //             console.log("Time going to rollback")
                //             rollBackTime(player);
        }

        if acted {
                timestep += 1
                updateBoard()
        }
}

//updates view of board according to current timestep
function updateBoard() {
        //may need some additonal 'active snake' logic so as to color board properly
        for snake in snakeArray{
                var positions = snake.getPositionAtTime(timestep)
                for position in positions{
                        //position will be a coordinate (x,y)
                        //update map at position
                        //doing so will give us a boolean - whether a collision happened or not
                        //if no collision, continue
                        //else, handle it
                }
        }
}

// stub
function preload() {
}

function create() {
	// init keyboard commands
	game.input.keyboard.addCallbacks(null, null, onKeyUp)

}


function update() {
}
