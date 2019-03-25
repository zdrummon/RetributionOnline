// cave explorer v001
// 
//
//Imports---------------------------------------------------------

//logic variables---------------------------------------------------------------

var mainLoopItteration = 0;

const NWbutton = document.getElementById('northWestButton');
const Nbutton = document.getElementById('northButton');
const NEbutton = document.getElementById('northEastButton');
const SEbutton = document.getElementById('southEastButton');
const Sbutton = document.getElementById('southButton');
const SWbutton = document.getElementById('southWestButton');


NWbutton.addEventListener('click', NWbuttonfunction);
Nbutton.addEventListener('click', Nbuttonfunction);
NEbutton.addEventListener('click', NEbuttonfunction);
SEbutton.addEventListener('click', SEbuttonfunction);
Sbutton.addEventListener('click', Sbuttonfunction);
SWbutton.addEventListener('click', SWbuttonfunction);

var NWbuttonState = false;
var NbuttonState = false;
var NEbuttonState = false;
var SEbuttonState = false;
var SbuttonState = false;
var SWbuttonState = false;

//Graphics variables------------------------------------------------------
var c = document.getElementById("myCanvas"),
ctx = c.getContext("2d"),
dirtHexImg = document.getElementById("dirtHex"),
rockHexImg = document.getElementById("rockHex"),
rockHexWallImg = document.getElementById("rockHexWall"),
redHexOutlineImg = document.getElementById("redHexOutline"),
monkSprite = document.getElementById("monk"),
fps = 1000/10,
lastTime = (new Date()).getTime(),
currentTime = 0,
delta = 0;

//Map variables--------------------------------------------------------
var mapMaxX = 8;
var mapMaxY = 45;
const mapArrayLength = mapMaxX * mapMaxY;
var mapArray = new Array(mapArrayLength);
mapArray.fill(0);
var mapArrayBuffer = new Array(mapArrayLength);
mapArrayBuffer.fill(0);
//mob variables---------------------------------------------------------------
var player = new mob(true,9,10,10,10,10,10,10,0,hexDirections.NORTHEAST,0,0);
//drawing functions---------------------------------------------------------

var dX1 = 0;
var dY1 = 0;
var dXOffset = 25;
var dYOffset = 10;
//tiles
function drawDirtHex(drawX1,drawY1) {
    ctx.drawImage(dirtHexImg, drawX1, drawY1);
}
function drawRockHex(drawX1,drawY1) {
    ctx.drawImage(rockHexImg, drawX1, drawY1);
}
function drawRockHexWall(drawX1,drawY1) {
    ctx.drawImage(rockHexWallImg, drawX1, drawY1-64);
}
function drawRedHexOutline(drawX1,drawY1) {
    ctx.drawImage(redHexOutlineImg, drawX1, drawY1);
}
function drawLabeledHex(drawX1,drawY1,indexA){
    drawRedHexOutline(drawX1,drawY1);
    ctx.fillText('H#' + indexA + '=' + mapArray[indexA], drawX1+10, drawY1+32);
    ctx.fillText(indexToCoordinates(indexA,mapMaxX)[0]+ ', ' + indexToCoordinates(indexA,mapMaxX)[1], drawX1+20, drawY1+42);
}
//mobs
function drawPlayer(drawX1,drawY1,facing,loopcount) {
    var frame = loopcount%8;
    ctx.drawImage(monkSprite,99*frame,89*facing,89,99,drawX1, drawY1,88,99);
}

function updateScreen(){
    ctx.clearRect(0, 0, 800, 600)
    ctx.font = "10px Arial";
    ctx.fillStyle = "red";                
    for (i = 0; i < mapMaxY; i++) {
        dY1 = (i * 11) + dYOffset
        //--------------------Map Tiles---------------------------------
        for (j = 0;  j < mapMaxX; j++){
            dX1 = j * 90 + ((i%2)*45) + dXOffset
            var currentIndex = mapMaxX*(i) + j;
            var currentLocationX = indexToCoordinates(currentIndex,mapMaxX)[0];
            var currentLocationY = indexToCoordinates(currentIndex,mapMaxX)[1];
            if (mapArray[currentIndex] === hexType.floor){
                drawDirtHex(dX1,dY1);
           
            }
            else if (mapArray[currentIndex] === hexType.wall){
                drawRockHexWall(dX1,dY1);
            }
            //--------------------Mobs---------------------------------
            if ((player.x === currentLocationX) && (player.y === currentLocationY)){
                drawPlayer(dX1-17,dY1-40, player.facing,mainLoopItteration);
            }
        }
        
        
    }
}

//mouse handling---------------------------------------------------------

const leftMouseButton = 0;
const middleMouseButton = 1;
const rightMouseButton = 2;

var mouseOnCanvas = false;

var lastClickedLocation = {
    x:-1,
    y:-1,
    button:-1
};

function mouseClicked(event){
    switch (event.button){
        case leftMouseButton:
            lastClickedLocation.x = event.clientX;
            lastClickedLocation.y = event.clientY;
            lastClickedLocation.button = leftMouseButton;
            break;   
        case middleMouseButton:
            lastClickedLocation.x = event.clientX;
            lastClickedLocation.y = event.clientY;
            lastClickedLocation.button = middleMouseButton;
            break;   
        case rightMouseButton:
            lastClickedLocation.x = event.clientX;
            lastClickedLocation.y = event.clientY;
            lastClickedLocation.button = rightMouseButton;
            break;   
        default:
            lastClickedLocation.button = -1;
            break;
    }
    
    updateScreen();
}

//keyboard input---------------------------------------------
//-----under 
// ---------construction

//event handling---------------------------------------------------------

window.onload = function() {
    
    updateScreen();
}

window.requestAnimationFrame(mainGameLoop);

//button functions-------------------------------------------------------
function NWbuttonfunction(){NWbuttonState = true;}
function  Nbuttonfunction(){NbuttonState = true;}
function NEbuttonfunction(){NEbuttonState = true;}
function SEbuttonfunction(){SEbuttonState = true;}
function  Sbuttonfunction(){SbuttonState = true;}
function SWbuttonfunction(){SWbuttonState = true;}


/////main game logic---------------------------------------------------------

function mainGameLoop(){

    currentTime = (new Date()).getTime();
    delta = (currentTime-lastTime);

    if(delta > fps) {
        updateScreen();
        updateLogic();
        lastTime = currentTime - (delta % fps);
        mainLoopItteration++;
        
    }
    window.requestAnimationFrame(mainGameLoop);
}

function updateLogic(){

    if (NWbuttonState){
        player.facing = hexDirections.NORTHWEST;
        player.x = player.x - 1;
        player.y = player.y - 1;
        NWbuttonState = false;
    }
    if (NbuttonState){
        player.facing = hexDirections.NORTH;
        player.y = player.y - 2;
        NbuttonState = false;
    }
    if (NEbuttonState){
        player.facing = hexDirections.NORTHEAST;
        player.x = player.x + 1;
        player.y = player.y - 1;
        NEbuttonState = false;
    }
    if (SEbuttonState){
        player.facing = hexDirections.SOUTHEAST
        player.x = player.x + 1;
        player.y = player.y + 1;
        SEbuttonState = false;
    }
    if (SbuttonState){        
        player.facing = hexDirections.SOUTH;
        player.y = player.y + 2;
        SbuttonState = false;
    }
    if (SWbuttonState){
        player.facing = hexDirections.SOUTHWEST;
        player.x = player.x -1;
        player.y = player.y + 1;
        SWbuttonState = false;
    }
}


