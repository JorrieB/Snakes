function drawUpdatedBoard() {
    game.stage.backgroundColor = '#061f27';
    for (var x = 0; x < map.getRows(); x++) {
        for (var y = 0; y < map.getColumns(); y++) {
            
            // enumCells
            // var square = game.add.sprite(x*100, y*100, 'shadow');

            var newSquare = new Phaser.Rectangle(x * 100 + 1, y * 100 + 1, 98, 98);
            // game.debug.renderRectangle(newSquare,'#FFF');

            // console.log(x, " ", y, " ", "enums: ", map.get(x,y));
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
                game.debug.renderRectangle(newSquare,'#E5FF00')
            }

            // if currentSnakes cell:
            if (map.get(x,y) == 4) {
                // game.add.sprite(x*100, y*100, 'snake');
                // Phaser.Rectangle(x*100, y*100, map.rows, map.columns);
                game.debug.renderRectangle(newSquare,'#FFADD6')
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

function signalEvent(text){
    document.getElementById("eventText").innerHTML = text

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