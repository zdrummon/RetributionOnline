var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var testHex = document.getElementById("testHex");
var monkSprite = document.getElementById("monkSprite");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawHex(drawX, drawY) {
    ctx.drawImage(testHex, 0, 0, 32, 32, drawX, drawY, canvas.width / 7.5, canvas.height / 10);
}

function drawPlayer(drawX, drawY, facing, frameCount) {
    var frame = frameCount % 8;
    var mobScale = 32;
    var frameWidth = 99;
    var frameHeight = 89;
    if (canvas.width > canvas.height) {
        mobScale = canvas.height / 4;
    } else {
        mobScale = canvas.width / 4;
    }

    //what the hell is this scaling (is it the hexes or the guy?)
    ctx.drawImage(monkSprite, frameWidth * frame, frameHeight * facing, frameWidth, frameHeight, drawX - mobScale / 2.8, drawY - mobScale / 1.6, mobScale, mobScale);
}

function fillScreen(){
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#000000';
    ctx.fill();
    ctx.closePath();
}

function updateScreen() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fillScreen();
    for (i = 0; i < 11; i++) {
        for (j = 0;  j < 11; j++){
            var dx = j * canvas.width / 11;
            var dy = i * canvas.height / 11;
            if (gameBoard[i][j] == 1) { 
                if (j % 2 == 0){
                    dy = dy + canvas.height / 24;
                }
                drawHex(dx, dy);
            }
            
                drawPlayer(canvas.width / 2, canvas.height / 2, player.facing, frameCounter);
            
        }
    }
}
