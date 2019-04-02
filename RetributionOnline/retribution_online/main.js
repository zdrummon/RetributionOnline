//main.js is the launching javascript file for Retribution Online

// leave room for inports here

// main game function
function game() {
    //check to see if the screen needs updating (time based)
    if(frameTimer()){
        //draw the games graphics to the canvas
        updateScreen();
        //update variables and objects to further the game narrative
        updateGame();
    }
    //main looper
    requestAnimationFrame(game);
}
//invoke the main game loop
game();