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

/*
var gameBoard = [
    [1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,2,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1]
];
*/
var player = new mob(5,5,0,true,1,10,10,10,10,4,0,0);

//------------------------------------------------NORTHWEST moveGameBoard begun and not finished
function moveGameBoard(moveDirection) {
    if (moveDirection == hexDirections.NORTHWEST) {
        console.log("going top left");
        //temporarily setting i and j to 1 for testing
        
    } else if (moveDirection == hexDirections.NORTH) {
        
    } else if (moveDirection == hexDirections.NORTHEAST) {
        
    } else if (moveDirection == hexDirections.SOUTHEAST) {
        
    } else if (moveDirection == hexDirections.SOUTH) {
        
    } else if (moveDirection == hexDirections.SOUTHWEST) {
    
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