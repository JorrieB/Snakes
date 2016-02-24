var Map = function(sizeX, sizeY, SnakeMap) {
	var that = Object.create(Map.prototype)
	var cells = []
	var rows = sizeX
	var columns = sizeY
    var exit

    var collisionColor = '#FF0000'

    var enumCell= {
        empty:0,
        wall:1,
        exit:2,
        pastSnake:3,
        currentSnake:4
    }

    // Initialize a new empty map
	that.clear = function(index) {
        // Initialize empty cells
        cells = [];
            // console.log("cells0: ",cells);
        for (var x = 0; x < rows; x++) {
        	var newRow = []
        	for (var y = 0; y < columns; y++) {
        		newRow.push(Cell())
        	}
            cells.push(newRow)
        }
        // console.log("cells1: ",cells);
        // Initialize the walls
        for (var x = 0; x < rows; x++) {
            cells[0][x].setColorAndOccupy('#B3B3B3')
            cells[x][0].setColorAndOccupy('#B3B3B3')
            cells[rows - 1][x].setColorAndOccupy('#B3B3B3')
            cells[x][columns - 1].setColorAndOccupy('#B3B3B3')
        }  

        // Empty all of the entry/exit cells
        for (var i = 0; i < SnakeMap.length; i++){
            startPosition = SnakeMap[i].startPos
            cells[startPosition[0]][startPosition[1]].setColor('#FFF')
            cells[startPosition[0]][startPosition[1]].setOccupied(false)
            goalPosition = SnakeMap[i].goalPos
            cells[goalPosition[0]][goalPosition[1]].setColor('#FFF')
            cells[goalPosition[0]][goalPosition[1]].setOccupied(false)
        }

        // Initialize exit
        goalPosition = SnakeMap[index].goalPos
        cells[goalPosition[0]][goalPosition[1]].setExit(true)
        cells[goalPosition[0]][goalPosition[1]].setOccupied(false)


    }

    that.isExit = function(x,y){
        return cells[x][y].isExit()
    }

    //returns the cell at position x,y
    that.get = function(x, y){
    	if (y < rows && x < columns){
    		return cells[x][y]
    	}
    	return null;
    }

    //returns the color of the cell at x,y
    that.getColor = function(x, y){
        if (y < rows && x < columns){
            return cells[x][y].getColor()
        }
        return null;
    }

    //update color of the cell at position x,y
    //returns whether or not a collision occurred
    //
    that.put = function(color, x, y){
        // console.log("cellsput: ",cells);
        // console.log(x,", ", y);
        console.log("x",x)
        console.log("y",y)
        console.log("put")
        if (0 <= y && 0 <= x && y < rows && x < columns) {
            if (!cells[x][y].isOccupied()){
                cells[x][y].setColorAndOccupy(color)
                return true
            }
            cells[x][y].setColorAndOccupy(collisionColor)
            return false

            // if (cells[x][y] == enumCell.exit || cells[x][y] == enumCell.empty) {
            //     cells[x][y] = content
            //     return true
            // }
        }
        // result = false
    }

    that.getRows = function() {
        return rows
    }

    that.getColumns = function() {
        return columns
    }

    that.getEnumCell = function(x,y) {
        return enumCell;
    }
    
    that.getSnakeAtIndex = function(i){
        if (SnakeMap.length >i){
            return SnakeMap[i]
        }
        return null
    }

        return that
    }
