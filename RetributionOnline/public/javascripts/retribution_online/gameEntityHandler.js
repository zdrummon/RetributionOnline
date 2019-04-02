//gameEntitiyHandler.js contains the game entity object
// each instance of this object contains coordinates, an id, and type indicator
function gameEntity(x, y, z, id, type){
    this.x = x;
    this.y = y;
    this.z = z;
    this.id = id;
    this.type = type;
}

//create mob object
function mob(){}
// mame variable to hold gameEntity's  prototype
var gameEntityMobProto = new gameEntity;
// add new properties to game entity prototype
gameEntityMobProto.facing;
gameEntityMobProto.maxHealth;
gameEntityMobProto.health;
gameEntityMobProto.maxStamina;
gameEntityMobProto.stamina;
gameEntityMobProto.inventory;
gameEntityMobProto.statusFlags;
//set mob objects prototype to modified gameEntity's prototype
mob.prototype = gameEntityMobProto;
//set mobs gameEntity type to mob
mob.type='mob';

//create item object
function item(){}
// mame variable to hold gameEntity's  prototype
var gameEntityItemProto = new gameEntity;
// add new properties to game entity prototype
gameEntityitemProto.inventory;
gameEntityitemProto.statusFlags;
//set mob objects prototype to modified gameEntity's prototype
mob.prototype = gameEntityItemProto;
//set mobs gameEntity type to mob
mob.type='mob';

