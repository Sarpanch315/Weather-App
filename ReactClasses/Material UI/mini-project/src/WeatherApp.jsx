import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({
        city : "Delhi",
        feelsLike : 37.5,
        temp : 31,
        tempMin : 28,
        tempMax : 34.2,
        humidity : 28,
        weather : "Haze",
    });
     let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
     }
    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1> 
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox Info={weatherInfo}/>
        </div>
    )
}