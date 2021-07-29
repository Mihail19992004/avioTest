import React, {useState} from 'react'
import {Fly} from "./Fly";

export function Main({allFly, sort}) {
    const [lengthFly, setLengthFly] = useState(2)


    return (
        <div className='main-main'>

            {
                allFly.map((e, i)=> i < lengthFly ? (<Fly data={allFly[i]} />) : null)
            }
            {/*<Fly data={allFly[0]} />*/}
            <div className="border-button">
                    <div onClick={()=> setLengthFly(lengthFly+ 2)} className="button-more">
                        <p>Показать еще</p>
                    </div>
            </div>

        </div>
    )
}