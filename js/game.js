
var FONT = 32
 
// map dimensions
var ROWS =  30
var COLS =  30

var timeStep = 0
var snakeArray = [] 

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
                timeStep += 1
                updateBoard()
        }
}

//updates view of board according to current timestep
function updateBoard() {
        //may need some additonal 'active snake' logic so as to color board properly
        for snake in snakeArray{
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

function drawInitBoard() {

}

function drawUpdatedBoard() {

    for (var x = 0; x < map.rows; x++) {
        for (var y = 0; y < map.columns; y++) {
            // enumCells

            // if empty cell:
            if (map.get(x,y) == 0) {
                Phaser.Rectangle(x*100, y*100, map.rows, map.columns);
                game.debug.renderRectangle(map.cells[activePosition.y][activePosition.x],'#FFF')
            }

            // if border cell:
            if (map.get(x,y) == 1) {
                Phaser.Rectangle(x*100, y*100, map.rows, map.columns);
                game.debug.renderRectangle(map.cells[activePosition.y][activePosition.x],'#B3B3B3')
            }

            // if exit cell:
            if (map.get(x,y) == 2) {
                Phaser.Rectangle(x*100, y*100, map.rows, map.columns);
                game.debug.renderRectangle(map.cells[activePosition.y][activePosition.x],'#305AFF')
            }

            // if pastSnakes cell:
            if (map.get(x,y) == 3) {
                Phaser.Rectangle(x*100, y*100, map.rows, map.columns);
                game.debug.renderRectangle(map.cells[activePosition.y][activePosition.x],'#DB95B8')
            }

            // if currentSnakes cell:
            if (map.get(x,y) == 4) {
                Phaser.Rectangle(x*100, y*100, map.rows, map.columns);
                game.debug.renderRectangle(map.cells[activePosition.y][activePosition.x],'#FFADD6')
            }
            
        }
    }

    // // Draw Active Snake
    // var activePositions = activeSnake.getPositionAtTime(timeStep);
    // for activePosition in activePositions {
    //     game.debug.renderRectangle(map.cells[activePosition.y][activePosition.x],'#FFADD6');
    // }
    
    // // Draw Shadow Snakes
    // for snake in snakeArray{
    //     var positions = snake.getPositionAtTime(timeStep)
    //     for position in positions {
    //         game.debug.renderRectangle(map.cells[position.y][position.x],'#DB95B8');
    //     }
}

function exitBoard() {
    setTimeout(function () {
        if (player.onBoardAtTime(timeStep)){
            timeStep++
            exitBoard()
        }
    }, 1000);
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
