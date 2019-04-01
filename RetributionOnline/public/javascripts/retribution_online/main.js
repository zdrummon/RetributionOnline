//main.js is the launching javascript file for Retribution Online


// leave room for inports here

function game() {
    if(frameTimer()){
        updateScreen();
        updateGame();
    }

    //main looper
    requestAnimationFrame(game);
}

game();