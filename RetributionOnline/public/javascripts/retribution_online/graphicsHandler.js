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

function fillScreen(){
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#000000';
    ctx.fill();
    ctx.closePath();
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
        // draw visible odd tiles-------------------------------------------------------===
        for (x = 0;  x < 11; x++){
            var dy = y * canvas.height / 16 + drawScale * 1.5;
            var dx = x * canvas.width / 9.75 - drawScale * 0.675;
            
            if (gameVeiw[x][y] >= 1) { 
                if ((x + player.x >= 0  && y + player.y >= 0 ) && (x + player.x <= 20  && y + player.y <= 20 )){
                    if(x % 2 != 0){
                        drawHex(dx, dy , gameBoard[x+player.x][y+player.y]);
                        
                    }
                }
            } 
        }
        //draw visible even tiles-------------------------------------------------------===
        for (x = 0;  x < 11; x++){
            var dy = y * canvas.height / 16 + drawScale * 1.5;
            var dx = x * canvas.width / 9.75 - drawScale * 0.675;
                dy = dy + canvas.height / 32;
            if (gameVeiw[x][y] >= 1) { 
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
                       
                    }
                }
            } 
        } 
        
            //-------------------------------------draw player--------
            for (x = 0;  x < 11; x++){
                var dy = y * canvas.height / 16 + drawScale * 1.5;
                var dx = x * canvas.width / 9.75 - drawScale * 0.675;
                if (gameVeiw[x][y] == 2) {
                drawAnimatedSprite(monkSprite, dx, (dy - drawScale/4), player.facing, frameCounter, 6, 8);
                }
            } 
        }
    }

