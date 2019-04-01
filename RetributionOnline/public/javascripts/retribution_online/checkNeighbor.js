//

function checkNeighborHex(x, y, gameBoardbuffer, checkDirection){
    
    if (x % 2 == 0){
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