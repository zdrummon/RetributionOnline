/*
LIST INPUTS AND OUTPUTS HERE??
*/

function main() {
    //what do these do?
    boardToHex(gameBoard, heightMapArray);
    player.texture = monkSprite;
    player.facing = hexDirections.SOUTH;
    player.id = gameEntityArray.length;
    gameEntityArray.push(player);

    //core game loop
    function game() {
        var logMode = false;
        logger('game()', 'game()', 'logic updating', logMode);
        updateLogic();

        if(fpsLimiter()) {
            logger('game()', 'fpsLimiter()', 'frame updating', logMode);
            updateCanvas();
        }   

        requestAnimationFrame(game);
    }

    game();
}