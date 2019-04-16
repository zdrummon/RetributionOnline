//-----------------------------------------movePlayer
function movePlayer(moveDirection) {
    // check it
    var neighborValue = 1; ////checkNeighborHex(player.x + 5, player.y + 5, gameBoard)[moveDirection];
    var playermobile = true;
     if ((playermobile == true ) && (neighborValue != 0 )){
        if (moveDirection == hexDirections.NORTHWEST) {
            if ( player.x & 1 == 1) {
                player.x--;
                player.y--;
                 }
            else {
                player.x--;
                
            }       
        } else if (moveDirection == hexDirections.NORTH) {
            player.y--;
        } else if (moveDirection == hexDirections.NORTHEAST) {
            if (player.x & 1 == 1){
                player.x++;
                player.y--;
               }else{
                player.x++;
                           
            }
            
        } else if (moveDirection == hexDirections.SOUTHEAST) {
            if ( player.x & 1 == 1) {
                player.x++;
            }
            else {
                player.y++;
                player.x++;
            }
        } else if (moveDirection == hexDirections.SOUTH) {
            player.y++;
        } else if (moveDirection == hexDirections.SOUTHWEST) {
            if ( player.x & 1 == 1) {
                player.x--;
            }
            else {
                player.x--;
                player.y++;
                
            }
        }
    }
    if ( player.x >= 0 && player.y >= 0){
    //player.z = heightMapArray[player.y][player.x];
    }
    gameEntityArray[player] = player;
}