// frameHandler.js contains variables, functions,
var frameDelta;       //variable for holding the passing of time
var frameRate = 100;  //fps
var lastFrame = 0;    //the last time that the screen was incremented
var frameCounter = 0; // this is used throughout the whole program

//framTimer results with false until fpsfinal miliseconds pass
function fpsLimiter() {
    // record the current time
    var currentTime = (new Date()).getTime();

    // compare current time to last time function called to make delta
    frameDelta = (currentTime - lastFrame);

    //if time passed (delta) is more than fpsfinal miliseconds
    if(frameDelta > frameRate) {
        //set last time to adjusted current time
        lastFrame = currentTime - (frameDelta % frameRate);

        //increment the frame counter
        frameCounter++;

        //returning true updates screen and logic
        return true;
        
    } else {
        //returning false causes the game to wait
        return false;
    }
}