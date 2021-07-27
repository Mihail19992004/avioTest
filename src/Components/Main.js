import React from 'react'
import {Fly} from "./Fly";

export function Main({test}) {
    console.log(test.result.flights[4].flight.legs)
    return (
        <div className='main-main'>
            <Fly legs={test.result.flights[4].flight.legs}  />
        </div>
    )
}