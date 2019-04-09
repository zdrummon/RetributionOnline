//main.js is the main game loop


boardToHex(gameBoard);




// main game function
function game() {
    var logMode = false;
    logger('game()', 'game()', 'An itteration of the game() function has begun', logMode);
    
    //update variables and objects to further the gameplay
    //updateLogic();
    
    //check to see if the screen needs updating (time based)
    logger('game()', 'fpsLimiter()', 'check to see if the screen needs updating', logMode);
    if(fpsLimiter()) {
        logger('game()', 'fpsLimiter()', true, logMode);

        //draw the games graphics to the canvas
        updateCanvas();
    }   
    
    //main looper
    requestAnimationFrame(game);
    logger('game()', 'game()', 'An itteration of the game() function has ended', logMode);
}

//invoke the main game loop
game();