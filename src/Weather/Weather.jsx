import Search from './Search';
import Currentweather from './types/Currentweather';
import { WEATHER_API_URL,WEATHER_API_KEY } from './api';
import { useState } from 'react';
import Forecast from './types/Forecast';
import { Box } from '@mui/material';


export function Weather() {



  const [currentweather,setcurrentweather] = useState(null);
  const [forecast,setforecast] = useState(null);



  const handleOnSearchChange = (searchData) =>{
   const [lat,lon] = searchData.value.split(" ");

   const currentweatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
   const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

   Promise.all([currentweatherFetch,forecastFetch])
   .then(async (response)=>{
    const weatherResponse = await response[0].json();
    const forecastResponse = await response[1].json();

    setcurrentweather({city: searchData.label,...weatherResponse});
    setforecast({city: searchData.label,...forecastResponse});
   })
  }

  

  
  return (
    <Box sx={{
      width:'100%',
      height:{
        xs:'auto',
        md:'100vh'
      },
      backgroundImage:'linear-gradient(to right, #fff,#d1d1d1)',
      padding:'20px'
    }}>
      <Search onSearchChange={handleOnSearchChange}/>
      { currentweather && <Currentweather data={currentweather}/>}
      {forecast && <Forecast data={forecast}/>}
 
    </Box>
  );
}

export default Weather;
