//logHandler.js has the functions for console logging
// log location tells the point in the code where logging occurs
// log value is the name of the variable being logged
// log description is the core logg messagr
// logmode is a boolean that is used to determine if the log should print
function logger(logLocation, logValue, logDescription, logMode) {
    // save the time in the form of a variable
    var currentTime = (new Date()).toUTCString( );
    //if the logmode is a true
    if(logMode) {
        console.log("   " + currentTime + "   |   frame " + frameCounter + "   |   " + logLocation + '   |   ' + logValue + " " + logDescription);
    }
}