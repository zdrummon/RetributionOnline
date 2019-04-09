//spriteDrawer.js holds variables, functions, and objects for sprite rendering
var monkSprite = document.getElementById("monkSprite");
var brainSprite = document.getElementById("brainSprite");
var testHex = document.getElementById("testHex");
var dirtHex = document.getElementById("dirtHex");
var dirtHex2 = document.getElementById("dirtHex2");
var stoneHex = document.getElementById("stoneHex");
var waterHexSprite = document.getElementById("waterHexSprite");
// function for drawing staic hex image
// takes in xy coordinates and an image element and draws them to scale on the requested pixel location
var drawScale = 32;
function drawHex(drawX, drawY, hexTexture) {
    switch (hexTexture){
        case 1:
            ctx.drawImage(dirtHex, 0, 0, 32, 64, drawX, drawY, drawScale, drawScale * 2);
            break;
        case 2:
            ctx.drawImage(dirtHex2, 0, 0, 32, 64, drawX, drawY, drawScale, drawScale * 2);
            break;
        case 3:
            ctx.drawImage(stoneHex, 0, 0, 32, 64, drawX, drawY , drawScale, drawScale * 2);
            break;
        case 4:
        drawSprite(waterHexSprite, drawX, drawY + drawScale/10, 0, frameCounter, 1, 8, 1, 2);
    }
    
}

function drawSprite(spriteSheet,drawX, drawY, row, frameCount, totalRows, totalColumns, drawWidthMultiplier, drawHeightMultiplier) {
    var column = frameCount % totalColumns;
    var frameWidth = spriteSheet.width / totalColumns;
    var frameHeight = spriteSheet.height / totalRows;
    ctx.drawImage(spriteSheet, frameWidth * column, frameHeight * row, frameWidth, frameHeight, drawX, drawY, drawScale * drawWidthMultiplier, drawScale * drawHeightMultiplier);// drawX, drawY - drawScale / 4, drawScale, drawScale);
}
