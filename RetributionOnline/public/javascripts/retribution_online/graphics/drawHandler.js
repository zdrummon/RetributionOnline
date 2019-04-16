//drawHandler.j contains functions for organizing and drawing sprites from entities


//width of the game view
var gameViewRadius = 6;
//create a game entity for the camera to follow
var cameraFocus = new gameEntity(0,0,0,0, 'camera');
// give the cameraFocus a facing angle
cameraFocus.facing = 1;
// push the cameraFocus to the end of the array list
gameEntityArray.push(cameraFocus);
// save the id of the camera focus for finding it later
var cameraID = cameraFocus.id;

var cameraFacing = 0;




function entityToSprite(){
    cameraFocus.x = player.x;
    cameraFocus.y = player.y;
    cameraFocus.facing = cameraFacing;
    
    //set logging conditions
    logMode = false;
    logger('entityToSprite()','entityToSprite', 'the entityToSprite function was called', logMode);
    
    //find the cameraFocus and make a buffer object for it
    let cameraFocusBuffer = gameEntityArray.find(entity => entity.id == cameraID);
    logger('entityToSprite()', 'cameraFocusBuffer', cameraFocusBuffer, logMode);


    //create an array of the entities that are present in those limits
    var onScreenEntities =  gameEntityArray.filter(entity => {
        return (checkDistance(cameraFocusBuffer, entity) < gameViewRadius);
    });
    logger('entityToSprite()', 'onScreenEntities.length', onScreenEntities.length, logMode);
    
    
    onScreenEntities = sortByCoordinates(onScreenEntities, cameraFocusBuffer.facing);

    //onScreenEntities = rotateHexes(onScreenEntities, 1);    // positive is clockwise negative is countercloxkwise


    onScreenEntities.forEach(element => {
        if (element.texture != undefined){
                    var dy = (rotateHex(element, cameraFocus, cameraFocus.facing + 5)[1] - cameraFocusBuffer.y) * (drawScale * 0.885) + canvas.height/2.5;
                    var dx = (rotateHex(element, cameraFocus, cameraFocus.facing + 5)[0] - cameraFocusBuffer.x) * (drawScale * 0.725) + canvas.width/2;
                    var height = element.height * (drawScale / 3);
                    var offset = 0;

                    if (rotateHex(element, cameraFocus, cameraFocus.facing + 5)[0] % 2 == 0){
                        offset = drawScale / 2;
                    }
                    if (cameraFocusBuffer.x & 1 == 1){
                        offset = offset + drawScale / 2;
                    }

                    if (element.type == 'hex'){
                        drawHex(dx, dy + offset - height, element.material);
                    }
                    else if(element.type == 'player'){
                        drawSprite(element.texture, dx, dy + offset - element.height * (drawScale / 3), (7 + player.facing - cameraFocusBuffer.facing) % 6, frameCounter, 6, 8, 1, 1);
                    }

        }
    });
}

