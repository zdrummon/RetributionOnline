var delta;
var fpsTrue = 10;
var fpsFinal = 1000/fpsTrue;
var lastTime = 0;
var frameCounter = 0;

var delayTimerInitialTime = 0;



function frameTimer() {
    var currentTime = (new Date()).getTime();
    delta = (currentTime - lastTime);

    if(delta > fpsFinal) {
        lastTime = currentTime - (delta % fpsFinal);
        frameCounter++;
        return true;
    } else {
        return false;
    }
}


//todo function delayTimer
function delayTimer(duration){
//if the time passed is greater than duration
    return true;
    //otherwise return false
}