// js file for information and functions related to player and mob entities
const maxInventory = 10; // <- not carry limit but slots for the items
const maxStatusCount = 10; // <- the total number of possible status effects

/*
function spawnMob(x, y, z, id, maxHealth, health, maxStamina, stamina, facing, statusFlags, inventory){
    var mob = new gameEntity(x, y, z, id, 'Mob');
    mob.maxHealth = maxHealth;
    mob.health = health;
    mob.maxStamina = maxStamina;
    mob.stamina = stamina;
    mob.facing = facing; // 0 is north, 1 is northeast, so on incrementing up clockwise
    mob.statusFlags = statusFlags;
    mob.inventory = inventory;
    return mob;
}
*/


function mob(
    x,
    y,
    z,
    isControllable,
    id,
    maxhealth,
    health,
    maxstamina,
    stamina,  
    facing, 
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




