
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


var levelIndex = 0;
var levels = []

// Sequences of levels

// Hard Level
// var snakeData = [{snakeLength:3, startPos:[0, 3], goalPos:[6, 2], heading:DIRECTION_ENUM.RIGHT, snakeColor:'#E5FF00'},
//                  {snakeLength:4, startPos:[5, 0], goalPos:[2, 0], heading:DIRECTION_ENUM.LEFT, snakeColor:'#2BFF95'},
//                  {snakeLength:5, startPos:[4, 0], goalPos:[2, 6], heading:DIRECTION_ENUM.DOWN, snakeColor:'#FF2B60'}];

// Create Empty wallmap
wallData = []
for (var x = 0; x < ROWS; x++) {
    var newRow = []
    for (var y = 0; y < COLS; y++) {
        newRow.push(0)
    }
    wallData.push(newRow)
}

// hardLevel = {snakes:snakeData, wall:wallData}
// levels.push(hardLevel)

// First level
var snakeData = [{snakeLength:3, startPos:[0, 3], goalPos:[6, 3], heading:DIRECTION_ENUM.RIGHT, snakeColor:'#E5FF00'},
                  {snakeLength:4, startPos:[3, 0], goalPos:[3, 6], heading:DIRECTION_ENUM.DOWN, snakeColor:'#2BFF95'}];


firstLevel = {snakes:snakeData, wall:wallData}
levels.push(firstLevel)

// Second level
var snakeData = [{snakeLength:3, startPos:[0, 4], goalPos:[6, 2], heading:DIRECTION_ENUM.RIGHT, snakeColor:'#E5FF00'},
                  {snakeLength:4, startPos:[6, 4], goalPos:[0, 2], heading:DIRECTION_ENUM.LEFT, snakeColor:'#2BFF95'}];

var wallData = [[0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0]]

secondLevel = {snakes:snakeData, wall:wallData}
levels.push(secondLevel)

// Loop

var snakeData = [{snakeLength:6, startPos:[3, 6], goalPos:[6, 0], heading:DIRECTION_ENUM.LEFT, snakeColor:'#E5FF00'},
                  {snakeLength:6, startPos:[3, 0], goalPos:[0, 6], heading:DIRECTION_ENUM.DOWN, snakeColor:'#2BFF95'}];

wallData = 
[[1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 0, 1, 1, 0], [1, 1, 1, 0, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 1, 1, 1], [0, 1, 1, 0, 1, 1, 1], [0, 0, 0, 0, 1, 1, 1]]

loop = {snakes:snakeData, wall:wallData}
levels.push(loop)
// Third level
var snakeData = [{snakeLength:5, startPos:[0, 1], goalPos:[6, 1], heading:DIRECTION_ENUM.RIGHT, snakeColor:'#E5FF00'},
                 {snakeLength:3, startPos:[0, 5], goalPos:[6, 5], heading:DIRECTION_ENUM.RIGHT, snakeColor:'#2BFF95'},
                 {snakeLength:3, startPos:[6, 3], goalPos:[0, 3], heading:DIRECTION_ENUM.LEFT, snakeColor:'#FF2B60'}];

var wallData = [[1, 0, 1, 0, 1, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 1, 1, 1, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 1, 1, 1, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 1, 0, 1, 0, 1]]

thirdLevel = {snakes:snakeData, wall:wallData}
levels.push(thirdLevel)
var map;

//Fourth level 
var snakeData = [{snakeLength:4, startPos:[1, 1], goalPos:[1, 6], heading:DIRECTION_ENUM.RIGHT, snakeColor:'#E5FF00'},
                  {snakeLength:4, startPos:[6, 4], goalPos:[2, 2], heading:DIRECTION_ENUM.LEFT, snakeColor:'#2BFF95'}];

var wallData = [[1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 1, 0, 1, 1], [1, 1, 1, 1, 0, 1, 1], [1, 1, 1, 1, 0, 1, 1], [1, 1, 1, 0, 0, 1, 1], [1, 1, 1, 0, 0, 1, 1]]

fourthLevel = {snakes:snakeData, wall:wallData}
levels.push(fourthLevel)

// Fourth and  a half
snakeData = [{snakeLength:6, startPos:[5, 3], goalPos:[0,0], heading:DIRECTION_ENUM.UP, snakeColor:'#E5FF00'},
                 {snakeLength:4, startPos:[3, 1], goalPos:[0, 6], heading:DIRECTION_ENUM.LEFT, snakeColor:'#2BFF95'},
                 {snakeLength:6, startPos:[1, 3], goalPos:[6, 6], heading:DIRECTION_ENUM.DOWN, snakeColor:'#FF2B60'},
                 {snakeLength:4, startPos:[3, 5], goalPos:[6, 0], heading:DIRECTION_ENUM.RIGHT, snakeColor:'#0000FF'}];

wallData = [[0, 0, 0, 0, 0, 1, 0], [1, 1, 1, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 1], [0, 1, 0, 0, 0, 0, 0]]

fourthHalfLevel = {snakes:snakeData, wall:wallData}
levels.push(fourthHalfLevel)
//Fifth level

