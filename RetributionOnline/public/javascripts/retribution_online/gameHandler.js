//
//
var player = new mob(5,5,3,true,1,10,10,10,10,4,3,0);
var mobArray = new Array();
var itemArray = new Array();
//////-------------'------------------'-'-----       
//-----------------------------------------movePlayer
function movePlayer(moveDirection) {
    var neighborValue = checkNeighborHex(player.x + 5, player.y + 5, gameBoard, moveDirection);
     if ((neighborValue >= 0 ) && (neighborValue != 4 )){
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
    else{
        console.log('player cannot move there')
    }
    
}

function updateGame() {
    
    if ( frameCounter - lastKeyInputFrame >= 7){
        inputKeyboardAvailable = true;
    }
    if (NWbuttonState){
        player.facing = hexDirections.NORTHWEST;
        movePlayer(hexDirections.NORTHWEST);
        NWbuttonState = false;
    }
    if (NbuttonState){
        player.facing = hexDirections.NORTH;
        movePlayer(hexDirections.NORTH);
        NbuttonState = false;
    }
    if (NEbuttonState){
        player.facing = hexDirections.NORTHEAST;
        movePlayer(hexDirections.NORTHEAST);
        NEbuttonState = false;
    }
    if (SEbuttonState){
        player.facing = hexDirections.SOUTHEAST;
        movePlayer(hexDirections.SOUTHEAST);
        SEbuttonState = false;
    }
    if (SbuttonState){        
        player.facing = hexDirections.SOUTH;
        movePlayer(hexDirections.SOUTH);
        SbuttonState = false;
    }
    if (SWbuttonState){
        player.facing = hexDirections.SOUTHWEST;
        movePlayer(hexDirections.SOUTHWEST);
        SWbuttonState = false;
    }
}