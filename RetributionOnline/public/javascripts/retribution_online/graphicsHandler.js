var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var testHex = document.getElementById("testHex");
var dirtHex = document.getElementById("dirtHex");
var dirtHex2 = document.getElementById("dirtHex2");
var stoneHex = document.getElementById("stoneHex");
var waterHexSprite = document.getElementById("waterHexSprite");
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

var drawScale = canvas.width / 7.25;

function drawHex(drawX, drawY, hexTexture) {
    switch (hexTexture){
        case 1:
            ctx.drawImage(dirtHex, 0, 0, 32, 32, drawX, drawY, drawScale, drawScale);
            break;
        case 2:
            ctx.drawImage(dirtHex2, 0, 0, 32, 32, drawX, drawY, drawScale, drawScale);
            break;
        case 3:
            ctx.drawImage(stoneHex, 0, 0, 32, 32, drawX, drawY, drawScale, drawScale);
            break;
        case 4:
        drawWaterHex(drawX, drawY, frameCount);
    }
    
}

function drawPlayer(drawX, drawY, facing, frameCount) {
    var frame = frameCount % 8;
    var frameWidth = 100;
    var frameHeight = 100;
    //what the hell is this scaling (is it the hexes or the guy?)
    ctx.drawImage(monkSprite, frameWidth * frame, frameHeight * facing, frameWidth, frameHeight, drawX, drawY - drawScale / 4, drawScale, drawScale);// drawX, drawY - drawScale / 4, drawScale, drawScale);
}
function drawWaterHex(drawX, drawY, frameCount) {
    var frame = frameCount % 8;
    var frameWidth = 32;
    var frameHeight = 32;
    //what the hell is this scaling (is it the hexes or the guy?)
    ctx.drawImage(waterHexSprite, frameWidth * frame, 0, frameWidth, frameHeight, drawX, drawY, drawScale, drawScale);// drawX, drawY - drawScale / 4, drawScale, drawScale);
}

function fillScreen(){
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#000000';
    ctx.fill();
    ctx.closePath();
}

function printData(){
    var dx = x * canvas.width / 9.75 - drawScale * 0.675;
    var dy = y * canvas.height / 16 + drawScale * 1.5;
            
    ctx.font = "10px Arial";
    ctx.fillStyle = "red"; 
    if (x % 2 == 0){
        ctx.fillText(x + ', ' + y, dx + drawScale/4 , dy  + drawScale/4 + canvas.height / 32);
    }
    else{
        ctx.fillText(x + ', ' + y, dx + drawScale/4, dy  + drawScale/4);
    }
}

var firstPass = true;

function updateScreen() {
    drawScale = canvas.width / 7.25;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    setTo16x9();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fillScreen();
    for (y = 0; y < 11; y++) {
        for (x = 0;  x < 11; x++){
            var dx = x * canvas.width / 9.75 - drawScale * 0.675;
            var dy = y * canvas.height / 16 + drawScale * 1.5;
            if (x % 2 == 0){
                    dy = dy + canvas.height / 32;
            }
            ctx.font = "10px Arial";
            ctx.fillStyle = "red"; 
            // draw visible tiles-------------------------------------------------------===
            if (veiwport[y][x] >= 1) { 
                
                if ((x + player.x >= 0  && y + player.y >= 0 ) && (x + player.x <= 20  && y + player.y <= 20 )){
                    if(x % 2 == 0){
                        if (player.x % 2 == 0){
                        drawHex(dx, dy , gameBoard[x+player.x][y+player.y + 1]);
                        
                       // ctx.fillText((x) + ', ' + (y), dx + drawScale/4 , dy);
                        }
                        else{
                        drawHex(dx, dy , gameBoard[x+player.x][y+player.y])
                        //ctx.fillText((x) + ', ' + (y), dx + drawScale/4 , dy);
                        }
                    }

                    else{
                        drawHex(dx, dy , gameBoard[x+player.x][y+player.y])
                       // ctx.fillText((x+player.x) + ', ' + (y+player.y), dx + drawScale/4 , dy + drawScale/2);
                       // ctx.fillText((x) + ', ' + (y), dx + drawScale/4 , dy);
                    }

                }


            } 

            //-------------------------------------draw player--------
            if (veiwport[x][y] == 2) {
                drawPlayer(dx, dy, player.facing, frameCount);
            }


            if (firstPass) {
                console.log("an object at " + x + " " + y + " will be drawn with its top left corner at " + dx + " " + dy);
            }
            
            //printData();
        } 
    }
    firstPass = false;
   
}
