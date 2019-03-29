const hexDirections = {
    NORTHWEST:0,
    NORTH:1,
    NORTHEAST:2,
    SOUTHEAST:3,
    SOUTH:4,
    SOUTHWEST:5
}
var veiwport = [
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
 ] ;
 var gameBoard = [
////<<<<<<<<<<<<<<<<<<----------------------y
    [1,1,1,1,2,1,1,1,2,1,1,1,1,1,2,1,1,1,2,1,1],//  x
     [1,1,2,1,1,1,2,1,1,1,1,1,2,1,1,1,2,1,1,1,2],// |
    [1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,2,1,1,2,1],//  |
     [1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1],// |
    [1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,2,1,1],//  |
     [1,2,1,2,1,1,1,2,1,1,1,2,1,2,1,1,1,2,1,1,1],// |
    [1,1,1,1,1,1,1,1,2,2,3,1,1,1,1,1,1,1,2,2,1],//  |
     [1,2,1,1,2,1,1,3,1,1,1,2,1,3,2,1,1,1,1,1,1],// |
    [1,1,2,1,1,1,2,1,1,1,1,1,2,1,1,1,2,1,1,1,1],//  |
     [2,1,2,1,1,1,1,3,2,3,3,1,2,3,1,1,1,1,2,1,1],// |
    [1,1,1,1,1,1,1,1,1,3,1,3,3,1,1,1,1,1,1,1,1],//  |
     [1,1,1,1,2,1,1,3,2,3,3,1,1,3,2,1,1,1,2,1,1],// |
    [1,1,2,1,1,1,2,1,1,1,1,1,2,1,1,1,2,1,1,1,2],//  |
     [1,1,1,1,1,1,2,3,1,2,1,1,1,3,1,1,2,1,1,2,1],// |
    [1,1,1,2,1,1,1,1,1,1,3,1,1,2,1,1,1,1,1,1,1],//  |
     [1,1,1,1,1,2,1,3,2,1,1,1,1,3,1,2,1,1,2,1,1],// |
    [1,2,1,2,1,1,1,2,1,1,1,2,1,2,1,1,1,2,1,1,1],//  |
     [1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,2,2,1],// V
    [1,2,1,1,2,1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1],//  V
     [1,1,2,1,1,1,2,1,1,1,1,1,2,1,1,1,2,1,1,1,1],// V
    [2,1,2,1,1,1,1,1,2,1,2,1,2,1,1,1,1,1,2,1,1],//  V
     [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

var player = new mob(5,5,3,true,1,10,10,10,10,4,3,0);
var mobArray = new Array();
var itemArray = new Array();
//////-------------'------------------'-'-----       

itemArray.push(new item( 18, 18, 3, 10, 1));



//---------------------------------------------------


//load game board from level generator
//generate further regions
//Save regions to database


//-----------------------------------------movePlayer
function movePlayer(moveDirection) {
   
    if (moveDirection == hexDirections.NORTHWEST) {
        if ( player.x % 2 == 0) {
            player.x--;
           
             }
        else {
            player.x--;
            player.y--;
        }       
    } else if (moveDirection == hexDirections.NORTH) {
        player.y--;
    } else if (moveDirection == hexDirections.NORTHEAST) {
        if (player.x%2 == 0){
            player.x++;
           }else{
            player.x++;
            player.y--;
        
        }
    } else if (moveDirection == hexDirections.SOUTHEAST) {
        if ( player.x % 2 == 0) {
            player.x++;
            player.y++;
        }
        else {
            player.x++;
        }
    } else if (moveDirection == hexDirections.SOUTH) {
        player.y++;
    } else if (moveDirection == hexDirections.SOUTHWEST) {
        if ( player.x % 2 == 0) {
            player.x--;
            player.y++
        }
        else {
            player.x--;
            ;
        }
    }
    console.log('player is at location ' + player.x + ', ' + player.y)
}

function updateGame() {
    if (NWbuttonState){
        player.facing = hexDirections.NORTHWEST;
        movePlayer(hexDirections.NORTHWEST);
        NWbuttonState = false;
    }
    if (NbuttonState){
        player.facing = hexDirections.NORTH;
        movePlayer(hexDirections.NORTH);
        NWbuttonState = false;
    }
    if (NEbuttonState){
        player.facing = hexDirections.NORTHEAST;
        movePlayer(hexDirections.NORTHEAST);
        NWbuttonState = false;
    }
    if (SEbuttonState){
        player.facing = hexDirections.SOUTHEAST;
        movePlayer(hexDirections.SOUTHEAST);
        NWbuttonState = false;
    }
    if (SbuttonState){        
        player.facing = hexDirections.SOUTH;
        movePlayer(hexDirections.SOUTH);
        NWbuttonState = false;
    }
    if (SWbuttonState){
        player.facing = hexDirections.SOUTHWEST;
        movePlayer(hexDirections.SOUTHWEST);
        NWbuttonState = false;
    }
}