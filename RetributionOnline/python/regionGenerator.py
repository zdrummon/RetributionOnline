import random
import sys
import os
import hexLogicTools


# variable and object declarations
regionMaxX = 30
regionMaxY = 30

regionMaterialArray =  [[0 for x in range(regionMaxX)] for y in range(regionMaxY)]
regionHeightArray =  [[0 for x in range(regionMaxX)] for y in range(regionMaxY)]
bufferArray =  [[0 for x in range(regionMaxX)] for y in range(regionMaxY)]


def fillRegion(value1): #enter a negative value to make random
    j = 0
    while j < regionMaxY:
        i = 0
        while i < regionMaxX :
            if value1 >= 0:
                regionMaterialArray[i][j] = value1   
                regionHeightArray[i][j] = value1
            else:
                regionMaterialArray[i][j] = random.randint(1, 7)
                regionHeightArray[i][j] = random.randint(0, 6)
            i += 1
        j += 1

def smoothRegion(passedArray):
    j = 2
    while j < regionMaxY - 2:
        i = 2
        while i < regionMaxX - 2:
            neighborList = hexLogicTools.checkAllNeighborHex(i, j, passedArray)
            neighborListTotal = 0
            for x in neighborList:
                neighborListTotal += x
            bufferArray[i][j] = int(neighborListTotal / 6)
            i += 1
        j += 1
    return bufferArray
    
def printRegion(printArray):
    j = 0
    print("----Region Material Array----")
    while j < regionMaxY:
        printValueA = str(printArray[j])
        print(printValueA,'')
        j += 1
        

def main():
    exportArray =  [[0 for x in range(regionMaxX)] for y in range(regionMaxY)]
    fillRegion(-1)
    exportArray = regionMaterialArray
    printRegion(exportArray)
    exportArray = smoothRegion(exportArray)
    exportArray = smoothRegion(exportArray)
    printRegion(exportArray)

main()