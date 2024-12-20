import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentWeather, setForecast } from './Store';
import Search from './Search';
import Currentweather from './types/Currentweather';
import Forecast from './types/Forecast';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';

export function Weather() {
  const dispatch = useDispatch();
  const { currentWeather, forecast } = useSelector((state) => state.weather);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ');

    const currentweatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentweatherFetch, forecastFetch]).then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      dispatch(setCurrentWeather({ city: searchData.label, ...weatherResponse }));
      dispatch(setForecast({ city: searchData.label, ...forecastResponse }));
    });
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          width: '100%',
          height: {
            xs: 'auto',
            md: 'auto',
          },
          backgroundImage: 'linear-gradient(to right, #fff,#00A9F2)',
          padding: '20px',
        }}
      >
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <Currentweather data={currentWeather} />}
        {forecast && <Forecast data={forecast} />}
      </Box>
    </>
  );
}

export default Weather;
