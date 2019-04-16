//
const hexDirections = {
    NORTHWEST:0,
    NORTH:1,
    NORTHEAST:2,
    SOUTHEAST:3,
    SOUTH:4,
    SOUTHWEST:5
}

var gameBoard = [
    [4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 2, 3, 1, 2, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0],
    [0, 0, 1, 2, 4, 2, 2, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0],
    [0, 0, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 2, 2, 3, 3, 3, 3, 2, 2, 2, 3, 1, 0, 0],
    [0, 0, 1, 2, 2, 3, 4, 3, 3, 3, 4, 3, 3, 3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 2, 2, 2, 2, 2, 0, 0],
    [0, 0, 2, 3, 3, 3, 4, 3, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 3, 1, 0, 0],
    [0, 0, 1, 2, 3, 3, 4, 4, 4, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 2, 2, 3, 3, 2, 0, 0],
    [0, 0, 2, 3, 3, 4, 4, 4, 3, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 1, 0, 0],
    [0, 0, 1, 2, 3, 3, 2, 2, 2, 3, 3, 4, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 0, 0],
    [0, 0, 2, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 0, 0],
    [0, 0, 1, 2, 3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 2, 1, 0, 0],
    [0, 0, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 2, 2, 2, 1, 0, 0],
    [0, 0, 1, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 1, 0, 0],
    [0, 0, 1, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 1, 0, 0],
    [0, 0, 1, 2, 2, 3, 3, 3, 2, 2, 2, 3, 2, 3, 3, 3, 2, 2, 2, 3, 3, 2, 2, 2, 2, 2, 3, 2, 0, 0],
    [0, 0, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 3, 3, 3, 3, 2, 2, 2, 3, 3, 1, 0, 0],
    [0, 0, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 3, 3, 3, 2, 2, 2, 2, 3, 2, 0, 0],
    [0, 0, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 2, 2, 2, 2, 3, 1, 0, 0],
    [0, 0, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 3, 3, 2, 2, 2, 2, 2, 2, 0, 0],
    [0, 0, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 2, 2, 2, 2, 3, 1, 0, 0],
    [0, 0, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 0, 0],
    [0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 1, 0, 0],
    [0, 0, 1, 2, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 0, 0],
    [0, 0, 2, 3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 1, 0, 0],
    [0, 0, 1, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var heightMapArray = [
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 3, 2, 2, 2, 2, 3, 3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 2, 3, 9, 9],
    [9, 9, 2, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 3, 9, 9],
    [9, 9, 2, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2, 2, 3, 9, 9],
    [9, 9, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 2, 2, 3, 9, 9],
    [9, 9, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 9, 9],
    [9, 9, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 9, 9],
    [9, 9, 3, 2, 2, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 9, 9],
    [9, 9, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 3, 9, 9],
    [9, 9, 3, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 3, 9, 9],
    [9, 9, 2, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 9, 9],
    [9, 9, 3, 2, 2, 2, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 9, 9],
    [9, 9, 2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 9, 9],
    [9, 9, 3, 2, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 9, 9],
    [9, 9, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 9, 9],
    [9, 9, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 2, 1, 1, 2, 9, 9],
    [9, 9, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 2, 1, 2, 9, 9],
    [9, 9, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 9, 9],
    [9, 9, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 9, 9],
    [9, 9, 3, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1, 2, 1, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 9, 9],
    [9, 9, 2, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 9, 9],
    [9, 9, 3, 2, 2, 1, 1, 2, 1, 1, 1, 1, 2, 3, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 1, 2, 1, 2, 9, 9],
    [9, 9, 2, 2, 1, 1, 1, 1, 1, 0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 3, 9, 9],
    [9, 9, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 9, 9],
    [9, 9, 2, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 9, 9],
    [9, 9, 3, 2, 2, 2, 2, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 9, 9],
    [9, 9, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 2, 2, 3, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
]
// create the array that will hold all of the hex entities
var hexArray = new Array();

// function for the loading of an array into entity data
function boardToHex(region,regionHeightMap){

    //set the logging conditions
    logMode = false;
    logger('boardToHex()', 'boardToHex()', 'the boardToHex function was called', logMode);
    
    // create variable to count the location of the cursor in the array
    var hexCursor = 0;
    logger('boardToHex()', 'hexCursor', hexCursor, logMode);
    
    //find the width of the region being loaded
    regionWidth = region[0].length;
    logger('boardToHex()', 'regionWidth', regionWidth, logMode);

    //scan throught the gameBoard
    //scan through the y elements
    region.forEach(elementY => {
        logger('boardToHex()','elementY', elementY, logMode);

        //scan through the x elements
        elementY.forEach(elementX =>{
            logger('boardToHex()','elementX', elementX, logMode);
            logger('boardToHex()','(elementX > 0)', (elementX > 0), logMode);
            // if the hex location is not 'empty' 
            if (elementX > 0){

                // create an instance of a hex entity
                var hex = new hexEntity();
                logger('boardToHex()','hex', hex, logMode);

                // fill the instance with coordinate information
                // the x location
                hex.x = hexCursor % regionWidth;
                logger('boardToHex()','hex.x', hex.x, logMode);
            
                // the y location
                hex.y = (hexCursor - (hexCursor % regionWidth)) / regionWidth;
                logger('boardToHex()','hex.y', hex.y, logMode);
            
                // the z location is loaded from the heightMapArray based on the loaded x and y
                hex.height = regionHeightMap[hex.y][hex.x];
                logger('boardToHex()','hex.height', hex.height, logMode);


                //fill the hex with the appropriate id tag
                hex.id = gameEntityArray.length;
                logger('boardToHex()','hex.id', hex.id, logMode);
            
                // depending on the elementXs number fill the hex's material information
                switch(elementX){
                    case 1:
                        hex.texture = dirtHex;
                        hex.material = 'dirt1'
                        break;
                    case 2:
                        hex.texture = dirtHex2;
                        hex.material = 'dirt2'
                        break;
                    case 3:
                        hex.texture = stoneHex;
                        hex.material = 'stone'
                        break;
                    case 4:
                        hex.texture = waterHexSprite;
                        hex.material = 'water'
                        break;
                    default:
                    logger('boardToHex()','switch{default:elementX?', elementX, logMode);
                        break;
                }

                logger('boardToHex()','elementX', hex.material, logMode);

                logger('boardToHex()','hex', hex, logMode);

                // push the hex instance to the end of the game entity array
                gameEntityArray.push(hex);
                
                //push the hex instance to the end of the hex array
                hexArray.push(hex);
            }
            
            //increment the hexCursor
            hexCursor++;
            logger('boardToHex()','hexCursor', hexCursor, logMode);
        });
    });

    //log the contents of the gameEntity array
    //logger('boardToHex()','gameEntityArray', gameEntityArray, logMode);
    //logger('boardToHex()','hexArray', hexArray, logMode);
}

