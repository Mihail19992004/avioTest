import React from 'react'

export function Fly({legs}) {
    console.log(legs[0].segments[0].departureCity.caption)
    return (
        <div className='fly-main'>

            <div className="header">{legs[0].departureCity}</div>
            <div className="fly-from"></div>
            <div className="fly-to"></div>
            <div className="accept-button"></div>
        </div>
    )
}