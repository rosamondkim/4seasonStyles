import * as S from './WeatherSectionStyle';
import useWeather from '../../../hooks/useWeather';
import Address from '../../Address';
import Wrapper from 'components/Wrapper';

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
          <Wrapper heightVal="267px" heightValTab="356px;">
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
          </Wrapper>
        </>
      )}
    </div>
  );
};

export default WeatherSection;
