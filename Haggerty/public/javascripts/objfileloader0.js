



var fileName = "hexpillar";
var filePath = 'obj/';

var vertex = { x, y, z };
var textureCoordinate = { u, v };
var normalVertex ={ x, y, z };
var parameterSpaceVertex = { u, v, w };
var polyFace = { vertexA, vertexB, vertexC };


var flattenedVertex = { x, y, distanceFromCamera};


var objObject = {
    objectTag,
    materialLibrary,    
    vertexArray : [],
    textureCoordinateArray: [],
    normalVertexArray: [],
    parameterSpaceVertexArray : [],
    polyFaceArray: [],
    translation,
    rotation,
    scale,
    materialName,
    s
};

var cameraObject = {
    screenWidth,
    screenHeight,
    maxVeiwDistance,
    fov,
    x,
    y,
    z,
    roll,
    yaw,
    pitch
};

var flattenedObj = {
    objectTag,
    flattenedVertexArray : [],
    textureCoordinateArray: [],
    polyFaceArray : [],
    textureImage 
};





function loadObjFileToObject(filePath,fileName){
    var fs = require('fs');
    var filledObject = new objObject();
    fileData = fs.readFileSync(filePath+fileName).split('\n');
    fileData.forEach(element => {
        if (element.indexOf('o ') != -1){
            var elementSplit = element.split(' ');
            filledObject.objectTag = elementSplit[1];
        }
        else if (element.indexOf('mtllib ') != -1){
            var elementSplit = element.split(' ');
            filledObject.materialLibrary = elementSplit[1];
        }
        else if (element.indexOf('v ') != -1){
            var elementSplit = element.split(' ');
            filledObject.vertexArray.push(new vertex());
            var currentVertexIndex = filledObject.vertexArray.length - 1;
            filledObject.vertexArray[currentVertexIndex].x = Number(elementSplit[1]);
            filledObject.vertexArray[currentVertexIndex].y = Number(elementSplit[2]);
            filledObject.vertexArray[currentVertexIndex].z = Number(elementSplit[3]);
        }
        else if (element.indexOf('vt ') != -1){
            var elementSplit = element.split(' ');
            filledObject.textureCoordinateArray.push(new textureCoordinate());
            var currentTextureCoordinateIndex = filledObject.textureCoordinateArray.length - 1;
            filledObject.textureCoordinateArray[currentTextureCoordinateIndex].u = Number(elementSplit[1]);
            filledObject.textureCoordinateArray[currentTextureCoordinateIndex].v = Number(elementSplit[2]);
        }
        else if (element.indexOf('vn ') != -1){
            var elementSplit = element.split(' ');
            filledObject.normalVertexArray.push(new normalVertex());
            var currentNormalVertexIndex = filledObject.normalVertexArray.length - 1;
            filledObject.vertexArray[currentNormalVertexIndex].x = Number(elementSplit[1]);
            filledObject.vertexArray[currentNormalVertexIndex].y = Number(elementSplit[2]);
            filledObject.vertexArray[currentNormalVertexIndex].z = Number(elementSplit[3]);
        }
        else if (element.indexOf('vp ') != -1){
            var elementSplit = element.split(' ');
            filledObject.parameterSpaceVertexArray.push(new parameterSpaceVertex());
            var currentParameterSpaceVertexIndex = filledObject.parameterSpaceVertexArray.length-1;
            filledObject.parameterSpaceVertexArray[currentParameterSpaceVertexIndex].u = Number(elementSplit[1]);
            filledObject.parameterSpaceVertexArray[currentParameterSpaceVertexIndex].v = Number(elementSplit[2]);
            filledObject.parameterSpaceVertexArray[currentParameterSpaceVertexIndex].w = Number(elementSplit[3]);
        }
        else if (element.indexOf('usemtl ') != -1){
            var elementSplit = element.split(' ');
            filledObject.materialName = elementSplit[1];
        }
        else if (element.indexOf('s ') != -1){
            var elementSplit = element.split(' ');
            filledObject.s = elementSplit[1];
        }
        else if (element.indexOf('f ') != -1){
            var elementSplit = element.split(' ');
            elementSplit.forEach(subElement => {
                if (subElement.indexOf('f') === -1){
                    var subElementSplit = subElement.split('/');
                    filledObject.polyFaceArray.push(new polyFace());
                    var currentPolyFaceIndex = filledObject.polyFaceArray.length -1;
                    filledObject.polyFaceArray[currentPolyFaceIndex].vertexA = Number(subElementSplit[1]);
                    filledObject.polyFaceArray[currentPolyFaceIndex].vertexB = Number(subElementSplit[2]);
                    filledObject.polyFaceArray[currentPolyFaceIndex].vertexC = Number(subElementSplit[3]);
                }
            });
        }
    });
    return filledObject;
}


function mainProcess(){
    var objData = loadObjFileToObject(filePath,fileName);
    printObjectInformation(objData);

}
function printObjectInformation(objectA){
    document.getElementById("informationDisplay").innerHTML = util.inspect(objectA);

}
window.onload= function() {
    mainProcess();
 
}
// load obj file into objData
// seperate objData's data into correct array locations
// set location for camera/cameraPlane
// for each vert calculate a line from it to the camera
    // and find its intersection point with the camera plane
//save the the flattened points
// organize faces from farthest to closest and if the face is visible
//draw the faces as polygons


 


