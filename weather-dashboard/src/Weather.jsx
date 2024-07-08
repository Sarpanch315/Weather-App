// src/components/Weather.js
import  { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import axios from 'axios';

const Weather = ({ city }) => {
    const [weatherData, setWeatherData] = useState(null);
    let API_KEY = "b8dfd343855529b005a5e8f514eb2e7c";
    useEffect(() => {
        const fetchWeather = async () => {
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${API_KEY}&units=metric`);
            setWeatherData(response.data);
        };
        fetchWeather();
    }, [city]);

    if (!weatherData) return null;

    return (
        <Card>
            <CardContent>
                <Typography variant="h5">{weatherData.name}</Typography>
                <Typography variant="h6">{weatherData.weather[0].description}</Typography>
                <Typography>Temperature: {weatherData.main.temp} °C</Typography>
                <Typography>Humidity: {weatherData.main.humidity}%</Typography>
                <Typography>Wind Speed: {weatherData.wind.speed} m/s</Typography>
            </CardContent>
        </Card>
    );
};

export default Weather;
