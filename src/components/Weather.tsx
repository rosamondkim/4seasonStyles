import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import styled from 'styled-components';
import LOGO from '../assets/icons/weather/201.png';
import useCurrentLocation from 'hooks/useCurrentLocation';
import WeatherDescription from '../utils/WeatherDescription';
import WeatherImageMap from 'utils/WeatherImageMap';

import RecommendTops from './recommendClothes/RecommendTops';
import RecommendBottoms from './recommendClothes/RecommendBottoms';
import RecommendJackets from './recommendClothes/RecommendJackets';
import RainyDay from './recommendClothes/RainyDay';

interface WeatherInfo {
  logo: string;
  weather: string;
  temp: number;
  feels: number;
  tempMax: number;
  tempMin: number;
  humidity: number;
  umbrella: number;
}

const Weather = () => {
  const { location, error } = useCurrentLocation();
  const OPEN_WEATHER_MAP_API = process.env.REACT_APP_OPEN_WEATHER_MAP_API;
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const initWeatherInfo = {
    logo: '',
    weather: '',
    temp: 0,
    feels: 0,
    tempMax: 0,
    tempMin: 0,
    humidity: 0,
    windSpeed: 0,
    umbrella: 0,
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

    const updateWeatherInfo = (res: any) => {
      console.log(res);
      // 이 res 타입 수정해야함
      setIsLoading(false);
      setWeatherInfo({
        logo: WeatherImageMap[res.weather[0].id],
        temp: res.main.temp.toFixed(1),
        feels: res.main.feels_like.toFixed(1),
        tempMax: res.main.temp_max.toFixed(1),
        tempMin: res.main.temp_min.toFixed(1),
        humidity: res.main.humidity,
        weather: WeatherDescription[res.weather[0].id].title,
        umbrella: res.weather[0].id,
      });
    };
    getFetch();
  }, [location]);

  return isLoading ? (
    <span>날씨정보 받아오는중</span>
  ) : (
    <div>
      <div>날씨 : {weatherInfo.weather}</div>
      <div>체감온도 : {weatherInfo.feels}</div>
      <div>기온: {weatherInfo.temp}</div>
      <div> 최고기온: {weatherInfo.tempMax}</div>
      <div>최저기온 : {weatherInfo.tempMin}</div>
      <div>습도 : {weatherInfo.humidity}</div>
      <h1>오늘의 옷 추천 :</h1>
      <div>
        <RecommendJackets temp={weatherInfo.temp} />
      </div>
      <div>
        <RecommendTops temp={weatherInfo.temp} />
      </div>
      <div>
        <RecommendBottoms temp={weatherInfo.temp} />
      </div>

      <div>
        <RainyDay WeatherNumber={weatherInfo.umbrella} />
      </div>
      <WeatherIcon src={weatherInfo.logo} alt="날씨 로고"></WeatherIcon>
    </div>
  );
};

export default Weather;

const WeatherIcon = styled.img`
  width: 130px;
  height: 130px;
`;
