class WorldBuilder{

    buildWorld() {

        //Build Base Array
        let worldArray = this.getTiles(15);

        return(worldArray)
    }

    getTiles = (length) => {
        let tileArray = [];

        let tileCount = length*length;

        let xCount = 0;
        let yCount = tileCount-1;




        for (let i=0;i<tileCount;i++){

            tileArray.push(this.createTile(xCount%length, Math.floor(yCount/15)));
            xCount++;
            yCount--
        }
        return tileArray;
    }

    createTile(xValue, yValue){




        // resources that can be completely absent or abundent should be ints
        // resources that exist as a ratio should be decimal units
        let tile = {
            position:{
                xPos:xValue+1,
                yPos:yValue+1
            },
            surface: {
                surfaceType: "",
                altitude: 15,
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