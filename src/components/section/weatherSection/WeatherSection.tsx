import * as S from './WeatherSectionStyle';
import useWeather from '../../../hooks/useWeather';
import Address from '../../Address';

const WeatherSection = () => {
  const { weather, error } = useWeather();
  const isLoading = weather === null;

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {isLoading ? (
        <div>날씨정보 불러오는중</div>
      ) : (
        <S.Wrapper>
          <S.WeatherIcon
            backgroundImageUrl={weather?.icon}
            weather={weather?.id}
          />
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
