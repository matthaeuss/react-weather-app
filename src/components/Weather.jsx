function Weather({currentWeather: {temp_c, feelslike_c, condition, humidity, wind_dir, name, country}}) {
    return (
        <div className="weather-summary">
            <h2 className="weather-summary__hdl">{name}, {country} <img src={condition.icon} alt="icon"/></h2>
            <div className="weather-summary__details">
                <p>Temperature: {temp_c} °C</p>
                <p>Feelslike: {feelslike_c} °C</p>
                <p>Humidity: {humidity}</p>
                <p>Wind direction: {wind_dir}</p>
                <p>Condition: {condition.text}</p>
            </div>

        </div>
    );
}

export default Weather;