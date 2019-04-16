//rotateHexes.js

function rotateHex(hex, centerHex, direction){
    let cubeA = new gameEntity();
    cubeA.x = hex.x;
    cubeA.z = hex.y - (hex.x + (hex.x & 1)) / 2;
    cubeA.y = - cubeA.x - cubeA.z;
    
    let cubeB = new gameEntity();
    cubeB.x = centerHex.x;
    cubeB.z = centerHex.y - (centerHex.x + (centerHex.x & 1)) / 2;
    cubeB.y = - cubeB.x - cubeB.z;

    cubeA.x = cubeA.x - cubeB.x
    cubeA.y = cubeA.y - cubeB.y
    cubeA.z = cubeA.z - cubeB.z

    if(direction > 0){
        loopcount = Math.ceil(direction)
        while(loopcount > 0){
            tempCubeAX = cubeA.x; 
            tempCubeAY = cubeA.y;
            tempCubeAZ = cubeA.z;

            cubeA.x = -tempCubeAY; 
            cubeA.y = -tempCubeAZ;
            cubeA.z = -tempCubeAX;
            loopcount--;
        }
    }
    else if(direction < 0){
        loopcount = Math.floor(direction)
        while(loopcount > 0){
  
            tempCubeAX = cubeA.x; 
            tempCubeAY = cubeA.y;
            tempCubeAZ = cubeA.z;

            cubeA.x = -tempCubeAY; 
            cubeA.y = -tempCubeAZ;
            cubeA.z = -tempCubeAX;
            loopcount--;
        }
    }

    cubeA.x = cubeA.x + cubeB.x; 
    cubeA.y = cubeA.y + cubeB.y;
    cubeA.z = cubeA.z + cubeB.z;


    var tempHexX = cubeA.x;
    var tempHexY = cubeA.z + (cubeA.x + (cubeA.x & 1)) / 2;

    var rotatedHex = [tempHexX, tempHexY];


    return rotatedHex;
}