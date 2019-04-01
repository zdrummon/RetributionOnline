
class hexDirections:
    NORTHWEST = 0
    NORTH = 1
    NORTHEAST = 2
    SOUTHEAST = 3
    SOUTH = 4
    SOUTHWEST = 5

def checkAllNeighborHex(x, y, regionbuffer, *args, **kwar):
    print( )
    neighborArray = [0,0,0,0,0,0]
    if (x % 2 == 0 & ((x > 1) & (y > 1))):
        neighborArray[hexDirections.NORTHWEST] = regionbuffer[x - 1][y - 1]
        neighborArray[hexDirections.NORTH]     = regionbuffer[x][y - 1]
        neighborArray[hexDirections.NORTHEAST] = regionbuffer[x + 1][y - 1]
        neighborArray[hexDirections.SOUTHEAST] = regionbuffer[x + 1][y]
        neighborArray[hexDirections.SOUTH]     = regionbuffer[x][y + 1]
        neighborArray[hexDirections.SOUTHWEST] = regionbuffer[x - 1][y]
            
    elif (x % 2 != 0 & ((x > 1) & (y > 1))):
        neighborArray[hexDirections.NORTHWEST] = regionbuffer[x - 1][y]
        neighborArray[hexDirections.NORTH]     = regionbuffer[x][y - 1]
        neighborArray[hexDirections.NORTHEAST] = regionbuffer[x + 1][y]
        neighborArray[hexDirections.SOUTHEAST] = regionbuffer[x + 1][y + 1]
        neighborArray[hexDirections.SOUTH]     = regionbuffer[x][y + 1]
        neighborArray[hexDirections.SOUTHWEST] = regionbuffer[x - 1][y]
    
    return neighborArray     
