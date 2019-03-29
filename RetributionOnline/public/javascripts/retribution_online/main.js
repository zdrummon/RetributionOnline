//main game loop
function game() {

    //update game if enough time has passed since last frame
    if(fpsLimiter()){
        updateScreen();
        updateGame();
    }

    //main recursion call
    requestAnimationFrame(game);
}

//start game loop
game();