// js file for information and functions related to player and mob entities
const maxInventory = 10;

function mob(
    isControllable,
    id,
    maxhealth,
    health,
    maxstamina,
    stamina,
    x,
    y,
    z,
    facing, // 0 is north, 1 is northeast, so on incrementing up clockwise
    statusFlags,
    inventory){
        this.isControllable = isControllable;
        this.id = id;
        this.maxhealth = maxhealth;
        this.health = health;
        this.maxstamina = maxstamina;
        this.stamina = stamina;
        this.x = x;
        this.y = y;
        this.z = z;
        this.facing = facing;
        this.statusFlags = statusFlags;
        this.inventory = inventory;
}









