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
        drawAnimatedHex(waterHexSprite, drawX, drawY + drawScale/10, 0, frameCounter, 1, 8);
    }
    
}
function drawAnimatedHex(spriteSheet,drawX, drawY, row, frameCount, totalRows, totalColumns) {
    var column = frameCount % totalColumns;
    var frameWidth = spriteSheet.width / totalColumns;
    var frameHeight = spriteSheet.height / totalRows;
    ctx.drawImage(spriteSheet, frameWidth * column, frameHeight * row, frameWidth, frameHeight, drawX, drawY, drawScale, drawScale * 2);// drawX, drawY - drawScale / 4, drawScale, drawScale);
}