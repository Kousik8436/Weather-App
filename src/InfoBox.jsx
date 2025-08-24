import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox( { info }) {
    const INIT_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnsvBIOUZ8JUuGAwXDpPTi7xI5o2tuRHsHGA&s";

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <div>Temperature = {info.temp}&deg;C</div>
          <div>Humidity = {info.humidity}</div>
          <p>Minimum Temp = {info.tempMin}&deg;C</p>
          <p>Maximum Temp = {info.tempMax}&deg;C</p>
          <p>The Weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    );
}