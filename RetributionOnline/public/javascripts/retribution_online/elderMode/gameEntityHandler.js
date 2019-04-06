//gameEntitiyHandler.js contains the game entity object

var gameEntityArrayIndexCursor = 0;

// each instance of this object contains coordinates, an id, and type indicator
function gameEntity(x, y, z, id, type){
    this.x = x;
    this.y = y;
    this.z = z;
    this.id = gameEntityArrayIndexCursor;
    this.type = type;
    gameEntityArrayIndexCursor++;
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
gameEntityMobProto.inventory = new Array();
gameEntityMobProto.statusFlags;
//set mobs gameEntity type to mob
gameEntityMobProto.type='mob';
//set mob objects prototype to modified gameEntity's prototype
mob.prototype = gameEntityMobProto;

//create item object
function item(){}
// mame variable to hold gameEntity's  prototype
var gameEntityItemProto = new gameEntity;
// add new properties to game entity prototype
gameEntityItemProto.inventory;
gameEntityItemProto.statusFlags;
//set mobs gameEntity type to mob
gameEntityItemProto.type='item';
//set item objects prototype to modified gameEntity's prototype
item.prototype = gameEntityItemProto;

var gameEntityArray = new Array();