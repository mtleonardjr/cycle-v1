import React from 'react'

const Tile = ({ data, getClickData, gameData }) => {

    const click = () => {
        getClickData(data);
    }

    const determineClass = () => {
        let className = 'grid-item';

        //Determines if selected
        if(gameData.selected[0] === data.tileId){
            className = className + ' selected';
        }
        
        //Determines if land or water
        if(data.surface.surfaceType==='water'){
            className = className + ' background-blue';
        } else {
            className = className + ' background-green';
        }
        return className
    }

    return (
        <div 
            className={determineClass()}
            onMouseDown={click}> 
        </div>
    )

}

export default Tile
