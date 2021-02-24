class Controller {

    cycle(tileData){ 
        const temp = [...tileData];

        // loop thru our array & perform an action
        temp.forEach((e)=>{
            e.num ++;
        })

        // // Target an individual tile & perform an action
        // temp[0] = {...temp, num:5};

        // logging statement
        // console.log(temp);

        return(temp)
    }
}

module.exports = new Controller();