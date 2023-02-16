import React, { useEffect, useState } from 'react';
import useCurrentLocation from 'hooks/useCurrentLocation';
import axios, { AxiosResponse } from 'axios';
import WeatherDescription from './WeatherDescription';
import RecommendTops from './recommendClothes/RecommendTops';

interface WeatherInfo {
  weather: string;
  temp: number;
  tempMax: number;
  tempMin: number;
  humidity: number;
}

const Weather = () => {
  const { location, error } = useCurrentLocation();
  const OPEN_WEATHER_MAP_API = process.env.REACT_APP_OPEN_WEATHER_MAP_API;
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const initWeatherInfo = {
    weather: '',
    temp: 0,
    tempMax: 0,
    tempMin: 0,
    humidity: 0,
    windSpeed: 0,
  };

  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo>(initWeatherInfo);

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
        .then(
          (res: AxiosResponse) => updateWeatherInfo(res.data),
          (res: AxiosResponse) => setIsLoading(false),
        );
    };

    const updateWeatherInfo = (res: Request) => {
      console.log(res);
      setWeatherInfo({
        temp: res.main.temp.toFixed(1),
        tempMax: res.main.temp_max.toFixed(1),
        tempMin: res.main.temp_min.toFixed(1),
        humidity: res.main.humidity,
        weather: WeatherDescription[res.weather[0].id].title,
      });
    };
    getFetch();
  }, [location]);

  return isLoading ? (
    <span>날씨정보 받아오는중</span>
  ) : (
    <div>
      <div>날씨 : {weatherInfo.weather}</div>
      <div>기온: {weatherInfo.temp}</div>
      <div> 최고기온: {weatherInfo.tempMax}</div>
      <div>최저기온 : {weatherInfo.tempMin}</div>
      <div>습도 : {weatherInfo.humidity}</div>
      <div>
        오늘의 룩 추천 : <RecommendTops temp={weatherInfo.temp} />
      </div>
    </div>
  );
};

export default Weather;
