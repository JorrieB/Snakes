var Snake = function(length,startX,startY){
	var that = Object.create(Snake.prototype)

	var story = [(startX,startY)]
	var x = startX
	var y = startY
	var length = length
	
	that.shadow = false

	//takes directional input of some kind, updates actual position of snake to story
	//if movement conflicts with body immediately - that is, if player is moving right then inputs left, 
	//the snake will keep moving in the original direction
	that.move = function(direction){

	}

	//returns array of positions occupied by the snake at the current timestep
	//if the snake is off the board, an empty array will be returned
	that.getPositionAtTime = function(timestep) {
		if (story.length > timestep) {
			return story[timestep]
		}
		return []
	}



	return that
}