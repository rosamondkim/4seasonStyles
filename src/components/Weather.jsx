import React, { useEffect, useState } from 'react';
import useCurrentLocation from 'hooks/useCurrentLocation';
import axios from 'axios';
import WeatherDescription from './WeatherDescription';
const Weather = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [weatherInfo, setWeatherInfo] = useState({});
  // const OPEN_WEATHER_MAP_API = process.env.REACT_APP_OPEN_WEATHER_MAP_API;
  const OPEN_WEATHER_MAP_API = '7b2cd414656e53bd65ccf81378f4d509';
  const { location, error } = useCurrentLocation();


  useEffect(() => {
    if (error) {
      return;
    }
    if (!location) {
      return;
    }
    const getFetch = async () => {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${OPEN_WEATHER_MAP_API}&units=metric`,
        )
        .then((res) => updateWeatherInfo(res), setIsLoading(false));
    };

    const updateWeatherInfo = (res) => {
      const weatherData = res.data;

      setWeatherInfo({
        weather: WeatherDescription[weatherData.weather[0].id].title,
        temp: weatherData.main.temp.toFixed(1),
        tempMax: weatherData.main.temp_max.toFixed(1),
        tempMin: weatherData.main.temp_min.toFixed(1),
        humidity: weatherData.main.humidity,
        windSpeed: weatherData.wind.speed,
      });
    };
    getFetch();
  }, [location]);
  console.log(weatherInfo);
  return isLoading ? (
    <span>날씨정보 못받아옴</span>
  ) : (
    <div>
      <div>날씨 : {weatherInfo.weather}</div>
      <div>기온: {weatherInfo.temp}</div>
      <div> 최고기온: {weatherInfo.tempMax}</div>
      <div>최저기온 : {weatherInfo.tempMin}</div>
      <div>습도 : {weatherInfo.humidity}</div>
    </div>
  );
};

export default Weather;
