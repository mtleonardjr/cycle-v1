class Controller {

    cycle(tileData){ 
        // let temp = [...tileData];

        // // loop thru our array & perform an action
        // temp.forEach((e)=>{
        //     e.num ++;
        // })

        // // Target an individual tile & perform an action
        // temp[0] = {...temp, num:5};

        // logging statement
        // console.log(temp);

        const createTile = () => {
            let tile = {
                surface: {
                    surfaceType: "land",
                    fertility: .5
                },
                atmosphere: {
                    oxygen: .5,
                    nitrogen: .5
                },
                uGround: {
                    waterSat: .75
                }
            }
            return tile;
        }

        const getTiles = (num) => {
            let tileArray = [];
            for (let i=0;i<num;i++){
                tileArray.push(createTile());
            }
            return tileArray;
        }

        

        return(getTiles(4))
    }
}

module.exports = new Controller();