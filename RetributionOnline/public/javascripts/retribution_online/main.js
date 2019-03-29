function game() {

    if(frameTimer()){
        updateScreen();
        updateGame();
    }

    //main looper
    requestAnimationFrame(game);
}

game();