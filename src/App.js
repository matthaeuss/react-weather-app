import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";
import WeatherForecastChart from "./components/WeatherForecastChart";

import './styles/main.scss';
import {useState} from "react";

function App() {
    const [searchValue, setSearchValue] = useState('');

    function handleSearch(){
        setSearchValue("");
    }

    return (
        <main className="App">
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} handleSearch={handleSearch}/>
            <Weather/>
            <WeatherForecastChart/>
        </main>
    );
}

export default App;
