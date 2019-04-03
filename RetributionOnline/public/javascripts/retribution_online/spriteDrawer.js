//spriteDrawer.js holds variables, functions, and objects for sprite rendering
var monkSprite = document.getElementById("monkSprite");
var brainSprite = document.getElementById("brainSprite");

function drawAnimatedSprite(spriteSheet,drawX, drawY, row, frameCount, totalRows, totalColumns, drawWidthMultiplier, drawHeightMultiplier) {
    var column = frameCount % totalColumns;
    var frameWidth = spriteSheet.width / totalColumns;
    var frameHeight = spriteSheet.height / totalRows;
    ctx.drawImage(spriteSheet, frameWidth * column, frameHeight * row, frameWidth, frameHeight, drawX, drawY, drawScale * drawWidthMultiplier, drawScale * drawHeightMultiplier);// drawX, drawY - drawScale / 4, drawScale, drawScale);
}



