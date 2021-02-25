import React from 'react'

const Tile = ({ data, getHoverData }) => {

    // const isBackgroundRed = false;

    const hover = () => {
        getHoverData(data);
    }

    return (
        //<div className='grid-item' id='grid-item-one'>{JSON.stringify(data)}</div>

        <div 
            className={data.surface.surfaceType==='water' ? 'grid-item background-blue' : 'grid-item background-green'}
            onMouseEnter={hover}>{JSON.stringify(data)}
        </div>
    )

}

export default Tile
