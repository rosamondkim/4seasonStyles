// import { useEffect, useState } from 'react';
// import axios, { AxiosResponse } from 'axios';
// import useCurrentLocation from 'hooks/useCurrentLocation';
// import WeatherDescription from '../utils/WeatherDescription';
// import WeatherImageMap from 'utils/WeatherImageMap';

// //useWeather 커스텀 훅

// interface WeatherInfo {
//   logo: string;
//   weather: string;
//   temp: number;
//   feels: number;
//   tempMax: number;
//   tempMin: number;
//   humidity: number;
//   umbrella: number;
// }

// const useWeather = (): WeatherInfo => {
//   const { location, error } = useCurrentLocation();
//   const OPEN_WEATHER_MAP_API = process.env.REACT_APP_OPEN_WEATHER_MAP_API;
//   const [isLoading, setIsLoading] = useState<boolean>(true);

//   const initWeatherInfo = {
//     logo: '',
//     weather: '',
//     temp: 0,
//     feels: 0,
//     tempMax: 0,
//     tempMin: 0,
//     humidity: 0,
//     windSpeed: 0,
//     umbrella: 0,
//   };

//   const [weatherInfo, setWeatherInfo] = useState<WeatherInfo>(initWeatherInfo);

//   useEffect(() => {
//     if (error) {
//       return;
//     }
//     if (!location) {
//       return;
//     }
//     const getFetch = async () => {
//       await axios
//         .get(
//           `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${OPEN_WEATHER_MAP_API}&units=metric`,
//         )
//         .then(
//           (res: AxiosResponse) => updateWeatherInfo(res.data),
//           (res: AxiosResponse) => setIsLoading(false),
//         );
//     };

//     const updateWeatherInfo = (res: any) => {
//       console.log(res);
//       // 이 res 타입 수정해야함
//       setIsLoading(false);
//       setWeatherInfo({
//         logo: WeatherImageMap[res.weather[0].id],
//         temp: res.main.temp.toFixed(1),
//         feels: res.main.feels_like.toFixed(1),
//         tempMax: res.main.temp_max.toFixed(1),
//         tempMin: res.main.temp_min.toFixed(1),
//         humidity: res.main.humidity,
//         weather: WeatherDescription[res.weather[0].id].title,
//         umbrella: res.weather[0].id,
//       });
//     };
//     getFetch();
//   }, [location]);

//   return { weatherInfo, isLoading };
// };

// export default useCurrentLocation;

import { useState, useEffect } from 'react';
import axios from 'axios';
import useCurrentLocation from './useCurrentLocation';
import WeatherDescription from '../utils/WeatherDescription';
import WeatherImageMap from 'utils/WeatherImageMap';

interface Weather {
  feels: string;
  temperature: number;
  temp_max: string;
  temp_min: string;
  description: string;
  icon: string;
  humidity: number;
}

interface WeatherData {
  main: {
    feels_like: number;
    temp: number;
    temp_max: number;
    temp_min: number;
    humidity: number;
  };
  weather: {
    id: number;
    description: string;
    icon: string;
  }[];
}

function useWeather() {
  const [weather, setWeather] = useState<Weather | null>(null);
  const { location, error } = useCurrentLocation();

  useEffect(() => {
    const fetchWeather = async () => {
      if (location) {
        const { lat, lon } = location;
        const apiKey = process.env.REACT_APP_OPEN_WEATHER_MAP_API;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        const response = await axios.get<WeatherData>(url);
        const data = response.data;
        console.log(data);
        const weather: Weather = {
          feels: data.main.feels_like.toFixed(1),
          temperature: data.main.temp,
          temp_max: data.main.temp_max.toFixed(1),
          temp_min: data.main.temp_min.toFixed(1),
          icon: WeatherImageMap[data.weather[0].id],
          humidity: data.main.humidity,
          description: WeatherDescription[data.weather[0].id].title,
        };
        setWeather(weather);
      }
    };

    if (location) {
      fetchWeather();
    }
  }, [location]);

  return { weather, error };
}

export default useWeather;
