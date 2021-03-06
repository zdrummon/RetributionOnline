//gameEntity.js


// container to hold the game entitys
var gameEntityArray = new Array();

// main game entity object ----------------------
// each gameEntity contains 
//  - xyz coordinates
//  - a height value
//  - a type identifier
//  - id which is specific to each entity
function gameEntity(x, y, z, height, type){
  this.x = x ;
  this.y = y ;
  this.z = z ;
  this.height = height;
  this.type = type ;
  this.id = gameEntityArray.length;
}

// main hex entity--------------------------------------------
function hexEntity(x, y, z, height, material){
  this.material = material;
  gameEntity.call(this, x, y, z, height, 'hex');
}
  hexEntity.prototype = Object.create(gameEntity.prototype);
  Object.defineProperty(hexEntity.prototype, 'constructor', { 
    value: hexEntity, 
    enumerable: false,
    writable: true });

// main mob entity ------------------------------------------

function mobEntity( x, y, z, height, facing, mobType, mobStatus){
  this.facing = facing;
  this.mobType = mobType;
  // switch (mobType){
    //case 'someMob':
      //this.texture = mobsSprite;
      //break;
    //default:
      //this.texture = null;    
  //}
  this.mobStatus = mobStatus;
  gameEntity.call(this, x, y, z, height, 'mob');
}

mobEntity.prototype = Object.create(gameEntity.prototype);
Object.defineProperty(mobEntity.prototype, 'constructor', { 
  value: mobEntity, 
  enumerable: false,
  writable: true });











/*
class MyClass {
    prop = value;
  
    constructor(...) {
      // ...
    }
  
    method(...) {}
  
    get something(...) {}
    set something(...) {}
  
    [Symbol.iterator]() {}
    // ...
  }
  
  
  
  // gameEntityHandler.js

// container to hold the game entitys
var gameEntityArray = new Array();

// main game entity object ----------------------
// each gameEntity contains 
//  - xyz coordinates
//  - a type identifier
//  - a texture file
//  - id which is specific to each entity
function gameEntity(x, y, z, id, type, texture){
    this.x = x ;
    this.y = y ;
    this.z = z ;
    this.type = type ;
    this.texture = texture ;
    this.id = id;
}

// main hex entity--------------------------------------------
function hexEntity(){}
// variable to hold hexes prototype
var gameHexProto = new gameEntity;
//add the new properties to make the hex
gameHexProto.illumination;
gameHexProto.material;
//change the game entity type to hex
gameHexProto.type = 'hex';
//set the hex prototype to the ubove settings
hexEntity.prototype = gameHexProto;

// main mob entity--------------------------------------------
function mobEntity(){}
// mame variable to hold gameEntity's  prototype
var gameMobProto = new gameEntity;
// add new properties to game entity prototype
// what direction is the mob facing
gameMobProto.facing;
// health data
gameMobProto.maxHealth;
gameMobProto.health;
// stamina data
gameMobProto.maxStamina;
gameMobProto.stamina;
gameMobProto.inventory = new Array();
gameMobProto.statusFlags;
//set mob objects prototype to modified gameEntity's prototype
gameMobProto.type='mob';
//set mobs gameEntity type to mob
mobEntity.prototype = gameMobProto;

// player type entity
function playerEntity(){}
gameMobProto.type = 'player';
playerEntity.prototype = gameMobProto;

// main item entity--------------------------------------------
function itemEntity(){}
//name the variable to hold the items prototype
var gameItemProto = new gameEntity; 
gameItemProto.itemType;
gameItemProto.quantity;
gameItemProto.effect;
gameItemProto.description;
// set the type to item
gameItemProto.type = 'item';
itemEntity.prototype = gameItemProto;

// main logic entity--------------------------------------------
function logicEntity(){}
var gameLogicEntityPrototype = new gameEntity;
gameLogicEntityPrototype.eventType;
// set the game entity type to logic 
gameLogicEntityPrototype.type = 'logic';
logicEntity.prototype = gameLogicEntityPrototype;











*/
