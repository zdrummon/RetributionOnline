//
function sortByCoordinates(entityArray, direction){
    entityArray.sort(function(a, b) {
        
        Ax = a.x;
        Az = a.y - (a.x + (a.x & 1)) / 2;
        Ay = - Ax - Az;
        
        Bx = b.x;
        Bz = b.y - (b.x + (b.x & 1)) / 2;
        By = - Bx - Bz;
        switch (direction){
            case hexDirections.NORTHWEST:
                if (Az < Bz) {
                    return -1;
                }
                if (Az > Bz) {
                    return 1;
                }
                if (Az == Bz){
                    return 0;
                }
                break;
            case hexDirections.NORTH:
                if (Ay < By) {
                    return 1;
                }
                if (Ay > By) {
                    return -1;
                }
                if (Ay == By){
                    return 0;
                }
                break;
            case hexDirections.NORTHEAST:
                if (Ax < Bx) {
                    return 1;
                }
                if (Ax > Bx) {
                    return -1;
                }
                if (Ax == Bx){
                    return 0;
                }
                break;
             case hexDirections.SOUTHEAST:
                if (Az + Ay < Bz + By) {
                    return -1;
                }
                if (Az + Ay > Bz + By) {
                    return 1;
                }
                if (Az + Ay == Bz + By){
                    return 0;
                }
                break;
            case hexDirections.SOUTH:
                if (Ay < By) {
                    return -1;
                }
                if (Ay > By) {
                    return 1;
                }
                if (Ay == By){
                    return 0;
                }
                break;
            case hexDirections.SOUTHWEST:
                if (Ax < Bx) {
                    return -1;
                }
                if (Ax > Bx) {
                    return 1;
                }
                if (Ax == Bx){
                    return 0;
                }
                break;
        }

       
});

    return entityArray;
} 


 /*
        switch (direction){
            //north--------------------------------------------------------------------
                case hexDirections.NORTH:
                    // if the A elements y location is less than the B elements y location 
                    if (yA < yB) {
                        return -1;
                    }
                    // if the A elements y location is more than the B elements y location
                    if (yA > yB) {
                    return 1
                    }
                    // if the A elements y location is equal to the B elements y location
                    if (yA == yB) {
                        if (xA < xB) {
                            return -1;
                        }
                        if (xA > xB) {
                            if (xA & 1 == 1){
                                return -1;
                            }
                            else {
                                return 1;
                            }
                        }
                        if (xA == xB) {
                            if (a.type == 'hex' && b.type != 'hex'){
                                return -1;
                                }
                            if (a.type != 'hex' && b.type == 'hex'){
                                return 1;
                                }
                            if(a.type == b.type){
                                return 0;
                            }
                        }
                    }
                    break
  }
  */