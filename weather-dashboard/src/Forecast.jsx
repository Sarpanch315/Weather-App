// src/components/Forecast.js
import  { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import axios from 'axios';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Forecast = ({ city }) => {
    const [forecastData, setForecastData] = useState(null);
    let API_KEY = "b8dfd343855529b005a5e8f514eb2e7c";
    useEffect(() => {
        const fetchForecast = async () => {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.coord.lat}&lon=${city.coord.lon}&exclude=current,minutely,hourly,alerts&appid=${API_KEY}&units=metric`);
            setForecastData(response.data);
        };
        fetchForecast();
    }, [city]);

    if (!forecastData) return null;

    const labels = forecastData.daily.map((day) => new Date(day.dt * 1000).toLocaleDateString());
    const temperatures = forecastData.daily.map((day) => day.temp.day);

    const data = {
        labels,
        datasets: [
            {
                label: 'Daily Temperature',
                data: temperatures,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h5">7-Day Forecast</Typography>
                <Grid container spacing={2}>
                    {forecastData.daily.map((day, index) => (
                        <Grid item key={index} xs={12} sm={6} md={3}>
                            <Typography>{new Date(day.dt * 1000).toLocaleDateString()}</Typography>
                            <Typography>Temp: {day.temp.day} °C</Typography>
                            <Typography>{day.weather[0].description}</Typography>
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    );
};

export default Forecast;
