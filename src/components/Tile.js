import React from 'react'

const Tile = ({ data }) => {

    // const getNumber = (data) => {
    //     console.log(data);
    //     return "1";
    // }
    return (
        <div className='grid-item' id='grid-item-one'>{JSON.stringify(data)}</div>
    )

}

export default Tile
