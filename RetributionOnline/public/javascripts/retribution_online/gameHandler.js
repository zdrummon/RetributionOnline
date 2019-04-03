//gameHandler.js contains variables, functions, and objects for game logic

// define the player object as a mob type game entity
var player = new mob;
player.x=0;
player.y=0;
player.facing=0;
player.id = 0;
gameEntityArray.push(player);

var brain = new item;
brain.x = 7;
brain.y = 6;
brain.id = 1;
gameEntityArray.push(brain);

playAudioBGM(7);

function compareGameEntities(){
    gameEntityArray.forEach(element1 => {
        if (element1 != player && element1.x == player.x && element1.y == player.y){
            return element1.id;
        }
    });
}

function updateGame() {
    keyWhipserer();
    if (compareGameEntities() == 1){
        brain.x = -1000;
        brain.y = -1000;
        player.inventory.push(1);
        console.log( 'brainjiggle')
    }
}