import React from 'react'

const Info = ({ data, cycleFunc, resetFunc, buildFunc, toggleFunc, resetCycleFunc, gameData }) => {

    return (
        <div className='info-panel'>
            <div className='info-item-container'>
                <div className='info-item-top'>Cycle: {gameData.cycle}</div>
                <div className='info-item'>World Name: {gameData.worldName}</div>
                <div className='info-item'>Selected: {gameData.selected}</div>
            </div>
            <div className='info-item-container'>
                <div className='info-item-top'>X: {data.position.xPos} Y: {data.position.yPos} Index: {data.tileId}</div>
                <div className='info-item'>Surface Type: {data.surface.surfaceType}</div>
                {/* <div className='info-item'>{data.surface.surfaceType === "land" ? "Altitude: " + Math.round(data.surface.altitude) : "Sea Level: " + Math.round(data.surface.waterLevel)}</div> */}
                <div className='info-item'>{"Altitude: " + Math.round(data.surface.altitude)}</div>
                <div className='info-item'>{"Sea Level: " + Math.round(data.surface.waterLevel)}</div>
                <div className='info-item'>Atmospheric Oxygen : {data.atmosphere.oxygen*100}%</div>
                <div className='info-item'>Atmospheric Nitrogen : {data.atmosphere.nitrogen*100}%</div>
                <div className='info-item'>Organic Matter: {data.uGround.organicSoil}</div>
                <div className='info-item'>Tectonic Plate: {data.surface.tectonicPlate}</div>
                
            </div>
            <div className='cycle-button-container'>
                <button className='cycle-button'onClick={()=>{cycleFunc();}}>Cycle</button>
                <button className='cycle-button'onClick={()=>{resetCycleFunc(); resetFunc()}}>Reset</button>
                <button className='cycle-button'onClick={()=>{resetCycleFunc(); buildFunc()}}>Build</button>
                <button className='cycle-button'onClick={()=>{toggleFunc();}}>Toggle</button>
                <button className='cycle-button'onClick={()=>{}}>Blank</button>
            </div>

        </div>
    )
}

export default Info
