# Snakes
CMS.611 Project 2

Contact Info: 
Nayeon (nayeonk@mit.edu) 5125607022
Jorrie (jorrieb@mit.edu)
Giulio (gueltro@mit.edu)

Design:

* Time-based, single player game with multiple snakes.
* Player controls one snake at a time. Time starts at 0, each time player makes move is represented by one time step.
* When player gets a snake to the exit successfully, they are given control of the next snake and the time is reset to 0.
* Past snakes move exactly as they did when you controlled them previously.
* Start with 3 snakes (Lengths: 1, 3, 5)
* You are presented Start and End points on the grid (+possibly timed rounds or timed overall round)
* Grid is a 10x10 rectangular grid (+expand to differently shaped grids)
* You hit the wall you die. You hit another snake, you die. You hit your own body, you die.
* When you die, you start that snake that just died over at time 0. (All snakes would move back to their respective positions)
* Goal: get all snakes to their respective exits.
