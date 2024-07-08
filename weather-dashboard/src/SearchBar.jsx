import { useState } from 'react';
import { TextField, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';
export default function SearchBar(){

    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "b8dfd343855529b005a5e8f514eb2e7c";

    const handleInputChange = async (e) => {
        setQuery(e.target.value);
        if (e.target.value.length > 2) {
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/find?q=${e.target.value}&appid=${API_KEY}`);
            setSuggestions(response.data.list);
        } else {
            setSuggestions([]);
        }
    };
    return (
        <div>
            <TextField
                label="Search City"
                variant="outlined"
                fullWidth
                value={query}
                onChange={handleInputChange}
            />
            <List>
                {suggestions.map((city) => (
                    <ListItem key={city.id} button onClick={() => onCitySelect(city)}>
                        <ListItemText primary={city.name} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}