// js file for information and functions related to player and mob entities
const maxInventory = 10;

var mob = {
    isControllable,
    id,
    health,
    stamina,
    x,
    y,
    z,
    facing = 0, // 0 is north, 1 is northeast, so on incrementing up clockwise
    statusFlags = new Array(8),
    inventory = new Array(maxInventory),
    type
}





