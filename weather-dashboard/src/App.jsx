import  { useState } from 'react';
import { Container, CssBaseline } from '@mui/material';
import SearchBar from './SearchBar.jsx';
import Weather from './Weather.jsx';
import Forecast from './Forecast.jsx';

function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  return (
    <Container>
        <CssBaseline />
        <SearchBar onCitySelect={setSelectedCity} />
        <Weather city={selectedCity} />
        <Forecast city={selectedCity} />
           
       
    </Container>
);
 
  
}

export default App
