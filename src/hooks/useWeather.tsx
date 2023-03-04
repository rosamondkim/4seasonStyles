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
