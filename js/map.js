var Map = function(sizeX, sizeY, SnakeMap, wallMap) {
	var that = Object.create(Map.prototype)
	var cells = []
	var rows = sizeX
	var columns = sizeY
    var exit

    var collisionColor = '#FF0000'
    var wallColor = '#B3B3B3'

    var enumCell= {
        empty:0,
        wall:1,
        exit:2,
        pastSnake:3,
        currentSnake:4
    }

    // Initialize a new empty map
	that.clear = function(index) {
        console.log("clearing")
        console.log(wallMap)
        that.clearCells()
        that.initWalls()
        that.initPortals(index)
    }

    // Initialize empty cells
    that.clearCells = function(){
        cells = [];
            // console.log("cells0: ",cells);
        for (var x = 0; x < rows; x++) {
            var newRow = []
            for (var y = 0; y < columns; y++) {
                newRow.push(Cell())
            }
            cells.push(newRow)
        }

    }

    that.initWalls = function(){
        console.log(wallMap)
        // Insert the wall
        for (var x = 0; x < rows; x++) {
            for (var y = 0; y < columns; y++) {
                if (wallMap[x][y] == 1){
                    cells[x][y].setColorAndOccupy(wallColor)
                }
            }
        }

    }


    // Empty all of the entry/exit cells
    that.initPortals = function(index){
        for (var i = 0; i < SnakeMap.length; i++){
            startPosition = SnakeMap[i].startPos
            //color start cell with snake color
            // cells[startPosition[0]][startPosition[1]].setColor(SnakeMap[i].snakeColor)
            //color start cell white
            cells[startPosition[0]][startPosition[1]].setColor('#FFF')
            cells[startPosition[0]][startPosition[1]].setOccupied(false)
            goalPosition = SnakeMap[i].goalPos
            cells[goalPosition[0]][goalPosition[1]].setColor(SnakeMap[i].snakeColor)
            cells[goalPosition[0]][goalPosition[1]].setOccupied(false)
        }

        // Initialize current snake's exit
        console.log(index)
        goalPosition = SnakeMap[index].goalPos
        cells[goalPosition[0]][goalPosition[1]].setExit(true)

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
        if (0 <= y && 0 <= x && y < rows && x < columns) {
            if (!cells[x][y].isOccupied()){
                cells[x][y].setColorAndOccupy(color)
                return true
            }
            cells[x][y].setColorAndOccupy(collisionColor)
            return false
        }
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
};
