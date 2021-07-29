import React from 'react'

export function Filtres({setSort, sort}) {
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
                    <form action="" onClick={(e)=> setSort({...sort, filterOne: e.target.checked})}>
                        <input type="checkbox" id='3' />
                        <label htmlFor="3">-1 пересадка</label>
                    </form>
                    <form action="" onClick={(e)=> setSort({...sort, filterTwo: e.target.checked})}>
                        <input type="checkbox" id='4' />
                        <label htmlFor="4">-без пересадок</label>
                    </form>
                </div>
                <div className="price">
                    <p>Цена</p>
                    <form action="">
                        <label htmlFor="5">от</label>
                        <input type="number" value={sort.price_down} onChange={(e)=> setSort({
                            ...sort,
                            price_down: e.target.value
                        })} id='5' />

                    </form>
                    <form action="">
                        <label htmlFor="6">до</label>
                        <input type="number" value={sort.price_up} onChange={(e)=> setSort({
                            ...sort,
                            price_up: e.target.value
                        })} id='6' />

                    </form>
                </div>
            </div>
        </div>
    )
}