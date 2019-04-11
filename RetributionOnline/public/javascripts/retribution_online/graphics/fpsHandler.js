// frameHandler.js contains variables, functions,
var frameDelta;       //variable for holding the passing of time
var frameRate = 1000/10;  //fps
var lastFrame = 0;    //the last time that the screen was incremented
var frameCounter = 0; // this is used throughout the whole program

//framTimer results with false until fpsfinal miliseconds pass
function fpsLimiter() {
    var logmode = false;
    logger('fpsLimiter()', 'fpsLimiter()', 'the fpsLimiter() function has been called', logmode)

    // record the current time
    var currentTime = (new Date()).getTime();
    logger('fpsLimiter()', 'currentTime', currentTime, logmode);

    // compare current time to last time function called to make delta
    frameDelta = (currentTime - lastFrame);
    logger('fpsLimiter()', 'frameDelta', frameDelta, logmode);
    //if time passed (delta) is more than fpsfinal miliseconds
    if(frameDelta > frameRate) {
        logger('fpsLimiter()', 'frameDelta > frameRate', (frameDelta > frameRate), logmode);

        //set last time to adjusted current time
        lastFrame = currentTime - (frameDelta % frameRate);
        logger('fpsLimiter()', 'lastFrame', lastFrame, logmode)

        //increment the frame counter
        frameCounter++;
        logger('fpsLimiter()', 'frameCounter', frameCounter, logmode);

        //returning true updates screen and logic
        logger('fpsLimiter()', 'return', true, logmode);
        return true;

    } else {
        //returning false causes the game to wait
        logger('fpsLimiter()', 'return', false, logmode);
        return false;
    }
}