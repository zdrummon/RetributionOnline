

//function checkDistance(entityA, entityB){return (Math.abs(entityB.x - entityA.x) + Math.abs(entityB.x + entityB.y - entityA.x - entityA.y) + Math.abs(entityB.y - entityA.y)) / 2;}

function checkDistance(entityA, entityB){
    let cubeA = new gameEntity();
    cubeA.x = entityA.x;
    cubeA.z = entityA.y - (entityA.x + (entityA.x & 1)) / 2;
    cubeA.y = - cubeA.x - cubeA.z;

    let cubeB = new gameEntity();
    cubeB.x = entityB.x;
    cubeB.z = entityB.y - (entityB.x + (entityB.x & 1)) / 2;
    cubeB.y = - cubeB.x - cubeB.z;
    
    distance = (Math.abs(cubeA.x - cubeB.x) + Math.abs(cubeA.y - cubeB.y) + Math.abs(cubeA.z - cubeB.z)) / 2;
    return distance;
}