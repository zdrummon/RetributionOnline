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