var Snake = function(length,startX,startY, startHeading){
	var that = Object.create(Snake.prototype)

	var story = [(startX,startY)]
	var x = startX
	var y = startY
	var length = length
	var heading = startHeading

	that.shadow = false

	//takes directional input of some kind, updates actual position of snake to story
	//if movement conflicts with body immediately - that is, if player is moving right then inputs left, 
	//the snake will keep moving in the original direction
	that.move = function(){
		switch(that.heading){
			case 0:
				
			break

			case 1:

			break

			case 2:

			break

			default:

			break
		}
	}

	//turn the snake in the given direction
	that.turn = function(direction){
		//the directions don't directly conflict, turn can be done
		if !((that.heading + 2) % 4 == heading){
			this.heading = direction
		}
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

	return that

}

var DIRECTION_ENUM = {
	RIGHT:0,
	UP:1,
	LEFT:2,
	DOWN:3
}