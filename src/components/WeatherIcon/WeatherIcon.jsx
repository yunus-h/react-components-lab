import './WeatherIcon.css';

const DailyWeatherIcon = (props) => {
    const {dailyWeather} = props;
    return (
        <img src={dailyWeather.img} alt={dailyWeather.imgAlt}/>
    )
}

export default DailyWeatherIcon;