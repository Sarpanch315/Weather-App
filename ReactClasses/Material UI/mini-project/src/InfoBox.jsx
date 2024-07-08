import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import "./InfoBox.css";
export default function InfoBox({Info}){
    const INIT_URL = "https://images.unsplash.com/photo-1561553873-e8491a564fd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhhemUlMjB3ZWF0aGVyJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D";
    const HOT_URL = "https://plus.unsplash.com/premium_photo-1677186162878-ff5780321d74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90JTIwd2VhdGhlciUyMGltYWdlfGVufDB8fDB8fHww";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1700852003618-a113c6e777bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZCUyMHdlYXRoZXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";
    const RAINY_URL = "https://images.unsplash.com/photo-1561553543-e4c7b608b98d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhaW55JTIwc2Vhc29uJTIwd2VhdGhlciUyMGltYWdlfGVufDB8fDB8fHww";
    return( <div className="InfoBox">
        
       <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={Info.humidity>60?RAINY_URL:Info.temp > 15?HOT_URL:<AcUnitOutlinedIcon/>}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Info.city}
           {Info.humidity>60?<UmbrellaIcon/>:Info.temp > 15?<LightModeIcon/>:COLD_URL}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature {Info.temp}&deg;C</p>
          <p>Humidity {Info.humidity}</p>
          <p>Min Temp {Info.tempMin}&deg;C</p>
          <p>Max Temp {Info.tempMax}&deg;C </p>
          <p>The Weather can be described as <i>{Info.weather}</i> and feels like {Info.feelsLike}&deg;C </p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>)
}