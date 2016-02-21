var Map = function(sizeX, sizeY, timeWindow) {
	var that = Object.create(Map.prototype)
	var cells = []
	var rows = sizeX
	var columns = sizeY

    var enumCell= {
        empty:0
        border:1
        pastSnake:2
        currentSnake:3
    }

    // Initialize a new empty map
	that.init = function() {
        // Initialize empty cells
        for (var y = 1; y < rows; y++) {
        	var newRow = [];
        	for (var x = 0; x < columns; x++) {
        		newRow.push(0);
        		board.push(newRow);
        	}
        }
    }

    that.get = function(x, y){
    	if (y < rows && x < columns){
    		return board[x][y];
    	}
    	return null;
    }

    that.put = function(content, x, y){
    	if (y < rows && x < columns){
    		board[x][y] = content;
    	}
    }


        return that
    }
