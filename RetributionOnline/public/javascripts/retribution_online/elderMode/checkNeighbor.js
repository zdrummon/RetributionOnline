//checkNeighor.js contains tools for evaluating the values around a given hex within a given array
//checkNeighborHex takes in the coordinates of a hex from a given 2d array and returns the value of that hex
function checkNeighborHex(x, y, gameBoardbuffer){
    //create list that is passed through return
    var neighborArray = new Array();
    //if the x value of the given hex is even andcoordinates are greater than 0
    if (x % 2 == 0 && ((x > 0) && (y > 0))){
        // assign the list of results to the value of the hex at that coordinate
        neighborArray[hexDirections.NORTHWEST] = gameBoardbuffer[x - 1][y - 1];
        neighborArray[hexDirections.NORTH]     = gameBoardbuffer[x][y - 1];
        neighborArray[hexDirections.NORTHEAST] = gameBoardbuffer[x + 1][y - 1];
        neighborArray[hexDirections.SOUTHEAST] = gameBoardbuffer[x + 1][y];
        neighborArray[hexDirections.SOUTH]     = gameBoardbuffer[x][y + 1];
        neighborArray[hexDirections.SOUTHWEST] = gameBoardbuffer[x - 1][y];
            }
    //if the x value of the given hex is odd and coordinates are greater than 0
    else if (x % 2 != 0 && ((x > 0) && (y > 0))){
        // assign the list of results to the value of the hex at that coordinate
        neighborArray[hexDirections.NORTHWEST] = gameBoardbuffer[x - 1][y];
        neighborArray[hexDirections.NORTH]     = gameBoardbuffer[x][y - 1];
        neighborArray[hexDirections.NORTHEAST] = gameBoardbuffer[x + 1][y];
        neighborArray[hexDirections.SOUTHEAST] = gameBoardbuffer[x + 1][y + 1];
        neighborArray[hexDirections.SOUTH]     = gameBoardbuffer[x][y + 1];
        neighborArray[hexDirections.SOUTHWEST] = gameBoardbuffer[x - 1][y + 1];
    }
    //return the list of results to invocation location
    return neighborArray;     
}