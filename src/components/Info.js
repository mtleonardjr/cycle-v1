import React from 'react'

const Info = ({ data, cycleFunc, resetFunc, upCycleFunc, gameData }) => {

    return (
        <div className='info-panel'>
            <div className='info-item-container'>
                <div className='info-item-top'>Cycle: {gameData.cycle}</div>
                <div className='info-item'>World Name: {gameData.worldName}</div>
            </div>
            <div className='info-item-container'>
                <div className='info-item-top'>X: {data.xPos} Y: {data.yPos}</div>
                <div className='info-item'>Surface Type: {data.surface.surfaceType}</div>
                {/* <div className='info-item'>{data.surface.surfaceType === "land" ? "Altitude: " + Math.round(data.surface.altitude) : "Sea Level: " + Math.round(data.surface.waterLevel)}</div> */}
                <div className='info-item'>{"Altitude: " + Math.round(data.surface.altitude)}</div>
                <div className='info-item'>{"Sea Level: " + Math.round(data.surface.waterLevel)}</div>
                <div className='info-item'>Atmospheric Oxygen : {data.atmosphere.oxygen*100}%</div>
                <div className='info-item'>Atmospheric Nitrogen : {data.atmosphere.nitrogen*100}%</div>
                <div className='info-item'>Organic Matter: {data.uGround.organicSoil}</div>
            </div>
            <button className='cycle-button'onClick={()=>{cycleFunc(); upCycleFunc()}}>Cycle</button>
            <button className='cycle-button'onClick={resetFunc}>Reset</button>
        </div>
    )
}

export default Info
