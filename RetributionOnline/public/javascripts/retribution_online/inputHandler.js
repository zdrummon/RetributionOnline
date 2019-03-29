document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

var NWbuttonState = false;
var NbuttonState = false;
var NEbuttonState = false;
var SEbuttonState = false;
var SbuttonState = false;
var SWbuttonState = false;

function keyDownHandler(e) {
    if(e.keyCode == 87) {      //w key
        NWbuttonState = true;
        
    }
    else if(e.keyCode == 69) { //e key
        NbuttonState = true;
    }
    else if(e.keyCode == 82) { //r key
        NEbuttonState = true;
    }
    else if(e.keyCode == 70) { //f key
        SEbuttonState = true;
    }
    else if(e.keyCode == 68) { //d key
        SbuttonState = true;
    }
    else if(e.keyCode == 83) { //s key
        SWbuttonState = true;
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
}

function NWbuttonfunction(){NWbuttonState = true;}
function  Nbuttonfunction(){NbuttonState = true;}
function NEbuttonfunction(){NEbuttonState = true;}
function SEbuttonfunction(){SEbuttonState = true;}
function  Sbuttonfunction(){SbuttonState = true;}
function SWbuttonfunction(){SWbuttonState = true;}