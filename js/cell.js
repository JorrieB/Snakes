var Cell = function() {
	var that = Object.create(Cell.prototype)
	var color = '#FFF'
	var occupied = false
	var isExit = false

	//takes in new color
	that.setColor = function(colorString){
		color = colorString
	}

	//returns its color
	that.getColor = function(){
		return color
	}

	//sets cell color to new color and changes occupation as an atomic action
	that.setColorAndOccupy = function(colorString){
		color = colorString
		occupied = true
	}

	//change state of cell to whatever the user wants
	//generally, user should only be setting it to true because of the way we generate maps
	that.setOccupied = function(newOcc){
		occupied = newOcc
	}

	//takes in whether or not the cell is occupied
	that.isOccupied = function(){
		return occupied
	}

	//allows user to change this cell to an exit
	that.setExit = function(exit){
		isExit = exit
	}

	//returns whether or not this is the exit for the current snake
	that.isExit = function(){
		return isExit
	}

	return that
}