//gameHandler.js contains variables, functions, and objects for game logic

// define the player object as a mob type game entity
function coordinate(x, y){
    this.x = x;
    this.y = y;
}

var spawn = new coordinate(10,10);
var gameEntityArrayIndexCursor = 0;


var player = new mob;
player.x= spawn.x;
player.y= spawn.y;
player.facing=0;
gameEntityArray.push(player);


var brain = new item;
brain.x = 10;
brain.y = 10;
gameEntityArray.push(brain);


playAudioBGM(6);

function compareGameEntitiesWithPlayer(){
    gameEntityArray.forEach(element => {
            if (element != player && (element.x == (player.x + 5) && element.y == (player.y + 5))){
                  switch (element.type){
                    case 'mob':
                    //do whatever happens when you collide with mob objects
                        break;
                    case 'item':
                        console.log('collision with item detected')
                        //properly dispose of object (not like this)
                        gameEntityArray[element.id].x = -100;
                        gameEntityArray[element.id].y = -100;
                        // store the item in the appropriate slot

                        break;
                    default:
                        

                }

            }
    });
    //return collidedWithPLayer;
}

function updateGame() {
    keyWhipserer();
    compareGameEntitiesWithPlayer();
}