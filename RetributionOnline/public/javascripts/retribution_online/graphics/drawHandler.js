//drawHandler.j contains functions for organizing and drawing sprites from entities


//width of the game veiw
var gameViewRadius = 33;

//create a game entity for the camera to follow
var cameraFocus = new logicEntity();

// place the camera at 5,5 (the camera will move from there soon)
cameraFocus.x = 0;
cameraFocus.y = 0;
// make the cameras event type camera
cameraFocus.eventType = 'camera';
// make the cameraFocus id equal to the number of previous elements
cameraFocus.id = gameEntityArray.length;
// push the cameraFocus to the end of the array list
gameEntityArray.push(cameraFocus);
// save the id of the camera focus for finding it later
var cameraID = cameraFocus.id;



function entityToSprite(){
    //set logging conditions
    logMode = false;
    logger('entityToSprite()','entityToSprite', 'the entityToSprite function was called', logMode);
    
    //find the cameraFocus and make a buffer object for it
    let cameraFocusBuffer = gameEntityArray.find(entity => entity.id == cameraID);
    logger('entityToSprite()', 'cameraFocusBuffer', cameraFocusBuffer, logMode);

    // define the veiwable distance from the cameraFocus buffer
    var veiwXMin = cameraFocusBuffer.x - Math.floor(gameViewRadius/2);
    var veiwXMax = cameraFocusBuffer.x + Math.floor(gameViewRadius/2);
    var veiwYMin = cameraFocusBuffer.y - Math.floor(gameViewRadius/2);
    var veiwYMax = cameraFocusBuffer.y + Math.floor(gameViewRadius/2);
    logger('entityToSprite()', 'veiwXMin', veiwXMin, logMode);
    logger('entityToSprite()', 'veiwXMax', veiwXMax, logMode);
    logger('entityToSprite()', 'veiwYMin', veiwYMin, logMode);
    logger('entityToSprite()', 'veiwYMax', veiwYMax, logMode);

    //create an array of the entities that are present in those limits
    var onScreenEntities =  gameEntityArray.filter(function(entity) {
        return ((entity.x >= veiwXMin && entity.x <= veiwXMax) && (entity.y >= veiwYMin && entity.y <= veiwYMax));
    });
    logger('entityToSprite()', 'onScreenEntities.length', onScreenEntities.length, logMode);


    onScreenEntities.forEach(element => {
        if (element.texture != undefined){
            var offset = 0;
            if (element.x % 2 == 0){
                offset = 16;
            }
            drawSprite(element.texture, (element.x - cameraFocusBuffer.x) * 32  + 100, (element.y - cameraFocusBuffer.y) * 32 + offset + 100, 0, 0, 1, 1, 1, 2);
           
        }
    });
}

