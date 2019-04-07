//main.js is the main game loop

// leave room for imports here

// main game function
function game() {

    //update variables and objects to further the gameplay
    updateGame();
    
    //check to see if the screen needs updating (time based)
    if(fpsLimiter()) {
        //draw the games graphics to the canvas
        updateScreen();
    }   
    
    //main looper
    requestAnimationFrame(game);
}

//invoke the main game loop
game();