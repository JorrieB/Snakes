var Map = function(sizeX, sizeY, SnakeMap) {
	var that = Object.create(Map.prototype)
	var cells = []
	var rows = sizeX
	var columns = sizeY

    var enumCell= {
        empty:0
        border:1
        exit:2
        pastSnake:3
        currentSnake:4
    }

    // Initialize a new empty map
	that.clear = function(index) {
        // Initialize empty cells
        for (var x = 0; x < rows; x++) {
        	var newRow = []
        	for (var y = 0; y < columns; y++) {
        		newRow.push(enumCell.empty)
        		cells.push(newRow)
        	}
        }
        // Initialize the border
        for (var x = 0; x < rows; x++) {
            cells[0][x] = enumCell.border
            cells[x][0] = enumCell.border
            cells[rows - 1][x] = enumCell.border
            cells[x][rows - 1] = enumCell.border     
            }  
        // Initialize exit
        goalPosition = SnakeMap[index].goalPos
        cells[goalPosition[0]][goalPosition[1]] =  enumCell.exit
    }

    that.get = function(x, y){
    	if (y < rows && x < columns){
    		return cells[x][y]
    	}
    	return null;
    }

    that.put = function(content, x, y){
        // TODO: change to y,x?
    	if (y < rows && x < columns && (cells[x][y] == enumCell.empty || cells[x][y].exit ){
    		cells[x][y] = content
            return true
    	}
        return false
    }

    that.getSnakeAtIndex = function(i){
        if (SnakeMap.length >i){
            return SnakeMap[i]
        }
        return null
    }

        return that
    }
