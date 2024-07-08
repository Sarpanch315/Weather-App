import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';
import './SearchBox.css'
import { useState } from 'react';

import { red } from '@mui/material/colors';
export default function SearchBox({updateInfo}){
    let [city,setCity] = useState("");
    let [error,setError] = useState(false)

    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "b8dfd343855529b005a5e8f514eb2e7c";

    let getWeatherInfo = async() => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
    
            let result = {
                city : city,
                temp : jsonResponse.main.temp,
                tempMin  : jsonResponse.main.temp_min,
                tempMax : jsonResponse.main.temp_max,
                humidity : jsonResponse.main.humidity,
                feelsLike : jsonResponse.main.feels_like,
                Weather : jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        }
        catch(err) {
            throw err;
        }
    
    };

    const handleChange = async(evt) => {
        const input = evt.target.value ;
        setCity(input);
    };
    
    let handleSubmit = async(evt) => {
        evt.preventDefault();
        try {
            let newInfo =  await getWeatherInfo(city);
            setCity("");
            
            updateInfo(newInfo);
        } 
        catch (error) {
            setError(true);
        }  
    };
    return(
        <div className='SearchBox'> 
            <form onSubmit={handleSubmit}>
            <TextField
             id="city"
              label="City Name"
               variant="outlined"
                required
                 value={city}
                 onChange={handleChange}
                />
            <br /><br />
            <Button variant="contained"  type='submit' >  Search  </Button>
            {error && <p style={{color: red}}> No such City Found</p>}
            </form>
        </div>
    );
}