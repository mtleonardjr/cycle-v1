const WorldBuilder = require('./world-builder');

class Controller {

    cycle(tileData){ 
        // // loop thru our array & perform an action
        // temp.forEach((e)=>{
        //     e.num ++;
        // })

        // // Target an individual tile & perform an action
        // temp[0] = {...temp, num:5};

        // logging statement
        // console.log(temp);

        let temp = [...tileData];

        return temp;
    }


    reset(length){ 
        return(WorldBuilder.buildWorld(length))
    }

    // Legacy Cycle function
    // cycle(tileData){ 
    //     // let temp = [...tileData];

    //     // // loop thru our array & perform an action
    //     // temp.forEach((e)=>{
    //     //     e.num ++;
    //     // })

    //     // // Target an individual tile & perform an action
    //     // temp[0] = {...temp, num:5};

    //     // logging statement
    //     // console.log(temp);
    //     const createTile = () => {
    //         // resources that can be completely absent or abundent should be ints
    //         // resources that exist as a ratio should be decimal units
    //         let tile = {
    //             position:{
    //                 xPos:0,
    //                 yPos:0
    //             },
    //             surface: {
    //                 surfaceType: "",
    //                 altitude: (Math.random()*40+40),
    //                 waterLevel: 60
    //             },
    //             atmosphere: {
    //                 oxygen: .5,
    //                 nitrogen: .5
    //             },
    //             uGround: {
    //                 organicSoil: 50
    //             }
    //         }

    //         if(tile.surface.altitude>tile.surface.waterLevel){
    //             tile.surface.surfaceType = "land"
    //         } else {
    //             tile.surface.surfaceType = "water"
    //         }
    //         return tile;
    //     }

    //     const getTiles = (num) => {
    //         let tileArray = [];
    //         for (let i=0;i<num;i++){
    //             tileArray.push(createTile());
    //         }
    //         return tileArray;
    //     }
    //     return(getTiles(225))
    // }

    // reset(){ 
    //     const getTiles = (num) => {
    //         let tileArray = [];
    //         for (let i=0;i<num;i++){
    //             tileArray.push(this.createTile());
    //         }
    //         return tileArray;
    //     }       
    //     return(getTiles(225))
    // }
}

module.exports = new Controller();