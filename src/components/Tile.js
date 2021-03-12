import React from 'react'

const Tile = ({ data, getHoverData, gameData }) => {

    const hover = () => {
        getHoverData(data);
    }

    return (
        //<div className='grid-item' id='grid-item-one'>{JSON.stringify(data)}</div>

        <div 
            className={ gameData.selected[0] === data.tileId ? 'grid-item background-white' : data.surface.surfaceType==='water' ? 'grid-item background-blue' : 'grid-item background-green'}
            onMouseDown={hover}> 
        </div>
    )

}

export default Tile
