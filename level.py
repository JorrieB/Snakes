class Wall():
	def __init__(self, rows, columns):
		self.cell = [[0 for i in range(rows)] for j in range(columns)]
	# Create a rectangle with left corner at  (x_start, y_start) and (x_end, y_end)	 at right corner	
	def rectangle(self, (x_start, y_start), (x_end, y_end)):
		for x in range(x_start, x_end):
			for y in range(y_start, y_end):
			 	self.cell[x][y] = 1

	# Create a square with left corner at (x,y) and side 
	def square(self, x, y, side):
		self.rectangle((x,y), (x + side, y + side))	

	def orizontal_line(self, x, y_start, y_end):
		self.rectangle((x, y_start), (x + 1, y_end))		
	
	def vertical_line(self, x_start, x_end, y):
		self.rectangle((x_start, y), (x_end, y + 1))

	def get(self):
		return self.cell 


# Level 2
w = Wall(7,7)
w.square(1,1,5)
print w.get()

# Level 3
#w = Wall(7,7)
#w.square(0,2,1)
#w.square(0,4,1)
#w.square(6,2,1)
#w.square(6,4,1)
#w.vertical_line(0,7,0)
#w.vertical_line(0,7,6)
#w.orizontal_line(2,2,5)
#w.orizontal_line(4,2,5)
#print w.get()

# Level 4
#w = Wall(7,7)
#w.rectangle((0,0),(7,1))
#w.rectangle((0,0),(1,7))
#w.rectangle((3,1), (7,3))
#w.rectangle((3,1), (5,4))
#w.square(2,3,1)
#w.rectangle((2,5),(7,7))
#print w.get()

#Level 5
#w = Wall(7,7)
#w.rectangle((0,0),(1,5))
#w.rectangle((0,6), (5,7))
#w.rectangle((2,0), (7,1))
#w.rectangle((6,2), (7,7))
#print w.get()
