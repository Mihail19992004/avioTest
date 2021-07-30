import React from 'react'

export function Filtres({favorite, setFavorite, setSort, sort, filter, setFilter, price, setPrice}) {
    function radioHandler(e) {
        const arr = document.querySelectorAll('.btn')
        console.log(e.target.name)
        setSort({
            value: e.target.name
        })
       arr[+(e.target.id)].checked=true
        arr.forEach((el,i)=> i !== +(e.target.id) ? el.checked=false : null)
    }
    return (
        <div className='filtres-main'>
            <div className="options-filter">
                <div className="sort">
                    <p>Сортировать</p>
                    <div className="radio">
                        <form action="" onClick={radioHandler}>
                            <input type="radio" id="0" name='low-price' className='btn'/>
                            <label htmlFor="0">- По возрастанию цены</label>
                        </form>
                        <form action="" onClick={radioHandler}>
                            <input type="radio" name='high-price' id="1" className='btn'/>
                            <label htmlFor="1">- По убыванию цены</label>
                        </form>
                        <form action="" onClick={radioHandler}>
                            <input type="radio" name='time-road' id="2" className='btn'/>
                            <label htmlFor="2">- По впемени в пути</label>
                        </form>




                    </div>
                </div>



                <div className="filter">
                    <p>Фильтровать</p>
                    <form action="" onClick={(e)=>
                    {
                        setFilter({...filter, one: e.target.checked})

                    }

                    }>
                        <input checked={filter.one} type="checkbox" id='3' />
                        <label htmlFor="3">-1 пересадка</label>
                    </form>
                    <form action="" onClick={(e)=> setFilter({...filter, none: e.target.checked})}>
                        <input checked={filter.none} type="checkbox" id='4' />
                        <label htmlFor="4">-без пересадок</label>
                    </form>
                </div>




                <div className="price">
                    <p>Цена</p>
                    <form action="">
                        <label htmlFor="5">от</label>
                        <input type="number" value={price.price_down} onChange={(e)=> setPrice({...price, price_down: +(e.target.value)})}  id='5' />

                    </form>
                    <form action="">
                        <label  htmlFor="6">до</label>
                        <input type="number" value={price.price_up} onChange={(e)=> setPrice({...price, price_up: +(e.target.value)})} id='6' />

                    </form>
                </div>

                    <p>Авиокомпании</p>
                    <form action="" onClick={(e)=> setFavorite({lot: false, aero: e.target.checked})}>
                        <input checked={favorite.aero} type="checkbox" id='7'/>
                        <label htmlFor="7">Аэрофлот - российские авиалинии от 33697.00</label>
                    </form>
                    <form action="" onClick={(e)=> setFavorite({aero: false, lot: e.target.checked})}>
                        <input checked={favorite.lot} type="checkbox" id='8'/>
                        <label htmlFor="8">LOT Polish Airlines от 21049.00 руб</label>
                    </form>


            </div>
        </div>
    )
}