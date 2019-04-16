document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

var inputKeyboardAvailable = true;
var lastKeyInputFrame = 0;
var NWbuttonState = false;
var NbuttonState = false;
var NEbuttonState = false;
var SEbuttonState = false;
var SbuttonState = false;
var SWbuttonState = false;
var RightbuttonState = false;
var LeftbuttonState = false;

function keyDownHandler(e) {
    if (inputKeyboardAvailable){
        if(e.keyCode == 87 && NWbuttonState == false) {      //w key
            NWbuttonState = true;
        }
        else if(e.keyCode == 69 && NbuttonState == false) { //e key
            NbuttonState = true;
        }
        else if(e.keyCode == 82 && NEbuttonState == false) { //r key
            NEbuttonState = true;
        }
        else if(e.keyCode == 70 && SEbuttonState == false) { //f key
            SEbuttonState = true;
        }
        else if(e.keyCode == 68 && SbuttonState == false) { //d key
            SbuttonState = true;
        }
        else if(e.keyCode == 83 && SWbuttonState == false) { //s key
            SWbuttonState = true;
        }
        else if(e.keyCode == 39 && RightbuttonState == false) { //Right key
            console.log('Right')
            RightbuttonState = true;
        }
        else if(e.keyCode == 37 && LeftbuttonState == false) { //Right key
            console.log('Left')
            LeftbuttonState = true;
        }

        inputKeyboardAvailable = false;
        lastKeyInputFrame = frameCounter;
    }

}
  
//key release handler  
function keyUpHandler(e) {
    if(e.keyCode == 87) {      //w key
        NWbuttonState = false;
    }
    else if(e.keyCode == 69) { //e key
        NbuttonState = false;
    }
    else if(e.keyCode == 82) { //r key
        NEbuttonState = false;
    }
    else if(e.keyCode == 70) { //f key
        SEbuttonState = false;
    }
    else if(e.keyCode == 68) { //d key
        SbuttonState = false;
    }
    else if(e.keyCode == 83) { //s key
        SWbuttonState = false;
    }
    else if(e.keyCode == 39) { //Right key
        RightbuttonState = false;
    }
    else if(e.keyCode == 37) { //Right key
        LeftbuttonState = false;
    }
}

function keyWhipserer() {
    
    if ( frameCounter - lastKeyInputFrame >= 3){
        inputKeyboardAvailable = true;
    }
    if (NWbuttonState){
        player.facing = hexDirections.NORTHWEST;
        movePlayer((5 + player.facing + cameraFacing) % 6);
        NWbuttonState = false;
    }
    if (NbuttonState){
        player.facing = hexDirections.NORTH;
        movePlayer((5 + player.facing + cameraFacing) % 6);
        NbuttonState = false;
    }
    if (NEbuttonState){
        player.facing = hexDirections.NORTHEAST;
        movePlayer((5 + player.facing + cameraFacing) % 6);
        NEbuttonState = false;
    }
    if (SEbuttonState){
        player.facing = hexDirections.SOUTHEAST;
        movePlayer((5 + player.facing + cameraFacing) % 6);
        SEbuttonState = false;
    }
    if (SbuttonState){        
        player.facing = hexDirections.SOUTH;
        movePlayer((5 + player.facing + cameraFacing) % 6);
        SbuttonState = false;
    }
    if (SWbuttonState){
        player.facing = hexDirections.SOUTHWEST;
        movePlayer((5 + player.facing + cameraFacing) % 6);
        SWbuttonState = false;
    }
    if (RightbuttonState){
        console.log('Right');
        cameraFacing = (cameraFacing + 1) % 6;
        player.facing = (player.facing - 1) % 6;
        RightbuttonState = false;
    }
    if (LeftbuttonState){
        console.log('Left');
        cameraFacing =  (cameraFacing - 1) % 6;
        player.facing =  (player.facing + 1) % 6;
        if (cameraFacing < 0){
            cameraFacing = 5;
        }
        LeftbuttonState = false;
    }
}