
import './App.css';
import {Filtres} from "./Components/Filters";
import React, {useEffect, useState} from "react";
import {Main} from "./Components/Main";
import test from './flights.json'
function App() {
    const [sort, setSort] = useState({
        value: null,
        filterOne: false,
        filterTwo: false,
        price_down: '',
        price_up: ''

    })




    let fly = []
    for (let i = 0; i < test.result.flights.length; i++) {
            const data = {
                up: {
                    airport_start: test.result.flights[i].flight.legs[0].segments[0].airline.caption,
                    price: test.result.flights[i].flight.price.total.amount,
                    city_from: test.result.flights[i].flight.legs[0].segments[0].departureCity.caption,
                    city_to: test.result.flights[i].flight.legs[0].segments.slice(-1)[0]?.arrivalCity?.caption,
                    airport_from_code: test.result.flights[i].flight.legs[0].segments[0].departureAirport.uid,
                    airport_code_to: test.result.flights[i].flight.legs[0].segments.slice(-1)[0]?.arrivalAirport?.uid,
                    airport_from: test.result.flights[i].flight.legs[0].segments[0].departureAirport.caption,
                    airport_to: test.result.flights[i].flight.legs[0].segments.slice(-1)[0].arrivalAirport.caption,
                    date_from: test.result.flights[i].flight.legs[0].segments[0].departureDate,
                    statement: test.result.flights[i].flight.legs[0].segments,
                    date_to: test.result.flights[i].flight.legs[0].segments.slice(-1)[0].arrivalDate,
                    duration: test.result.flights[i].flight.legs[0].duration,
                    peresadca: test.result.flights[i].flight.legs[0].segments.length - 1

                },
                down: {
                    airport_start: test.result.flights[i].flight.legs[1].segments[0].airline.caption,
                    price: test.result.flights[i].flight.price.total.amount,
                    city_from: test.result.flights[i].flight.legs[1].segments[0]?.departureCity?.caption,
                    city_to: test.result.flights[i].flight.legs[1].segments.slice(-1)[0].arrivalCity.caption,
                    airport_from_code: test.result.flights[i].flight.legs[1].segments[0].departureAirport.uid,
                    airport_code_to: test.result.flights[i].flight.legs[1].segments.slice(-1)[0].arrivalAirport.uid,
                    airport_from: test.result.flights[i].flight.legs[1].segments[0].departureAirport.caption,
                    airport_to: test.result.flights[i].flight.legs[1].segments.slice(-1)[0].arrivalAirport.caption,
                    date_from: test.result.flights[i].flight.legs[1].segments[0].departureDate,
                    statement: test.result.flights[i].flight.legs[1].segments,
                    date_to: test.result.flights[i].flight.legs[1].segments.slice(-1)[0].arrivalDate,
                    duration: test.result.flights[i].flight.legs[1].duration,
                    'peresadca': test.result.flights[i].flight.legs[1].segments.length - 1
                },
                long: (new Date(test.result.flights[i].flight.legs[0].segments.slice(-1)[0].arrivalDate).getMinutes() + (new Date(test.result.flights[i].flight.legs[0].segments.slice(-1)[0].arrivalDate).getHours()* 60)
                    + (new Date(test.result.flights[i].flight.legs[0].segments.slice(-1)[0].arrivalDate).getDate()* 24 * 60) )
                    - (new Date(test.result.flights[i].flight.legs[0].segments[0].departureDate).getMinutes() +
                        (new Date(test.result.flights[i].flight.legs[0].segments[0].departureDate).getHours() * 60)  + (new Date(test.result.flights[i].flight.legs[0].segments[0].departureDate).getDate()* 24 * 60))

            }

            fly.push(data)
        }
    const [allFly, setFly] = useState([...fly])


    function getSort () {
        setFly([...fly])
        if (sort.value === 'low-price') {
            setFly([...allFly.sort((a,b)=> a.up.price - b.up.price)])
        }
        if (sort.value === 'high-price') {
            setFly([...allFly.sort((a,b)=> b.up.price - a.up.price)])
        }
        if (sort.value === 'time-road') {
            setFly([...allFly.sort((a,b)=> a.long - b.long)])
        }

            if(!allFly) {
                setFly(fly)
            }
            setFly([...allFly.filter((e,i)=>sort.price_down? e.up.price > +(sort.price_down) : true)])



    }
    useEffect(()=> {
        getSort()
        console.log(sort)
    }, [sort])

        return (
            <div className="App">
                <Filtres sort={sort} setSort={setSort}/>
                <Main sort={sort} allFly={allFly} />
            </div>
        );

}
export default App;
