import './WeatherData.css';
import DailyWeatherIcon from '../WeatherIcon/WeatherIcon';

const DailyWeatherList = (props) => {
    const { dailyWeather } = props;
    return (
        <section className='weather'>
            <h2>{dailyWeather.day}</h2>

            <div>
                <DailyWeatherIcon dailyWeather = {dailyWeather}/>
            </div>
            

            <p><span>conditions: </span> {dailyWeather.conditions}</p>
            <p><span>time: </span> {dailyWeather.time} </p>
        </section>
    );
};

export default DailyWeatherList;