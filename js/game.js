
var FONT = 32
 
// map dimensions
var ROWS =  7 //model's number of rows
var COLS =  7 

var cellWidth = 100 //draw size
var cellHeight = 100 

var timeStep = 0
var activeSnake
var pastSnakes = [] 
var keyboardLock = false;

// var game = new Phaser.Game(COLS * FONT, ROWS * FONT, Phaser.CANVAS, null, {
var game = new Phaser.Game(COLS * cellHeight, ROWS * cellWidth, Phaser.CANVAS, null, {
        create: create,
        render: drawUpdatedBoard
});

var snakeData = [{snakeLength:3, startPos:[0, 3], goalPos:[6, 2], heading:DIRECTION_ENUM.RIGHT, snakeColor:'#E5FF00'},
                 {snakeLength:4, startPos:[5, 0], goalPos:[2, 0], heading:DIRECTION_ENUM.LEFT, snakeColor:'#2BFF95'},
                 {snakeLength:5, startPos:[4, 0], goalPos:[2, 6], heading:DIRECTION_ENUM.DOWN, snakeColor:'#FF2B60'}];
var map = Map(ROWS, COLS, snakeData);

function onKeyUp(event) {
        // act on player input
        if (keyboardLock){
            return
        }
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
                 case Phaser.Keyboard.ONE:
                             console.log("Time going to rollback")
                             rewind();
        }

        // Check if the change of direction was allowed
        if (acted) {
                timeStep++
                update()
        }

}

//
function nextSnake() {
        unlockKeyboard()
        timeStep = 0
        pastSnakes.push(activeSnake)
        var snakeProperties = map.getSnakeAtIndex(pastSnakes.length)
        if (snakeProperties != null) {
                activeSnake = createSnakeWith(snakeProperties)
                update()
        } else {
                gameWin()
        }
}

//
function createSnakeWith(properties){
        //snake params = length,start,goal,startHeading
        return Snake(properties.snakeLength,properties.startPos,properties.goalPos,properties.heading, properties.snakeColor)
}

//
function gameWin(){
        signalEvent("Congratulations, you win!")
        lockKeyboard()
        console.log("You win!")
}

function collision(){
        // Change the event text back to default
        signalEvent("...")
        // Restart the session with current snake
        unlockKeyboard()
        var snakeProperties = map.getSnakeAtIndex(pastSnakes.length)
        activeSnake = createSnakeWith(snakeProperties)
        timeStep = 0
        update()
}

//updates view of board according to current timestep
function updateBoard() {
        // Update text
        signalSnakeIndex(pastSnakes.length, snakeData.length)
        signalTime(timeStep)
        map.clear(pastSnakes.length)
        
        SnakeHeadPosition = activeSnake.getPositionAtTime(timeStep)[0];
        var toCallExit = map.isExit(SnakeHeadPosition[0], SnakeHeadPosition[1])
        var collCoord1 = updateSnakes(4,[activeSnake])
        var collCoord2 = updateSnakes(3,pastSnakes)

        if (!(collCoord1 == null && collCoord2 == null)) {
                //game over
                signalEvent("You bumped into something else!")
                lockKeyboard()
                setTimeout(collision, 2050)
        }
        if (toCallExit) {
            lockKeyboard()
            signalEvent("You reached an exit!")
            exitBoard();
        }
}



//takes array of snakes, updates map according to their positions
//returns null if no collision occurred, else returns coordinate of collision

function updateSnakes(cellVal,snakeArray){
        collisionCoordinate = null
        for (s in snakeArray) {
                var snake = snakeArray[s];
                var positions = snake.getPositionAtTime(timeStep)
                console.log(positions)
                for (i in positions) {
                        var currentSnakePosition = positions[i];
                        console.log(currentSnakePosition)
                        // console.log(currentSnakePosition)
                        var collision = !(map.put(cellVal,currentSnakePosition[0],currentSnakePosition[1])) //input at position the value for current snake
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
    // game.stage.backgroundColor = '#061f27';
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
    game.stage.backgroundColor = '#061f27';
    for (var x = 0; x < map.getRows(); x++) {
        for (var y = 0; y < map.getColumns(); y++) {
            
            // enumCells
            // var square = game.add.sprite(x*100, y*100, 'shadow');

            var newSquare = new Phaser.Rectangle(x * 100 + 2, y * 100 + 2, 96, 96);
            // game.debug.renderRectangle(newSquare,'#FFF');

            // if empty cell:
            if (map.get(x,y) == 0) {
                // square.tint = '#FFF';
                // Phaser.Rectangle(x*100, y*100, map.rows, map.columns);
                game.debug.renderRectangle(newSquare,'#FFF')
            }

            // if border cell:
            if (map.get(x,y) == 1) {
                // square.tint = '#B3B3B3s';
                // Phaser.Rectangle(x*100, y*100, map.rows, map.columns);
                game.debug.renderRectangle(newSquare,'#B3B3B3')
            }

            // if exit cell:
            if (map.get(x,y) == 2) {
                // square.tint = '#305AFF';
                // Phaser.Rectangle(x*100, y*100, map.rows, map.columns);
                game.debug.renderRectangle(newSquare,'#305AFF')
            }

            // if pastSnakes cell:
            if (map.get(x,y) == 3) {
                // game.add.sprite(x*100, y*100, 'shadow');
                // square.tint = '#DB95B8';
                // Phaser.Rectangle(x*100, y*100, map.rows, map.columns);
                game.debug.renderRectangle(newSquare,'#6d6d6d')
            }

            // if currentSnakes cell:
            if (map.get(x,y) == 4) {
                // game.add.sprite(x*100, y*100, 'snake');
                // Phaser.Rectangle(x*100, y*100, map.rows, map.columns);
                // console.log(activeSnake.getColor());
                game.debug.renderRectangle(newSquare, activeSnake.getColor());
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
        if (activeSnake.onBoardAtTime(timeStep)){
            timeStep++
            // Updating the position of the board
            map.clear(pastSnakes.length)
            updateSnakes(4,[activeSnake])
            updateSnakes(3,pastSnakes)
            drawUpdatedBoard();
            exitBoard()
        }else{
            signalEvent("...")
            drawUpdatedBoard();
            nextSnake()
        }
    }, 250);
}


// stub
function preload() {
    game.load.image('snake', './images/snake.png');
    game.load.image('shadow', './images/apple.png');

}

function create() { 
    //Center the game
    this.game.stage.scale.pageAlignHorizontally = true;
    this.game.stage.scale.pageAlignVeritcally = true;
    this.game.stage.scale.refresh();
	// init keyboard commands
	game.input.keyboard.addCallbacks(null, null, onKeyUp);

    map.clear(pastSnakes.length);
    activeSnake = createSnakeWith(map.getSnakeAtIndex(pastSnakes.length));
    update()
}

// Update the internal database in the board, and update the canvas
function update() {
    updateBoard()
    drawUpdatedBoard();
}

// Rewind time to second to previous snake
function rewind(){
    timeStep = 0
    pastSnakes.pop()
    var snakeProperties = map.getSnakeAtIndex(pastSnakes.length)
    activeSnake = createSnakeWith(snakeProperties)
    update()
}

function lockKeyboard(){
    keyboardLock = true
}

function unlockKeyboard(){
    keyboardLock = false
}