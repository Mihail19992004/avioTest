
import './App.css';
import {Filtres} from "./Components/Filters";
import React, {useEffect, useState} from "react";
import {Main} from "./Components/Main";
import test from './flights.json'
function App() {
    const [sort, setSort] = useState({
        value: null
    })
    const [filter, setFilter] = useState({
        none: true,
        one: true
    })
    const [price, setPrice] = useState({
        price_down: 0,
        price_up: ''
    })
    const [withFilter, setWithFilter] = useState([])
    const [favorite, setFavorite] = useState({
        aero: false,
        lot: false
    })
    const wprice = []
    console.log(test.result.bestPrices.ONE_CONNECTION.bestFlights[0].carrier.caption)



    let fly = []
    for (let i = 0; i < test.result.flights.length; i++) {
            const data = {
                favorite: {
                    aeroflot_name: test.result.bestPrices.DIRECT.bestFlights[0].carrier.caption,
                    aeroflot_price: test.result.bestPrices.DIRECT.bestFlights[0].price.amount,
                    lot_name: test.result.bestPrices.ONE_CONNECTION.bestFlights[0].carrier.caption,
                    lot_price: test.result.bestPrices.ONE_CONNECTION.bestFlights[0].price.amount
                },
                id: i,
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
        setWithFilter([...fly])
        if (sort.value === 'low-price') {
            setWithFilter([...withFilter.sort((a,b)=> a.up.price - b.up.price)])
        }
        if (sort.value === 'high-price') {
            setWithFilter([...withFilter.sort((a,b)=> b.up.price - a.up.price)])
        }
        if (sort.value === 'time-road') {
            setWithFilter([...withFilter.sort((a,b)=> a.long - b.long)])
        }

    }

    function getFilter () {
        if (filter.one && filter.none) {
            setFly([...wprice[0]])

        } else if (!filter.one && !filter.none) {

            setFly([])

        } else if (filter.none) {

            setFly([...wprice[0].filter(e=> !e.up.peresadca && !e.down.peresadca)])

        }
        else if (filter.one) {

            setFly([...wprice[0].filter(e=> e.up.peresadca && e.down.peresadca)])

        }


    }

    function getPrice () {
        if (price.price_up === 0) {
            setPrice({...price, price_up: ''})
        }
        if (price.price_down === 0) {
            setPrice({...price, price_down: ''})
        }

        wprice.push(withFilter.filter(e=>(typeof price.price_down === 'number'  ? e.up.price > price.price_down : true) && (typeof price.price_up === 'number'  ? e.up.price <= price.price_up : true)))


    }
    function getFavorite() {
        if (favorite.aero) {
            setFly([...fly.filter(e=> e.up.airport_start === e.favorite.aeroflot_name)])
        }
        if (favorite.lot) {
            setFly([...fly.filter(e=> e.up.airport_start === e.favorite.lot_name)])
        }
    }


    useEffect( ()=> {

            getSort()
         getPrice()
         getFilter()
    getFavorite()
        console.log(allFly)
    }, [sort, filter, price, favorite])

        return (
            <div className="App">
                <Filtres favorite={favorite} setFavorite={setFavorite} price={price} setPrice={setPrice} filter={filter} setFilter={setFilter}  sort={sort} setSort={setSort}/>
                <Main sort={sort} allFly={allFly} />
            </div>
        );

}
export default App;
