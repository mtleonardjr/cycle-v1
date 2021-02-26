class Utilities {

    createInitalArray(length) {
        let iArray = [];
        for(let i=0; i<length; i++) {
          iArray.push({"xPos":0,"yPos":0,"surface":{"surfaceType":"land","altitude":64.934320566616,"waterLevel":60},"atmosphere":{"oxygen":0.5,"nitrogen":0.5},"uGround":{"organicSoil":50}});
        }
        return iArray
    }
}
module.exports = new Utilities();