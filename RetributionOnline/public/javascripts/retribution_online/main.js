//main.js is the main game loop

// main game function
function game() {

    //update variables and objects to further the gameplay
    //updateLogic();
    
    //check to see if the screen needs updating (time based)
    if(fpsLimiter()) {
        
        //draw the games graphics to the canvas
        updateCanvas();
    }   
    
    //main looper
    requestAnimationFrame(game);
}

//invoke the main game loop
game();