import React from 'react'

const Info = ({ data }) => {
    return (
        <div className='info-panel'>
            <div className='info-item-container'>
                <div className='info-item'>Surface Type: {data.surface.surfaceType}</div>
                <div className='info-item'>1</div>
                <div className='info-item'>1</div>
                <div className='info-item'>1</div>
                <div className='info-item'>1</div>
            </div>
        </div>
    )
}

export default Info
