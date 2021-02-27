class WorldBuilder{

    buildWorld(length) {

        //Build Base Array
        let worldArray = this.getTiles(length);

        //Build Plates return verticy pairs
        worldArray = this.getPlates(length, worldArray)
        // console.log(platePairs)

        //Add Hot Spot Mountains
        worldArray = this.addHSRange(worldArray);

        //designates between land and sea
        worldArray.forEach((object,index)=>{
            if(object.surface.altitude>object.surface.waterLevel){
                object.surface.surfaceType = "land"
            } else {
                object.surface.surfaceType = "water"
            }
        })
        return(worldArray)
    }

    addHSRange(worldArray) {
        let tempArray = [...worldArray];
        let hsCoords = [];

        worldArray.forEach((object,index)=>{
            if (object.uGround.seismicActivity) {
                hsCoords.push([object])
                console.log(object)
            }
        })

        // let testvar = hsCoords[0]
        
        // hsCoords.forEach((object,index)=>{
        //     let x = object[0];
        //     let y = object[1];

        //     let foundIndex = worldArray.findIndex(elem => 
        //         elem.position.xPos === x && elem.position.yPos === y
        //     )

        //     let seismicActivity = worldArray[foundIndex].uGround.seismicActivity;

        //     console.log(seismicActivity)
        // })

        return tempArray
    }
    
    getPlates(length, worldArray) {
        let tempArray = [...worldArray];

        let firstX = Math.floor(Math.random()*2*(Math.round(Math.random()) * 2 - 1) + length/3 );
        let secondX = Math.floor(Math.random()*2*(Math.round(Math.random()) * 2 - 1)  + (length/3)*2);
        let firstY = Math.floor(Math.random()*2*(Math.round(Math.random()) * 2 - 1) + length/3 );
        let secondY = Math.floor(Math.random()*2*(Math.round(Math.random()) * 2 - 1)  + (length/3)*2);

        tempArray.forEach((object,index)=> {
            if (object.position.yPos <= firstY) {
                if (object.position.xPos <= firstX) {
                    object.surface.tectonicPlate = 1;
                } else if (object.position.xPos <= secondX && object.position.xPos > firstX) {
                    object.surface.tectonicPlate = 2;
                } else if (object.position.xPos > secondX) {
                    object.surface.tectonicPlate = 3;
                }
            } else if (object.position.yPos <= secondY && object.position.yPos > firstY) {
                if (object.position.xPos <= firstX) {
                    object.surface.tectonicPlate = 4;
                } else if (object.position.xPos <= secondX && object.position.xPos > firstX) {
                    object.surface.tectonicPlate = 5;
                } else if (object.position.xPos > secondX) {
                    object.surface.tectonicPlate = 6;
                }
            } else if (object.position.yPos > secondY) {
                if (object.position.xPos <= firstX) {
                    object.surface.tectonicPlate = 7;
                } else if (object.position.xPos <= secondX && object.position.xPos > firstX) {
                    object.surface.tectonicPlate = 8;
                } else if (object.position.xPos > secondX) {
                    object.surface.tectonicPlate = 9;
                }
            }
        })

        
        //Plate 1
        // x = Math.floor(Math.random()*(firstX)+1)
        // y = Math.floor(Math.random()*(firstY)+1)
        // foundIndex = tempArray.findIndex(elem => 
        //     elem.position.xPos === x && elem.position.yPos === y
        // )
        // tempArray[foundIndex].uGround.seismicActivity = "hot spot";
        // tempArray[foundIndex].surface.altitude = Math.random()*11+90;

        // //Plate 2
        // x = Math.floor(Math.random() * (secondX - firstX + 1)) + firstX;
        // y = Math.floor(Math.random() * (firstY - 1 + 1)) + 1;
        // foundIndex = tempArray.findIndex(elem => 
        //     elem.position.xPos === x && elem.position.yPos === y
        // )
        // tempArray[foundIndex].uGround.seismicActivity = "hot spot";
        // tempArray[foundIndex].surface.altitude = Math.random()*11+90;

        //first plate
        this.getHotSpots(1,1,firstX,firstY, tempArray);

        //second plate
        this.getHotSpots(firstX+1,firstY,secondX,firstY, tempArray);

        //3 plate
        this.getHotSpots(secondX+1,firstY,length,firstY, tempArray);

        //4 plate
        this.getHotSpots(1,firstY+1,firstX,secondY, tempArray);

        //5 plate
        this.getHotSpots(firstX+1,firstY+1,secondX,secondY, tempArray);

        //6 plate
        this.getHotSpots(secondX+1,firstY+1,length,secondY, tempArray);

        //7 plate
        this.getHotSpots(1,secondY+1,firstX,length, tempArray);

        //8 plate
        this.getHotSpots(firstX+1,secondY+1,secondX,length, tempArray);

        //9 plate
        this.getHotSpots(secondX+1,secondY+1,length,length, tempArray);






        return tempArray
    }

    getHotSpots = (x1,y1,x2,y2, array) => {
        let x, y, foundIndex;
        x = Math.floor(Math.random() * (x2 - x1 + 1)) + x1;
        y = Math.floor(Math.random() * (y2 - y1 + 1)) + y1;
        foundIndex = array.findIndex(elem => 
            elem.position.xPos === x && elem.position.yPos === y
        )
        array[foundIndex].uGround.seismicActivity = "hot spot";
        array[foundIndex].uGround.plateDirection = Math.floor(Math.random()*4);
        array[foundIndex].surface.altitude = Math.random()*11+90;
    }

    getTiles = (length) => {
        let tileArray = [];
        let tileCount = length*length;
        let xCount = 0;
        let yCount = tileCount-1;

        for (let i=0;i<tileCount;i++){

            tileArray.push(this.createTile(xCount%length, Math.floor(yCount/15), 0));
            xCount++;
            yCount--
        }
        return tileArray;
    }

    createTile(xValue, yValue, altitude){
        // resources that can be completely absent or abundent should be ints
        // resources that exist as a ratio should be decimal units
        let tile = {
            position:{
                xPos:xValue+1,
                yPos:yValue+1
            },
            surface: {
                tectonicPlate: 1,
                surfaceType: "",
                altitude: altitude,
                waterLevel: 10
            },
            atmosphere: {
                oxygen: .5,
                nitrogen: .5
            },
            uGround: {
                organicSoil: 50
            }
        }
        return tile;
    }

}
module.exports = new WorldBuilder()