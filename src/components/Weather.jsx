function Weather({currentWeather: {temp_c, feelslike_c, condition, humidity, wind_dir, name, country}}) {
    return (
        <div style={{color: "white"}}>
            <h1>{name} {country}</h1>
            <p>Temperature: {temp_c} °C</p>
            <p>Feelslike: {feelslike_c} °C</p>
            <p>Humidity: {humidity}</p>
            <p>Wind direction: {wind_dir}</p>
            <p>Condition: {condition.text}</p>
            <img src={condition.icon} alt="icon"/>
        </div>
    );
}

export default Weather;