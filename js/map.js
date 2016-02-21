var Map = function(sizeX, sizeY, exitMap) {
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
	that.init = function() {
        // Initialize empty cells
        for (var y = 0; y < rows; y++) {
        	var newRow = []
        	for (var x = 0; x < columns; x++) {
        		newRow.push(enumCell.empty)
        		board.push(newRow)
        	}
        }
        // Initialize the border
        for (var x = 0; x < rows; x++) {
            board[0][x] = enumCell.border
            board[x][0] = enumCell.border
            board[rows - 1][x] = enumCell.border
            board[x][rows - 1] = enumCell.border     
            }  
        // Initialize exits from exitMap TODO
    }

    that.get = function(x, y){
    	if (y < rows && x < columns){
    		return board[x][y]
    	}
    	return null;
    }

    that.put = function(content, x, y){
    	if (y < rows && x < columns && (board[x][y] = enumCell.empty || board[x][y].empty ){
    		board[x][y] = content
            return true
    	}
        return false
    }

        return that
    }
