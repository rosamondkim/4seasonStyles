import React from 'react';
// import * as S from './WeatherSectionStyle';
import useWeather from '../../hooks/useWeather';
import styled from 'styled-components';

interface WeatherProps {
  icon: string;
  address: string;
  temp: number;
  weatherdisc: string;
}

/**
 * 필요한것:
 * icon
 * 주소
 * 날씨
 * 현재기온
 */

const WeatherSection = () => {
  const { weather, error } = useWeather();
  const isLoading = weather === null;

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div>Temperature: {weather?.temperature}</div>
          <div>Description: {weather?.description}</div>
          <div>feels: {weather?.feels}</div>
          <div>습도: {weather?.humidity}</div>
          <div>체감온도:{weather?.feels}</div>
          <div>최고기온:{weather?.temp_max}</div>
          <div>최저기온:{weather?.temp_min}</div>
          <WeatherIcon src={weather?.icon} alt="날씨로고" />
        </div>
      )}
    </div>
  );
};

export default WeatherSection;

const WeatherIcon = styled.img`
  width: 50px;
  height: 50px;
`;
