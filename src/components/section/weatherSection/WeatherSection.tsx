import * as S from './WeatherSectionStyle';
import useWeather from '../../../hooks/useWeather';
import Address from '../../Address';
import WeatherWrapper from 'components/WeatherWrapper';
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
        <>
          <WeatherWrapper height='267px'>
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
          </WeatherWrapper>
        </>
      )}
    </div>
  );
};

export default WeatherSection;
