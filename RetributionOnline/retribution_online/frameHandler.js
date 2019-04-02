// frameHandler.js contains variables, functions,
var delta; //variable for holding the passing of time
var fpsTrue = 10;  // frames persec
var fpsFinal = 1000/fpsTrue; //milisec breakdown of fps
var lastTime = 0;    /// the last time that the screen was incremented
var frameCounter = 0;    // this is used throughout the whole program
//framTimer results with false until fpsfinal miliseconds pass
function frameTimer() {
    // record the current time
    var currentTime = (new Date()).getTime();
    // compare current time to last time function called to make delta
    delta = (currentTime - lastTime);
    //if time passed (delta) is more than fpsfinal miliseconds
    if(delta > fpsFinal) {
        //set last time to adjusted current time
        lastTime = currentTime - (delta % fpsFinal);
        //increment the frame counter
        frameCounter++;
        //returning true updates screen and logic
        return true;
    } else {
        //returning false causes the game to wait
        return false;
    }
}


//todo function delayTimer