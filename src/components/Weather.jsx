function Weather({currentWeather: {temp_c, feelslike_c, condition, humidity, wind_dir, name, country}}) {
    return (
        <div className="weather-summary">
            <h1>{name}</h1>
            <h2>{country}</h2>
            <div className="weather-summary__details">
                <p>Temperature: {temp_c} °C</p>
                <p>Feelslike: {feelslike_c} °C</p>
                <p>Humidity: {humidity}</p>
                <p>Wind direction: {wind_dir}</p>
                <p>Condition: {condition.text}</p>
            </div>
            <img src={condition.icon} alt="icon"/>
        </div>
    );
}

export default Weather;