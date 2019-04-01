//main.js is the launching javascript file for Retribution Online


// leave room for inports here
function game() {
    //check to see if the screen needs updating (time based)
    if(frameTimer()){
        updateScreen();
        updateGame();
    }

    //main looper
    requestAnimationFrame(game);
}

game();