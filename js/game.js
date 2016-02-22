
var FONT = 32
 
// map dimensions
var ROWS =  700
var COLS =  700

var timeStep = 0
var activeSnake
var pastSnakes = [] 

// var game = new Phaser.Game(COLS * FONT, ROWS * FONT, Phaser.CANVAS, null, {
var game = new Phaser.Game(COLS, ROWS, Phaser.CANVAS, null, {
        create: create
});

var snakeData = [{length:1, start:[0, 300], goal:[600, 200], heading:DIRECTION_ENUM.RIGHT},
                 {length:3, start:[600, 200], goal:[200, 0], heading:DIRECTION_ENUM.LEFT},
                 {length:5, start:[400, 0], goal:[200, 600], heading:DIRECTION_ENUM.DOWN}];
var map = Map(7, 7, snakeData);

function onKeyUp(event) {
        // act on player input
        var acted = false
        switch (event.keyCode) {
                case Phaser.Keyboard.LEFT:
                        acted = activeSnake.move(DIRECTION_ENUM.LEFT)
                        break
 
                case Phaser.Keyboard.RIGHT:
                        acted = activeSnake.move(DIRECTION_ENUM.RIGHT)
                        break
 
                case Phaser.Keyboard.UP:
                        acted = activeSnake.move(DIRECTION_ENUM.UP)
                        break
 
                case Phaser.Keyboard.DOWN:
                        acted = activeSnake.move(DIRECTION_ENUM.DOWN)
                        break
                // case Phaser.Keyboard.ONE:
                //             console.log("Time going to rollback")
                //             rollBackTime(player);
        }

        // Check if the change of direction was allowed
        if (acted) {
                timeStep++
                updateBoard()
        }

}

//
function nextSnake() {
        pastSnakes.push(activeSnake)
        var snakeProperties = map.getSnakeAtIndex(pastSnakes.length)
        if (snakeProperties != null) {
                activeSnake = createSnakeWith(snakeProperties)
        } else {
                gameWin()
        }
}

//
function createSnakeWith(properties){
        //snake params = length,start,goal,startHeading
        return Snake(properties.snakeLength,properties.startPos,properties.goalPos,properties.heading)
}

//
function gameWin(){
        console.log("You win!")
}

function collision(){
        var snakeProperties = map.getSnakeAtIndex(pastSnakes.length)
        activeSnake = createSnakeWith(snakeProperties)
        timeStep = 0
}

//updates view of board according to current timestep
function updateBoard() {
        map.clear(pastSnakes.length)
        
        var collCoord1 = drawSnakes(4,[activeSnake])
        var collCoord2 = drawSnakes(3,pastSnakes)

        if (!(collision1 == null && collision2 == null)) {
                //game over
                collision()
        }

}

//takes array of snakes, updates map according to their positions
//returns null if no collision occurred, else returns coordinate of collision

function updateSnakes(cellVal,snakeArray){
        collisionCoordinate = null
        for (snake in snakeArray) {
                var positions = snake.getPositionAtTime(timeStep)
                for (position in positions) {
                        var collision = map.put(cellVal,currentSnakePosition[0],currentSnakePosition[1]) //input at position the value for current snake
                        if (collision) {
                                collisionCoordinate = (currentSnakePosition[0],currentSnakePosition[1])
                        }
                }
        }
        return collisionCoordinate
}

function drawInitBoard() {
    // var graphics = game.add.graphics(map.getRows(), map.getColumns());
    // console.log(map.getRows());
    game.stage.backgroundColor = '#061f27';
    for (var x = 0; x < map.getRows(); x++) {
        for (var y = 0; y < map.getColumns(); y++) {
            // var newSquare = new Phaser.Rectangle(x * 100, y * 100, 100, 100);
            // game.debug.renderRectangle(newSquare,'#FFF');

            // graphics.beginFill("#0FFFFF", 1);
            // graphics.drawRect(x * 100, y * 100, 100, 100);
            // graphics.endFill;

        }
    }
}

function drawUpdatedBoard() {

    for (var x = 0; x < map.rows; x++) {
        for (var y = 0; y < map.columns; y++) {
            // enumCells

            // if empty cell:
            if (map.get(x,y) == 0) {
                // Phaser.Rectangle(x*100, y*100, map.rows, map.columns);
                // game.debug.renderRectangle(map.cells[activePosition.y][activePosition.x],'#FFF')
            }

            // if border cell:
            if (map.get(x,y) == 1) {
                // Phaser.Rectangle(x*100, y*100, map.rows, map.columns);
                // game.debug.renderRectangle(map.cells[activePosition.y][activePosition.x],'#B3B3B3')
            }

            // if exit cell:
            if (map.get(x,y) == 2) {
                // Phaser.Rectangle(x*100, y*100, map.rows, map.columns);
                // game.debug.renderRectangle(map.cells[activePosition.y][activePosition.x],'#305AFF')
            }

            // if pastSnakes cell:
            if (map.get(x,y) == 3) {

                game.add.sprite(x*100, y*100, 'shadow');
                // Phaser.Rectangle(x*100, y*100, map.rows, map.columns);
                // game.debug.renderRectangle(map.cells[activePosition.y][activePosition.x],'#DB95B8')
            }

            // if currentSnakes cell:
            if (map.get(x,y) == 4) {
                game.add.sprite(x*100, y*100, 'snake');

                // Phaser.Rectangle(x*100, y*100, map.rows, map.columns);
                // game.debug.renderRectangle(map.cells[activePosition.y][activePosition.x],'#FFADD6')
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
    nextSnake()
}

// stub
function preload() {
    game.load.image('snake', './images/snake.png');
    game.load.image('shadow', './images/apple.png');
}

function create() {

	// init keyboard commands
	game.input.keyboard.addCallbacks(null, null, onKeyUp);
    activeSnake = createSnakeWith(map.getSnakeAtIndex(pastSnakes.length));
    drawInitBoard();

}


function update() {
}
