//checkNeighor.js contains tools for evaluating the values around a given hex within a given array
function checkNeighborHex(x, y, gameBoardbuffer, checkDirection){
    // if the "home" hex is at an even x position
    if (x % 2 == 0){
        //check the given direction depending on input direction
        switch(checkDirection){
            case hexDirections.NORTHWEST:
                if (x > 0 && y > 0){
                    return gameBoardbuffer[x - 1][y - 1];
                }
                else { 
                    return 0;
                }
                break;
            case hexDirections.NORTH:  
                if (y > 0){
                    return gameBoardbuffer[x][y - 1];
                }
                else { 
                    return 0;
                }
                break;
            case hexDirections.NORTHEAST:
                if (y > 0){
                    return gameBoardbuffer[x + 1][y - 1];
                }
                else { 
                    return 0;
                }
                break;
            case hexDirections.SOUTHEAST:
                return gameBoardbuffer[x + 1][y];
                break;
            case hexDirections.SOUTH    :
                return gameBoardbuffer[x][y + 1];
                break;
            case hexDirections.SOUTHWEST:
                if (x > 0){
                    return gameBoardbuffer[x - 1][y];
                }
                else { 
                    return 0;
                }
                break;
        }
    }

    else{
        switch(checkDirection){
            case hexDirections.NORTHWEST:
                if (x > 0){
                    return gameBoardbuffer[x - 1][y];
                }
                else { 
                    return 0;
                }
                break;
            case hexDirections.NORTH    :
                if (y > 0){
                    return gameBoardbuffer[x][y - 1];
                }
                else { 
                    return 0;
                }
                break;
            case hexDirections.NORTHEAST:
                return gameBoardbuffer[x + 1][y];
                break;
            case hexDirections.SOUTHEAST:
                return gameBoardbuffer[x + 1][y + 1];
                break;
            case hexDirections.SOUTH    :
                return gameBoardbuffer[x][y + 1];
                break;
            case hexDirections.SOUTHWEST:
                if (x > 0){
                    return gameBoardbuffer[x - 1][y];
                }
                else { 
                    return 0;
                }
                break;
        }
    }
}


function checkAllNeighborHex(x, y, gameBoardbuffer){
    var neighborArray = new Array();
    if (x % 2 == 0 && ((x > 0) && (y > 0))){
        neighborArray[hexDirections.NORTHWEST] = gameBoardbuffer[x - 1][y - 1];
        neighborArray[hexDirections.NORTH]     = gameBoardbuffer[x][y - 1];
        neighborArray[hexDirections.NORTHEAST] = gameBoardbuffer[x + 1][y - 1];
        neighborArray[hexDirections.SOUTHEAST] = gameBoardbuffer[x + 1][y];
        neighborArray[hexDirections.SOUTH]     = gameBoardbuffer[x][y + 1];
        neighborArray[hexDirections.SOUTHWEST] = gameBoardbuffer[x - 1][y];
            }
    else if (x % 2 != 0 && ((x > 0) && (y > 0))){
        neighborArray[hexDirections.NORTHWEST] = gameBoardbuffer[x - 1][y];
        neighborArray[hexDirections.NORTH]     = gameBoardbuffer[x][y - 1];
        neighborArray[hexDirections.NORTHEAST] = gameBoardbuffer[x + 1][y];
        neighborArray[hexDirections.SOUTHEAST] = gameBoardbuffer[x + 1][y + 1];
        neighborArray[hexDirections.SOUTH]     = gameBoardbuffer[x][y + 1];
        neighborArray[hexDirections.SOUTHWEST] = gameBoardbuffer[x - 1][y];
    }  
    return neighborArray;     
}