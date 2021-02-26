class WorldBuilder{

    buildWorld(length) {

        //Build Base Array
        let worldArray = this.getTiles(length);

        //Build Plates return verticy pairs
        let platedArray = this.getPlates(length, worldArray)
        // console.log(platePairs)
        return(platedArray)
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
        return tempArray
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
        if(tile.surface.altitude>tile.surface.waterLevel){
            tile.surface.surfaceType = "land"
        } else {
            tile.surface.surfaceType = "water"
        }
        return tile;
    }

}
module.exports = new WorldBuilder()