snakeData = [{snakeLength:5, startPos:[1, 5], goalPos:[6, 1], heading:DIRECTION_ENUM.UP, snakeColor:'#E5FF00'},
                 {snakeLength:5, startPos:[5, 1], goalPos:[1, 0], heading:DIRECTION_ENUM.DOWN, snakeColor:'#2BFF95'},
                 {snakeLength:4, startPos:[1, 1], goalPos:[5, 6], heading:DIRECTION_ENUM.DOWN, snakeColor:'#FF2B60'},
                 {snakeLength:4, startPos:[5, 5], goalPos:[0, 5], heading:DIRECTION_ENUM.LEFT, snakeColor:'#0000FF'}];

var wallData = [[1, 1, 1, 1, 1, 0, 1], [0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 1, 1, 1]]
fifthLevel = {snakes:snakeData, wall:wallData}
levels.push(fifthLevel)

var Game = {

    create : function() {
        //Center the game
        // this.game.stage.scale.pageAlignHorizontally = true;
        // this.game.stage.scale.pageAlignVeritcally = true;
        // this.game.stage.scale.refresh();
        // init keyboard commands
        game.input.keyboard.addCallbacks(null, null, onKeyUp);
        firstLevel = levels[0]
        console.log(firstLevel.wall)    
        map = Map(ROWS, COLS, firstLevel.snakes, firstLevel.wall);
        map.clear(pastSnakes.length);
        activeSnake = createSnakeWith(map.getSnakeAtIndex(pastSnakes.length));
        update()
    },

    render : function() {
        drawUpdatedBoard()
    }
};

function onKeyUp(event) {
        // act on player input
        if (keyboardLock){
            return
        }
        var acted = false
        switch (event.keyCode) {
                case Phaser.Keyboard.LEFT:
                        if (activeSnake.getHead()[0] - 1 < 0){return}
                        acted = activeSnake.move(DIRECTION_ENUM.LEFT)
                        break
 
                case Phaser.Keyboard.RIGHT:
                        if (activeSnake.getHead()[0] + 1 >= COLS){return}
                        acted = activeSnake.move(DIRECTION_ENUM.RIGHT)
                        break
 
                case Phaser.Keyboard.UP:
                        if (activeSnake.getHead()[1] - 1 < 0){return}
                        acted = activeSnake.move(DIRECTION_ENUM.UP)
                        break
 
                case Phaser.Keyboard.DOWN:
                        if (activeSnake.getHead()[1] + 1 >= ROWS){return}
                        acted = activeSnake.move(DIRECTION_ENUM.DOWN)
                        break
                case Phaser.Keyboard.ONE:
                             console.log("Time going to rollback")
                             rewind();
                case Phaser.Keyboard.TWO:
                // TODO: reset without going to start screen
                             console.log("Reset game")
                             reset();
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
        console.log(snakeProperties)
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
    levelIndex += 1
    level = levels[levelIndex]
    if (levelIndex == levels.length){  
        signalEvent("Congratulations, you win!")
        lockKeyboard()
        console.log("You win!")
    }else{
        console.log("new level")
        setTimeout(function () {
            map = Map(ROWS, COLS, level.snakes, level.wall);
            timeStep = 0
            pastSnakes = []
            activeSnake = createSnakeWith(map.getSnakeAtIndex(pastSnakes.length));
            update()
        }, 1000);
    }
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
        var collCoord1 = updateSnakes([activeSnake])
        var collCoord2 = updateSnakes(pastSnakes)

        if (!(collCoord1 == null && collCoord2 == null)) {
                //game over
                signalEvent("You bumped into something else!")
                lockKeyboard()
                setTimeout(collision, 1000)
        }
        if (toCallExit) {
            lockKeyboard()
            signalEvent("You reached an exit!")
            exitBoard();
        }
}



//takes array of snakes, updates map according to their positions
//returns null if no collision occurred, else returns coordinate of collision

function updateSnakes(snakeArray){
        collisionCoordinate = null
        for (s in snakeArray) {
                var snake = snakeArray[s];
                var positions = snake.getPositionAtTime(timeStep)
                for (i in positions) {
                        var currentSnakePosition = positions[i];
                        var collision = !(map.put(snake.getColor(),currentSnakePosition[0],currentSnakePosition[1])) //input at position the value for current snake
                        if (collision) {
                                collisionCoordinate = (currentSnakePosition[0],currentSnakePosition[1])
                        }
                }
        }
        return collisionCoordinate
}

//returns true iff there are still snakes on the board (active or past)
function snakesStillOnBoardAtTimeStep(t) {
        stillOn = activeSnake.onBoardAtTime(t)
        for (index in pastSnakes){
                stillOn = stillOn || pastSnakes[index].onBoardAtTime(t)
        }
        return stillOn
}

function exitBoard() {
    setTimeout(function () {
        if (snakesStillOnBoardAtTimeStep(timeStep)){
            timeStep++
            signalTime(timeStep)

            // Updating the position of the board
            map.clear(pastSnakes.length)
            updateSnakes([activeSnake])
            updateSnakes(pastSnakes)
            drawUpdatedBoard();
            exitBoard()
        }else{
            signalEvent("...")
            drawUpdatedBoard();
            nextSnake()
        }
    }, 250);
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

// Reset level to 1
function reset(){
    //TODO
}

function lockKeyboard(){
    keyboardLock = true
}

function unlockKeyboard(){
    keyboardLock = false
}