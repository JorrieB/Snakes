
var FONT = 32
 
// map dimensions
var ROWS =  30
var COLS =  30

var timeStep = 0
var activeSnake
var pastSnakes = [] 

// var game = new Phaser.Game(COLS * FONT, ROWS * FONT, Phaser.CANVAS, null, {
var game = new Phaser.Game(COLS, ROWS, Phaser.CANVAS, null, {
        create: create
});

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
                timeStep++
                updateBoard()
        }
}

function nextSnake() {
        pastSnakes.push(activeSnake)
        var snakeProperties = map.getSnake(pastSnakes.length)
        if snakeProperties != null {
                createSnakeWith(snakeProperties)
        } else {
                gameWin()
        }
}

function createSnakeWith(properties){
        var snake = 
}

function gameWin(){
        console.log("You win!")
}

//updates view of board according to current timestep
function updateBoard() {
        //may need some additonal 'active snake' logic so as to color board properly
        for snake in pastSnakes{
                var positions = snake.getPositionAtTime(timeStep)
                for position in positions{
                        //position will be a coordinate (x,y)
                        //update map at position
                        //doing so will give us a boolean - whether a collision happened or not
                        //if no collision, continue
                        //else, handle it
                }
        }
}

function exitBoard() {
    setTimeout(function () {
        if (player.onBoardAtTime(timeStep)){
            timeStep++
            exitBoard()
        }
    }, 1000);
    nextSnake()
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
