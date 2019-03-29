//imports the function fpsLimiter from the file fpsHandler.js
import {fpsLimiter, frameCount} from './retribution_online/fpsHandler.js';
//import {screenUpdater} from './retribution_online/graphicsHandler.js';
//import {gameUpdater} from './retribution_online/gameHandler.js';

//main game loop
function game() {

    //update game if enough time has passed since last frame
    if(fpsLimiter()){
        //screenUpdater();
        //gameUpdater();
        console.log('main loop number ' + frameCount);
    }

    //main recursion call
    setTimeout(game, 1000 / 60);
}

//start game loop
game();