var Snake = function(length,start,goal,startHeading){
	var that = Object.create(Snake.prototype)

	var x = start[0]
	var y = start[1]
	var story = [(x,y)]
	var length = length
	var heading = startHeading
	var goalPos = goal

	//takes directional input of some kind, updates actual position of snake to story
	//if movement conflicts with body immediately - that is, if player is moving right then inputs left, 
	//the snake will keep moving in the original direction


	//input direction of type DIRECTION_ENUM
	//return boolean if move was either valid/made or invalid/not made
	that.move = function(direction){
		//if the input direction is exactly opposite of the direction the snake is currently moving,
		//do nothing and return false as it is an invalid move 
		if ((that.heading + 2) % 4 == heading){
			return false
		}
		//otherwise, move the snake in the proper direction, tell the game you've moved
		switch(that.heading){
			case 0:
			console.log("RIGHT")
			x += 1
			break

			case 1:
			y += 1
			console.log("UP")
			break

			case 2:
			x -= 1
			console.log("LEFT")
			break

			default:
			y -= 1
			console.log("DOWN")
			break
		}
		that.heading = direction
		story.push((x,y))
		return true
	}

	//returns array of positions occupied by the snake at the current timestep
	//if the snake is off the board, an empty array will be returned
	that.getPositionAtTime = function(timestep) {
		var positions = []
		for (i = 0; i < length; i++){
			//if the snake covers any portion of the board at this timestep
			if ((timestep - i) < story.length && (timestep - i) >= 0){
				positions.push(story[timestep - i])
			}
		}

		return positions
	}

	//takes timestamp, returns whether or not it is currently on board
	that.onBoardAtTime = function(timeStep) {
		return (timeStep - story.length) >= length
	}

	return that

}

var DIRECTION_ENUM = {
	RIGHT:0,
	UP:1,
	LEFT:2,
	DOWN:3
}