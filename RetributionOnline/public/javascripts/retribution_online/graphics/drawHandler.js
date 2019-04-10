//drawHandler.j contains functions for organizing and drawing sprites from entities


//width of the game view
var gameViewRadius = 6;
//create a game entity for the camera to follow
var cameraFocus = new logicEntity();
// place the camera at 5,5 (the camera will move from there soon)
cameraFocus.x = 8;
cameraFocus.y = 8;
// make the cameras event type camera
cameraFocus.eventType = 'camera';
// make the cameraFocus id equal to the number of previous elements
cameraFocus.id = gameEntityArray.length;
// push the cameraFocus to the end of the array list
gameEntityArray.push(cameraFocus);
// save the id of the camera focus for finding it later
var cameraID = cameraFocus.id;






function entityToSprite(){
    cameraFocus.x = player.x;
    cameraFocus.y = player.y;
    
    //set logging conditions
    logMode = false;
    logger('entityToSprite()','entityToSprite', 'the entityToSprite function was called', logMode);
    
    //find the cameraFocus and make a buffer object for it
    let cameraFocusBuffer = gameEntityArray.find(entity => entity.id == cameraID);
    logger('entityToSprite()', 'cameraFocusBuffer', cameraFocusBuffer, logMode);

    // define the viewable distance from the cameraFocus buffer
    var viewXMin = cameraFocusBuffer.x - (gameViewRadius);
    var viewXMax = cameraFocusBuffer.x + (gameViewRadius);
    var viewYMin = cameraFocusBuffer.y - (gameViewRadius);
    var viewYMax = cameraFocusBuffer.y + (gameViewRadius);

    logger('entityToSprite()', 'viewXMin', viewXMin, logMode);
    logger('entityToSprite()', 'viewXMax', viewXMax, logMode);
    logger('entityToSprite()', 'viewYMin', viewYMin, logMode);
    logger('entityToSprite()', 'viewYMax', viewYMax, logMode);

    //create an array of the entities that are present in those limits
    var onScreenEntities =  gameEntityArray.filter(entity => {
        return (checkDistance(cameraFocusBuffer, entity) < gameViewRadius);
    });
    logger('entityToSprite()', 'onScreenEntities.length', onScreenEntities.length, logMode);

    
    onScreenEntities = sortByCoordinates(onScreenEntities);


    onScreenEntities.forEach(element => {
        if (element.texture != undefined){

            var dy = (element.y - cameraFocusBuffer.y) * (drawScale * 0.885) + canvas.height/2.5;
            var dx = (element.x - cameraFocusBuffer.x) * (drawScale * 0.725) + canvas.width/2;
            var dz = element.z * (drawScale / 3);
            var offset = 0;
            
            if (element.x % 2 == 0){
                offset = drawScale / 2;
            }
            if (cameraFocusBuffer.x & 1 == 1){
                offset = offset + drawScale / 2;
            }

            if (element.type == 'hex'){
                drawHex(dx, dy + offset - dz, element.material);
            }
            else if(element.type == 'player'){
                drawSprite(element.texture, dx, dy + offset - element.z * (drawScale / 3), player.facing, frameCounter, 6, 8, 1, 1);
            }
            //
        
        }
    });
}

