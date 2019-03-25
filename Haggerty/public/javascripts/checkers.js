//checkers.js is for checkers logic
//canvas variables
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
//image variables

//logic variables
var boardArray = new Array(64);  // 0 is empty, positive is black, negative is red
var turnCounter = 0;
var gameState = 0;
var xyCoordinates = {x:0,y:0};

//drawing functions
function drawBoard(){
    for (i = 0 ; i <= 7 ; i++){
        for (j = 0; j <= 7; j++){
            if ((i+j)%2 === 0){
                ctx.fillStyle = "#4f4031";
                ctx.fillRect(i*50, j*50, (i+1)*50, (j+1)*50);
            }
            else{
                ctx.fillStyle = "#a07245";
                ctx.fillRect(i*50, j*50, (i+1)*50, (j+1)*50);
            }
        }
    }
}

function drawRedPuck(x,y){
    ctx.beginPath();
    ctx.arc(x+25,y+25,25,0,2*Math.PI,false);
    ctx.fillStyle='#FF0000';
    ctx.fill();
}

function drawBlackPuck(x,y){
    ctx.beginPath();
    ctx.arc(x+25,y+25,25,0,2*Math.PI,false);
    ctx.fillStyle='#000011';
    ctx.fill();
}

function updateScreen(){
    drawBoard();
    for (i = 0; i <= 63; i++){
        if (boardArray[i] === -1){
            drawRedPuck(indexToCoordinates(i).x*50,indexToCoordinates(i).y*50);
        }
        else if (boardArray[i] === 1){
            drawBlackPuck(indexToCoordinates(i).x*50,indexToCoordinates(i).y*50);
        }
    }
}

//logic functions
function initializeGameSession(){
    boardArray.fill(0);
    for (i = 0; i <= 63 ; i+=1){
        if ((i%2 === 0) && i <= 6){
            boardArray[i] = 1;
        }
        else if (((i+1)%2 === 0) && (i >= 9 && i <= 15)){
            boardArray[i] = 1;
        }
        else if (((i)%2 === 0) && (i >= 16 && i <= 22)){
            boardArray[i] = 1;
        }
        //place the red pucks
        else if (((i+1)%2 === 0) && (i >= 41 && i <= 47)){
            boardArray[i] = -1;
        }
        else if (((i)%2 === 0) && (i >= 48 && i <= 54)){
            boardArray[i] = -1;
        }
        else if (((i+1)%2 === 0) && i >= 56){
            boardArray[i] = -1;
        }
    }
    updateScreen();
}


function indexToCoordinates(indexNumber){
    var coordinates = {x:0,y:0};
    coordinates.x = indexNumber % 8;
    coordinates.y = (indexNumber - coordinates.x)/8;
    return coordinates;
}

function coordinatesToIndex(x,y){
    index = y*8 + x;
    return index;
}

function checkRegion(x,y){
    index = coordinatesToIndex(Math.floor(x/50), Math.floor(y/50));
    return boardArray[index];
}

function displayClickedType(clickedType){
    var informationDisplay = "";
    if (clickedType === -1){
        informationDisplay = "you clicked on a red puck";
    }
    else if (clickedType === 0){
        informationDisplay = "you clicked on an empty tile";
    }
    else if (clickedType === 1){
        informationDisplay = "you clicked on a black puck";
    }
    
    document.getElementById("informationDisplay").innerHTML = informationDisplay;

}

function updateLogic(){
    var mouseX = event.clientX;     
    var mouseY = event.clientY;
    var clickedType = checkRegion(mouseX,mouseY);
    displayClickedType(clickedType)  
    updateScreen();
}

//event functions
window.onload = function() {
    initializeGameSession();
}
