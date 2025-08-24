import { useState } from 'react';
import InfoBox from './InfoBox'
import SearchBox from './SearchBox'

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Mumbai",
        feelsLike: 29.74,
        humidity: 82,
        temp: 26.92,
        tempMax: 26.92,
        tempMin: 26.92,
        weather: "overcast clouds"
    });

    let updateInfo = (newinfo) =>{
        setWeatherInfo(newinfo);
    }
    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App by KOUSIK</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}