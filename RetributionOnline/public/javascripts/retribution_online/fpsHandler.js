//global total frame counter
var frameCount = 0;
//global fps default
var fpsLimit = 100;
//global last frame timestamp
var lastTime = 0;

//limits the maximum frames per second
function fpsLimiter() {
    //set deltaTimeTime
    var currentTime = (new Date()).getTime();
    var deltaTime = (currentTime - lastTime);

    /* set the maximum frames per second to user configuration
    if ((fpsLimit != fpsUserConfig) && fpsToggleConfig) {
        fpsLimit = fpsUserConfig;
    }*/

    //set value of fpsLimiter to true if under limit to allow another frame
    if(deltaTime > fpsLimit) {
        lastTime = currentTime - (deltaTime % fpsLimit);
        frameCount++;
        return true;
    } else {
        return false;
    }
}
