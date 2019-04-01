function drawHex(drawX, drawY, hexTexture) {
    switch (hexTexture){
        case 1:
            ctx.drawImage(dirtHex, 0, 0, 32, 32, drawX, drawY, drawScale, drawScale);
            break;
        case 2:
            ctx.drawImage(dirtHex2, 0, 0, 32, 32, drawX, drawY, drawScale, drawScale);
            break;
        case 3:
            ctx.drawImage(stoneHex, 0, 0, 32, 32, drawX, drawY , drawScale, drawScale);
            break;
        case 4:
        drawAnimatedSprite(waterHexSprite, drawX, drawY, 0, frameCounter, 1, 8);
    }
    
}