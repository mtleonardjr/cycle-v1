import React from 'react'

const Info = ({ data }) => {

    // const displayST = ( data ) => {
    //     if (data) {
    //         console.log("This is yet another testerio")
    //         //return <div>{data.surface.surfaceType}</div>
    //     } else {
    //         return "";
    //     }
    // }

    return (
        <div className='info-panel'>
            <div className='info-item-container'>
                <div className='info-item'>Surface Type: {data.surface.surfaceType}</div>
                <div className='info-item'>{data.surface.surfaceType === "land" ? "Altitude: " + Math.round(data.surface.altitude) : "Sea Level: " + Math.round(data.surface.waterLevel)}</div>
                <div className='info-item'>Atmospheric Oxygen : {data.atmosphere.oxygen*100}%</div>
                <div className='info-item'>Atmospheric Nitrogen : {data.atmosphere.nitrogen*100}%</div>
                <div className='info-item'>Organic Matter: {data.uGround.organicSoil}</div>
            </div>
        </div>
    )
}

export default Info
