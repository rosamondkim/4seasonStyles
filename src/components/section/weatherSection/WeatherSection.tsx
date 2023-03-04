import React from 'react';
import * as S from './WeatherSectionStyle';
import useWeather from '../../../hooks/useWeather';
import Address from '../../Address';

type WeatherIconProps = {
  backgroundImageUrl: string;
};

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
        <S.Wrapper>
          <S.WeatherIcon backgroundImageUrl={weather?.icon} />
          <S.DiscWrapper>
            <S.AddressInfo>
              <Address />
            </S.AddressInfo>
            <S.WeatherDesc>{weather?.description}</S.WeatherDesc>
            <S.Temp>{weather?.temperature.toFixed(1)}°</S.Temp>
          </S.DiscWrapper>
        </S.Wrapper>
      )}
    </div>
  );
};

export default WeatherSection;
