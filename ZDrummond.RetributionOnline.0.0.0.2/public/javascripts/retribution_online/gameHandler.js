const hexDirections = {
    NORTHWEST:0,
    NORTH:1,
    NORTHEAST:2,
    SOUTHEAST:3,
    SOUTH:4,
    SOUTHWEST:5
}

var gameBoard = [
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,1,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,2,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,0],
    [0,0,0,1,1,1,1,1,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0]
];

var player = new mob(5,5,0,true,1,10,10,10,10,4,0,0);

//------------------------------------------------NORTHWEST moveGameBoard begun and not finished, time to build the database
function moveGameBoard(moveDirection) {
    if (moveDirection == hexDirections.NORTHWEST) {
        console.log("going top left");
        //temporarily setting i and j to 1 for testing
        for (i = 1; i < 11; i++) {
            for (j = 1;  j < 11; j++) {
                console.log(i + " and " + j + " is going to take " + gameBoard[i - 1][j - 1] + " from the top left and replace its own value.");
            }
        }
    } else if (moveDirection == hexDirections.NORTH) {
        for (i = 0; i < 11; i++) {
            for (j = 0;  j < 11; j++) {
           
            }
        }
    } else if (moveDirection == hexDirections.NORTHEAST) {
        for (i = 0; i < 11; i++) {
            for (j = 0;  j < 11; j++) {
           
            }
        }
    } else if (moveDirection == hexDirections.SOUTHEAST) {
        for (i = 0; i < 11; i++) {
            for (j = 0;  j < 11; j++) {
           
            }
        }
    } else if (moveDirection == hexDirections.SOUTH) {
        for (i = 0; i < 11; i++) {
            for (j = 0;  j < 11; j++) {
           
            }
        }
    } else if (moveDirection == hexDirections.SOUTHWEST) {
        for (i = 0; i < 11; i++) {
            for (j = 0;  j < 11; j++) {
           
            }
        }
    }
}

function updateGame() {
    if (NWbuttonState){
        player.facing = hexDirections.NORTHWEST;
        moveGameBoard(hexDirections.NORTHWEST);
        NWbuttonState = false;
    }
    if (NbuttonState){
        player.facing = hexDirections.NORTH;
        moveGameBoard(hexDirections.NORTH);
        NWbuttonState = false;
    }
    if (NEbuttonState){
        player.facing = hexDirections.NORTHEAST;
        moveGameBoard(hexDirections.NORTHEAST);
        NWbuttonState = false;
    }
    if (SEbuttonState){
        player.facing = hexDirections.SOUTHEAST;
        moveGameBoard(hexDirections.SOUTHEAST);
        NWbuttonState = false;
    }
    if (SbuttonState){        
        player.facing = hexDirections.SOUTH;
        moveGameBoard(hexDirections.SOUTH);
        NWbuttonState = false;
    }
    if (SWbuttonState){
        player.facing = hexDirections.SOUTHWEST;
        moveGameBoard(hexDirections.SOUTHWEST);
        NWbuttonState = false;
    }
}