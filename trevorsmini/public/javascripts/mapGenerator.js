//variable declarations ---------------------------------------
const screenSizeX = 800;
const screenSizeY = 600;
const tileSizeX = 64;
const tileSizeY = 64;
const mapSizeX = 8;
const mapSizeY = 40;
const maxOccupancy = 10;


var spawmLocation = {
    id,
    x,
    y,
    mobType
}

var doorLocation = {
    id,
    x,
    y,
    locked
}

var hex = {
    id,
    x,
    y,
    hexType
}

var mapObject = {
    id,
    mapArray = new Array(mapSizeX*mapSizeY),
    spawnArray = new Array(maxOccupancy),
    doorArray = new Array(4),
    mapSeed,
    waterLevel,
    doorCount,

    initMap : function(){
        mapArray.fill(hex);
        spawnArray.fill(spawmLocation);
        doorArray.fill(doorLocation);
    }


};



