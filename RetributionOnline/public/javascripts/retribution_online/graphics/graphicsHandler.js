//graphicsHandler.js contains functions, variables, and objects for graphical purposes

//variables to hold information about elements in the hbs/html file
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//initialize the drawscale
var drawScale = 32;
//drawscale is the size by which the images on the screen are limited by
//var drawScale = canvas.width / 7.25;

//checks to see whether device is mobile
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

//canvas clearing function
function clearCanvas() {
    //clear the the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //draw the backround color
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();
}

function updateCanvas() {
    var logMode = false;
    logger('updateCanvas()', 'updateCanvas()', 'the updateCanvas() function has been called')

    if (isMobileDevice()) {
        logger('isMobileDevice(true)', isMobileDevice(), 'it is a mobile device', logMode);
        resizeCanvasMobile();

    } else {
        logger('isMobileDevice(false)', isMobileDevice(), 'it is a mobile device', logMode);
        resizeCanvasDesktop();
    }

    //adjust the drawscale
    drawScale = canvas.width / 20;
    logger('updateCanvas()', 'drawScale', drawScale, logMode);

    clearCanvas();


    entityToSprite();
    
}



/*
// function that once called will adjust the size of the canvas to the windows edges
    //all while maintaining a 16/9 ratio
//the games main drawing sequence
function updateScreen() {
    //--re-adjust screen variables------------------------
    drawScale = canvas.width / 7.25;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //-- resize the canvas and remain dynamic
    resizeCanvas();
    //--clear the screen in preparation of drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.font = "10px Arial";
    ctx.fillStyle = "red";


    // Begin scanning arrays for instruction on what to draw and where
    for (y = 0; y < 11; y++) { //drawing from top down (back to front)
        // draw visible odd tiles-------------------------------------------------------layer 1===
        for (x = 0;  x < 11; x++){ //drawing left to right
            //variables for tansforming index coordinates to pixel coordinates
            var dy = y * canvas.height / 16 + drawScale * 1.5;
            var dx = x * canvas.width / 9.75 - drawScale * 0.675;
            // if the hex in the x,y location is visible (greater type than 0)
            if (gameview[x][y] >= 1) { 
                //if the player is within the bounds of the region
                if ((x + player.x >= 0  && y + player.y >= 0 ) && (x + player.x <= 30  && y + player.y <= 30 )){
                    //if the x coordinate is odd (hexagonal offset)
                    if(x % 2 != 0){
                        //draw the hex with a verticle offset for the "z" axis
                        drawHex(dx, dy - ((heightBoard[x+player.x][y+player.y] * (drawScale/3))) , gameBoard[x+player.x][y+player.y]);
                    }
                }
            }    
        }
        //draw visible even tiles-------------------------------------------------------layer 2===
        for (x = 0;  x < 11; x++){
            //variables for tansforming index coordinates to pixel coordinates
            var dy = y * canvas.height / 16 + drawScale * 1.5 + canvas.height / 32;
            var dx = x * canvas.width / 9.75 - drawScale * 0.675;
             // if the hex in the x,y location is visible (greater type than 0)
            if (gameview[x][y] >= 1) {
                //if the player is within the bounds of the region
                if ((x + player.x >= 0  && y + player.y >= 0 ) && (x + player.x <= 30  && y + player.y <= 30 )){
                    //if the x coordinate is even (hexagonal offset)
                    if(x % 2 == 0){
                        //if the player is in an even x position
                        if (player.x % 2 == 0){
                            //draw the hex with a verticle offset for the "z" axis
                            //add a verticle offset of a full hex
                            drawHex(dx, dy  - ((heightBoard[x+player.x][y+player.y + 1] * (drawScale/3))), gameBoard[x+player.x][y+player.y + 1]);
                        }
                        //if the player is at an odd x position
                        else{
                            //draw the hex with a verticle offset for the "z" axis
                            drawHex(dx, dy  - ((heightBoard[x+player.x][y+player.y] * (drawScale/3))), gameBoard[x+player.x][y+player.y])
                        }
                    }
                }
            }
             
        }  
        
        //-------------------------------------draw player---------------------------------layer 3-----------------
        for (x = 0;  x < 11; x++){
            //variables for tansforming index coordinates to pixel coordinates
            var dy = y * canvas.height / 16 + drawScale * 1.5 
            var dx = x * canvas.width / 9.75 - drawScale * 0.675;
             // if the hex in the x,y location is visible (greater type than 0)
            if (gameview[x][y] >= 1) {
                //if the player is within the bounds of the region
                if (x + player.x == brain.x && y + player.y == brain.y ){
                    //if the x coordinate is even (hexagonal offset)
                    console.log('there is the item on screen')
                    
                    if(x % 2 == 0){
                        dy = y * canvas.height / 16 + drawScale * 1.5 + canvas.height / 32 - drawScale;
                        //if the player is in an even x position
                        //draw the sprite
                            //add a verticle offset of a full hex
                            drawAnimatedSprite(brainSprite, dx, dy  - ((heightBoard[brain.x][brain.y] * (drawScale/3))), 0, frameCounter, 1, 4 , 1, 1);
                            console.log('draw mode 1');
                        }
                        //if the player is at an odd x position
                        
                    
                    else{
                        console.log('draw mode 3');
                        drawAnimatedSprite(brainSprite, dx, dy - ((heightBoard[brain.x][brain.y] * (drawScale/3))) ,0, frameCounter, 1, 4 , 1, 1);
                    }
                }
            }
         
            
                
            // if the gameview value is 2 and thus the player
            if (gameview[x][y] == 2) {
                //draw animated sprite from the monk sprite sheet with appropriate verticle offsets
                drawAnimatedSprite(monkSprite, dx, (dy - drawScale/4) - ((heightBoard[x+player.x][y+player.y] * (drawScale/3))), player.facing, frameCounter, 6, 8, 1,1);
                ctx.fillText(player.x + ', ' + player.y, dx - drawScale/4 ,dy - ((heightBoard[x+player.x][y+player.y] * (drawScale/3))));
            }
        } 
    }
}

//drawAnimatedSprite(brainSprite

*/