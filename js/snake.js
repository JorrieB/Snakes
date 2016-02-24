var Snake = function(startLength,start,goal,initHeading, snakeColor){
	var that = Object.create(Snake.prototype)

	var x = start[0]
	var y = start[1]
	var story = [[x,y]]
	var snakeLength = startLength
	var heading = initHeading
	var goalPos = goal
	var snakeColor = snakeColor

	//takes directional input of some kind, updates actual position of snake to story
	//if movement conflicts with body immediately - that is, if player is moving right then inputs left, 
	//the snake will keep moving in the original direction


	// input direction of type DIRECTION_ENUM
	//return boolean if move was either valid/made or invalid/not made
	that.move = function(direction){
		//if the input direction is exactly opposite of the direction the snake is currently moving,
		//do nothing and return false as it is an invalid move 
		if ((heading + 2) % 4 == direction){
			return false
		}
		//otherwise, move the snake in the proper direction, tell the game you've moved
		// console.log('direction = ')
		console.log("direction: ",direction)
		console.log("heading: ",heading)
		heading = direction

		switch(heading){
			case 0:
			x += 1
			break

			case 1:
			y -= 1
			break

			case 2:
			x -= 1
			break

			default:
			y += 1
			break
		}

		story.push([x,y])
		return true
	}

	//returns array of positions occupied by the snake at the current timestep
	//if the snake is off the board, an empty array will be returned
	that.getPositionAtTime = function(timestep) {
		var positions = [];
		for (var i = 0; i < snakeLength; i++){
			//if the snake covers any portion of the board at this timestep
			if ((timestep - i) < story.length && (timestep - i) >= 0){
				positions.push(story[timestep - i])
			}
		}
		return positions
	}

	// returns color
	that.getColor = function() {
		return snakeColor;
	}

	//takes timestamp, returns whether or not it is currently on board
	that.onBoardAtTime = function(timeStep) {
		console.log(timeStep)
		console.log(story.length)
		return (story.length + snakeLength) > timeStep + 1 
	}

	return that

}

var DIRECTION_ENUM = {
	RIGHT:0,
	UP:1,
	LEFT:2,
	DOWN:3
}