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

    async function handleSearch(){
        const data = await getWeatherFromApi(searchValue);
        setForecastData(data);
        // setSearchValue("");
    }

    return (
        <main className="App">
            <Header/>
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} handleSearch={handleSearch}/>
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
