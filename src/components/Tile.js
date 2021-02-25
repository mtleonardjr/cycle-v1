import React from 'react'

const Tile = ({ data }) => {

    // const isBackgroundRed = false;

    return (
        //<div className='grid-item' id='grid-item-one'>{JSON.stringify(data)}</div>

        <div className={data.surface.surfaceType==='water' ? 'grid-item background-blue' : 'grid-item background-green'} onMouseEnter={() => console.log("TEST")}>{JSON.stringify(data)}</div>
    )

}

export default Tile
