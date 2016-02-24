var Map = function(sizeX, sizeY, SnakeMap) {
	var that = Object.create(Map.prototype)
	var cells = []
	var rows = sizeX
	var columns = sizeY
    var exit

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
        		newRow.push(enumCell.empty)
        	}
            cells.push(newRow)
        }
        // console.log("cells1: ",cells);
        // Initialize the walls
        for (var x = 0; x < rows; x++) {
            cells[0][x] = enumCell.wall
            cells[x][0] = enumCell.wall
            cells[rows - 1][x] = enumCell.wall
            cells[x][columns - 1] = enumCell.wall    
        }  

        // Empty all of the entry/exit cells
        for (var i = 0; i < SnakeMap.length; i++){
            startPosition = SnakeMap[i].startPos
            cells[startPosition[0]][startPosition[1]] =  enumCell.empty
            goalPosition = SnakeMap[i].goalPos
            cells[goalPosition[0]][goalPosition[1]] =  enumCell.empty
        }

        // Initialize exit
        goalPosition = SnakeMap[index].goalPos
        cells[goalPosition[0]][goalPosition[1]] =  enumCell.exit

    }

    that.isExit = function(x,y){
        cell = cells[x][y]
        return (cell == enumCell.exit)
    }

    that.get = function(x, y){
    	if (y < rows && x < columns){
    		return cells[x][y]
    	}
    	return null;
    }

    that.put = function(content, x, y){
        // console.log("cellsput: ",cells);
        // console.log(x,", ", y);
        console.log("x",x)
        console.log("y",y)

        if (0 <= y && 0 <= x && y < rows && x < columns) {
            if (cells[x][y] == enumCell.exit || cells[x][y] == enumCell.empty) {
                cells[x][y] = content
                return true
            }
        }
        result = false
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
