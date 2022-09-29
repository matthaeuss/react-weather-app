import {useState} from "react";

import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";
import WeatherForecastChart from "./components/WeatherForecastChart";
import {getWeatherFromApi} from "./utils/api";

import './styles/main.scss';
import Header from "./components/Header";


function App() {
    const [searchValue, setSearchValue] = useState('');
    const [forecastData, setForecastData] = useState({});
    const [errorMsg, setErrorMsg] = useState('');

    function handleSearch() {
        if (searchValue !== "") {
            getWeatherFromApi(searchValue)
                .catch((err) => {
                    console.log(err)
                }).then((data) => {
                if (data.error) {
                    setErrorMsg(data.error.message);
                    setForecastData({});
                } else {
                    setForecastData(data);
                    setErrorMsg("");
                }
            })
        }
    }

    return (
        <main className="App">
            <Header/>
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} handleSearch={handleSearch}/>
            {!!errorMsg && (
                <p>{errorMsg}</p>
            )}
            {!!Object.keys(forecastData).length && (
                <>
                    <Weather currentWeather={{...forecastData.current, ...forecastData.location}}/>
                    <WeatherForecastChart forecast={forecastData?.forecast?.forecastday}/>
                </>
            )}
        </main>
    );
}

export default App;
