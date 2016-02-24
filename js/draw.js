// Pick rainbowcolors for your snakes. Qucik and dirty must REDO. Only work for < 7 snakes
rainbowColors = ["#FF0000","#FF7F00","FFFF00", "00FF00", "#0000FF", " #4B0082", "#8B00FF"]

function getRainbowColor(index, snakesNumbers){
    colorIndex = Math.floor(index * 7 / snakesNumbers)
    return rainbowColors[colorIndex]
}
function drawUpdatedBoard() {
    game.stage.backgroundColor = '#061f27';
    for (var x = 0; x < map.getRows(); x++) {
        for (var y = 0; y < map.getColumns(); y++) {

            var newSquare = new Phaser.Rectangle(x * cellWidth + 2, y * cellHeight + 2, 96, 96);
            game.debug.renderRectangle(newSquare,map.getColor(x,y));

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

function signalEvent(text){
    document.getElementById("eventText").innerHTML = text
}

function signalSnakeIndex(currentIndex, snakesNumbers){
    text = "Snake " + (currentIndex + 1) + "/" + (snakesNumbers)
    document.getElementById("snakeIndex").innerHTML = text
}

function signalTime(timeStep){
    text = "Time = " + timeStep
    document.getElementById("timeStep").innerHTML = text
 }

    // Not used
// function drawInitBoard() {
//     // var graphics = game.add.graphics(map.getRows(), map.getColumns());
//     // console.log(map.getRows());
//     // game.stage.backgroundColor = '#061f27';
//     for (var x = 0; x < map.getRows(); x++) {
//         for (var y = 0; y < map.getColumns(); y++) {
//             // var newSquare = new Phaser.Rectangle(x * 100, y * 100, 100, 100);
//             // game.debug.renderRectangle(newSquare,'#FFF');

//             // graphics.beginFill("#0FFFFF", 1);
//             // graphics.drawRect(x * 100, y * 100, 100, 100);
//             // graphics.endFill;

//         }
//     }
// }