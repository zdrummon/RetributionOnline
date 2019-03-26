var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var testHex = document.getElementById("testHex");
var monkSprite = document.getElementById("monkSprite");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/*
var screenCenterX;
var screenCenterY;
screenCenterX = window.innerWidth / 2;
screenCenterY = window.innerHeight / 2;
*/

function setTo16x9() {
    if (canvas.width / 9 > canvas.height / 16) {
        canvas.width = window.innerHeight * 9/16;
        canvas.height = window.innerHeight;
        
    } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerWidth * 16/9;
    }    
}

var drawScale = canvas.width / 7.5;

function drawHex(drawX, drawY) {
    ctx.drawImage(testHex, 0, 0, 32, 32, drawX, drawY, drawScale, drawScale);
}

function drawPlayer(drawX, drawY, facing, frameCount) {
    var frame = frameCount % 8;
    var frameWidth = 100;
    var frameHeight = 100;
    //what the hell is this scaling (is it the hexes or the guy?)
    ctx.drawImage(monkSprite, frameWidth * frame, frameHeight * facing, frameWidth, frameHeight, drawX - drawScale / 2, drawY - drawScale / 2, drawScale, drawScale);
}

function fillScreen(){
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#000000';
    ctx.fill();
    ctx.closePath();
}

function printData(){
    var dx = (j * canvas.width / 9) + canvas.width / 18;
    var dy = (i * canvas.height / 9) + canvas.height / 18;
    ctx.font = "10px Arial";
    ctx.fillStyle = "red"; 
    if (j % 2 == 0){
        ctx.fillText(j + ', ' + i, dx, dy+ canvas.height / 24);
    }
    else{
        ctx.fillText(j + ', ' + i, dx, dy);
    }
}

var firstPass = true;

function updateScreen() {
    drawScale = canvas.width / 7.5;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    setTo16x9();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fillScreen();
    for (i = 0; i < 11; i++) {
        for (j = 0;  j < 11; j++){
            var dx = j * canvas.width / 9.5 - drawScale * 0.75;
            var dy = i * canvas.height / 16;
            
            if (gameBoard[i][j] == 1) { 
                if (j % 2 == 0){
                    dy = dy + canvas.height / 32;
                }
                drawHex(dx, dy);
            } else if (gameBoard[i][j] == 2) {
                drawPlayer(dx, dy, player.facing, frameCounter);
            }
            if (firstPass) {
                console.log("an object at " + j + " " + i + " will be drawn with its top left corner at " + dx + " " + dy);
            }
            //printData();
        }
    }
    firstPass = false;
}
