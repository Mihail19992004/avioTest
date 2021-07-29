import React from 'react'
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
export function Fly({data}) {
    const formatedTime = (time) => {
        const hours = new Date(time).getHours().toString().length === 1 ? `0${new Date(time).getHours()}` : new Date(time).getHours()
        const minute = new Date(time).getMinutes().toString().length === 1 ? `0${new Date(time).getMinutes()}` : new Date(time).getMinutes()
        return `${hours}:${minute}`
    }
    const formatedDay = (time) => {
        return `${new Date(time).getDate()} ${months[new Date(time).getMonth()]}. ${days[new Date(time).getDay()]}`
    }
    const formatedDuration = (time_from, time_to) => {
        const minutes = (new Date(time_to).getMinutes() + (new Date(time_to).getHours()* 60) + (new Date(time_to).getDate()* 24 * 60) )
            - (new Date(time_from).getMinutes() + (new Date(time_from).getHours() * 60)  + (new Date(time_from).getDate()* 24 * 60))
        let hours = Math.trunc(minutes/60);
        let minute = minutes % 60;
        return hours + ' ч ' + minute + ' м '
    }

    var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
    var months=[
        'янв',
        'фев',
        'мар',
        'апр',
        'мая',
        'июн',
        'июл',
        'авг',
        'сен',
        'окт',
        'ноя',
        'дек',
    ];
    return (
        <div className='fly-main'>

            <div className="header">
                <h2>{data.up.airport_start}</h2>
                <div className="cost-data">
                    <h3>{data.up.price} ₽</h3>
                    <p>Стоимость для одного взрослого пассажира</p>
                </div>

            </div>

            <div className="fly-from">
                <div className="from-to-name">
                    <p>{data.up.city_from}</p>
                    <p>{data.up.airport_from}</p>
                    <p className='blue'>({data.up.airport_from_code})</p>
                    <TrendingFlatIcon />
                    <p>{data.up.city_to}</p>
                    <p>{data.up.airport_to}</p>
                    <p className='blue'>({data.up.airport_code_to})</p>
                </div>
                <div className="time-fly">
                    <div className="time">
                        <p>{formatedTime(data.up.date_from)}</p>
                        <p className='small-blue'>{formatedDay(data.up.date_from)}</p>
                    </div>
                    <div className="time">
                        <QueryBuilderIcon />
                        <p>{formatedDuration(data.up.date_from, data.up.date_to)}</p>
                    </div>
                    <div className="time">
                        <p>{formatedTime(data.up.date_to)}</p>
                        <p className='small-blue'>{formatedDay(data.up.date_to)}</p>
                    </div>

                </div>
                {
                    data.up.peresadca? (<div className="peresadka">
                        <p>1 пересадка</p>
                    </div>) : null
                }

                <div className="fly-creator">
                    <p>Рейс выполняет: {data.up.airport_start}</p>
                </div>
            </div>

            <div className="fly-to">
                <div className="from-to-name">
                    <p>{data.down.city_from}</p>
                    <p>{data.down.airport_from}</p>
                    <p className='blue'>({data.down.airport_from_code})</p>
                    <TrendingFlatIcon />
                    <p>{data.down.city_to}</p>
                    <p>{data.down.airport_to}</p>
                    <p className='blue'>({data.down.airport_code_to})</p>
                </div>
                <div className="time-fly">
                    <div className="time">
                        <p>{formatedTime(data.down.date_from)}</p>
                        <p className='small-blue'>{formatedDay(data.down.date_from)}</p>
                    </div>
                    <div className="time">
                        <QueryBuilderIcon />
                        <p>{formatedDuration(data.down.date_from, data.down.date_to)}</p>
                    </div>
                    <div className="time">
                        <p>{formatedTime(data.down.date_to)}</p>
                        <p className='small-blue'>{formatedDay(data.down.date_to)}</p>
                    </div>

                </div>
                <div className="peresadka">
                    <p>1 пересадка</p>
                </div>
                <div className="fly-creator">
                    <p>Рейс выполняет: {data.down.airport_start}</p>
                </div>
            </div>
            <div className="accept-button">
                <p>ВЫБРАТЬ</p>
            </div>
        </div>
    )
}