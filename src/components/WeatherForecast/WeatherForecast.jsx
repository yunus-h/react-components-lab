import './WeatherForecast.css'

const DailyWeatherList = (props) => {
    const { dailyWeather } = props;
    return (
        <section className='weather'>
            <h3>{dailyWeather.day}</h3>
            <div><img src={dailyWeather.img} alt={dailyWeather.imgAlt}/> </div> 
            <div><span>conditions: </span> {dailyWeather.conditions}</div>
            <div><span>time: </span> {dailyWeather.time} </div>
        </section>
    )
}

export default DailyWeatherList;