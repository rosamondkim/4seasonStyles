import React from 'react';
// import * as S from './WeatherSectionStyle';
import useWeather from '../../../hooks/useWeather';
import styled from 'styled-components';

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
