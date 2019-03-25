//



function vector( x, y, z ){
    this.x = x;
    this.y = y;
    this.z = z;
}

function face( vectorA, vectorB, vectorC){
    this.vectorA = vectorA;
    this.vectorB = vectorB;
    this.vectorC = vectorC;
}

function objObject( vectorList, faceList){
    this.vectorList = vectorList;
    this.faceList = faceList;
}

function camera( location, lookingVector, feildOfVeiw, ){
    this.location = location;
    this.lookingVector = lookingVector;
    this.feildOfVeiw = feildOfVeiw;
}

function vectorPlaneIntersect( vectorA, cameraData){
    var intersectVector = new vector(0,0,0);
    var t = 0; //????????????????????
    var cameraPlane = 
    intersectVector.x = vectorA.x +(cameraData.x - vectorA.x);
    

    
    return intersectVector;
}

function mainProcess(){


    var vectorList = new Array();
    vectorList.push(new vector(1,1,1));
    vectorList.push(new vector(-1,-1,-1));
    vectorList.push(new vector(1,-1,1));
    var faceList = new Array();
    faceList.push(new face(vectorList[0],vectorList[1],vectorList[2]));
    var testObjObject = new objObject(vectorList,faceList);    
    var testCamera = new camera(new vector(0,0,-10), new vector(0,0,1), 1);



}