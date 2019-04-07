


function logger(logLocation, logValue, logDescription, logMode) {
    var currentTime = (new Date()).toUTCString( );

    if(logMode) {
        console.log("   " + currentTime + "   |   frame " + frameCounter + "   |   " + logLocation + '   |   ' + logValue + " " + logDescription);
    }
}