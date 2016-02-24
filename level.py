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
		self.rectangle((x, y_start), (x, y_end))		
	
	def vertical_line(self, x_start, x_end, y):
		self.rectangle((x_start, y), (x_end, y))

	def get(self):
		return self.cell 



w = Wall(7,7)
w.square(1,1,5)
print w.get()
