//-----------------------------------------movePlayer
function movePlayer(moveDirection) {
    // check
    var neighborValue = checkNeighborHex(player.x + 5, player.y + 5, gameBoard)[moveDirection];
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