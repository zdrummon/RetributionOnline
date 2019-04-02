function keyWhipserer() {
    
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