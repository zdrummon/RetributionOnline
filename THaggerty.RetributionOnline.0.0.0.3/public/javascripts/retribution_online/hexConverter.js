//

function tileData(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
}

function checkneighbor(cursorX, cursorY) {
    var neighborData = new Array();
    
    var maxBoard = 11;
    for (i = 0; i < 6; i++) {
        if (i == 0 && (((cursorX == 0) || (cursorX == maxBoard)) || ((cursorY == 0) || (cursorY == maxBoard)))){
            if ( % 2 == 0) {																			
	//East]      = [x + 1][y]			
	//NorthEast] = [x + 1][y + 1]
	//NorthWest] = [x][y + 1]
	//West]      = [x - 1][y]
	//SouthWest] = [x][y - 1]
	//SouthEast] = [x + 1][y - 1]
}
if (y % 2 != 0) {																  			
	//East]      = [x + 1][y]
	//NorthEast] = [x][y + 1]
	//NorthWest] = [x - 1][y + 1]
	//West]      = [x - 1][y]
	//SouthWest] = [x - 1][y - 1]
	//SouthEast] = [x][y - 1]
}

        }
    }

}