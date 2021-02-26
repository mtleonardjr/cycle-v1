class Utilities {

    createInitalArray(length) {
        let iArray = [];
        for(let i=0; i<length; i++) {
          iArray.push({
            position:{
                xPos:0,
                yPos:0
            },
            surface: {
                tectonicPlate: 1,
                surfaceType: "land",
                altitude: 60,
                waterLevel: 10
            },
            atmosphere: {
                oxygen: .5,
                nitrogen: .5
            },
            uGround: {
                organicSoil: 50
            }
        })
        }
        return iArray
    }
}
module.exports = new Utilities();