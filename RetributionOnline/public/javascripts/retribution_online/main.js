//main.js is the launching javascript file for Retribution Online

// leave room for inports here

// main game function
function game() {

    //update the state of various inputs and interfaces
    //updateInputs();

    //syncs and retains connections with remote game server
    //updateConnections();
 
    //update variables and objects to further the gameplay
    updateGame();
    
    //fetch and control audio cues, timers, and playback
    //updateAudio();

    //check to see if the screen needs updating (time based)
    if(frameTimer()){
        //draw the games graphics to the canvas
        updateScreen();
    }   
    
    //main looper
    requestAnimationFrame(game);
}

//invoke the main game loop
game();