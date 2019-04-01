
function drawAnimatedSprite(spriteSheet,drawX, drawY, row, frameCount, totalRows, totalColumns) {
    var column = frameCount % totalColumns;
    var frameWidth = spriteSheet.width / totalColumns;
    var frameHeight = spriteSheet.height / totalRows;
    ctx.drawImage(spriteSheet, frameWidth * column, frameHeight * row, frameWidth, frameHeight, drawX, drawY, drawScale, drawScale);// drawX, drawY - drawScale / 4, drawScale, drawScale);
}