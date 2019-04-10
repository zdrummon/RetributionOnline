//
function sortByCoordinates(entityArray){
    entityArray.sort(function(a, b) {
        //fill variables with
        var xA = a.x;
        var yA = a.y;
        var xB = b.x;
        var yB = b.y;
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
    });

    return entityArray;
} 

