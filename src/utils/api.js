const API_KEY = 'ca98464ba7f04c9caae191016222709';
const BASE_URL = 'http://api.weatherapi.com/v1/forecast.json';


export async function getWeatherFromApi(city){
    const config = {
        key: API_KEY,
        q: city,
        days: 7,
        aqi: "no",
        alerts: "no"
    }

    const response = await fetch(`${BASE_URL}?${new URLSearchParams(config)}`)
    return response.json();
}

// TODO status code handling