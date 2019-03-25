//hexgridlogic

const hexDirections = {
    NORTHWEST:0,
    NORTH:1,
    NORTHEAST:2,
    SOUTHEAST:3,
    SOUTH:4,
    SOUTHWEST:5
}

const hexType = {
    // empty : 0,
    floor : 0,
    wall : 1,
}

function hex(x, y, hexType){
    this.x = x;
    this.y = y;
    this.hexType = hexType;
}


function checkNeighborTiles(indexA, mapArray){
    var currentTileX = indexToCoordinates(indexA)[0];
    var curentTileY = indexToCoordinates(indexA)[1];
    var neighborValues = new Array(6);
    neighborValues.fill(0);
    neighborValues[0] = mapArray[coordinatesToIndex(currentTileX - 1 , curentTileY - 1)]; //check northwest
    neighborValues[1] = mapArray[coordinatesToIndex(currentTileX, curentTileY - 2)]; //check north
    neighborValues[2] = mapArray[coordinatesToIndex(currentTileX + 1, curentTileY - 1)];//check north east
    neighborValues[3] = mapArray[coordinatesToIndex(currentTileX + 1, curentTileY + 1)]; //check south east
    neighborValues[4] = mapArray[coordinatesToIndex(currentTileX, curentTileY + 2)]; //check south
    neighborValues[5] = mapArray[coordinatesToIndex(currentTileX - 1 , curentTileY + 1)]; //check southwest
    return neighborValues;
}

function indexToCoordinates(indexA, mapMaxX){
    var j = (indexA % mapMaxX);
    var i = (indexA - j) / mapMaxX;
    j = j*2 + i%2;
    return [j,i]
}

function coordinatesToIndex(hexX, hexY){
    var indexA = (hexY * mapMaxX ) + (hexX - hexY%2)/2;
    return indexA;
}

