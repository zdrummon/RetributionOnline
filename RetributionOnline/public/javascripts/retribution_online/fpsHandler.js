//global total frame counter
export var frameCount = 0;
//global fps default
var fpsLimit = 100;
//global last frame timestamp
var lastFrameTime = 0;

//limits the maximum frames per second
export function fpsLimiter() {
    //set deltaTimeTime
    var currentTime = (new Date()).getTime();
    var deltaTime = (currentTime - lastFrameTime);

    /* UNDER CONSTRUCTION set the maximum frames per second to user configuration
    if ((fpsLimit != fpsUserConfig) && fpsToggleConfig) {
        fpsLimit = fpsUserConfig;
    }*/

    //set value of fpsLimiter to true if under fpsLimit
    if(deltaTime > fpsLimit) {
        //store current frame timestamp as lastFrameTime
        lastFrameTime = currentTime - (deltaTime % fpsLimit);
        frameCount++;
        return true;
    } else {
        return false;
    }
}
