import useWeather from '../../../hooks/useWeather';
import Wrapper from 'components/Wrapper';
import * as S from './DetailWeatherSectionStyle';
const DetailWeatherSection = () => {
  const { weather, error } = useWeather();
  const isLoading = weather === null;

  const date = new Date();
  const hours = ('0' + date.getHours()).slice(-2);
  const minutes = ('0' + date.getMinutes()).slice(-2);
  const timeStr = hours + ':' + minutes;

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Wrapper
          heightVal="170px"
          justifyContent="space-between"
          heightValTab="356px"
          heightValWeb="264px"
        >
          <S.WeatherDiv>
            <div>체감온도:{weather?.feels}</div>
            <div>최고기온:{weather?.temp_max}</div>
            <div>최저기온:{weather?.temp_min}</div>
            <div>습도: {weather?.humidity}</div>
          </S.WeatherDiv>
          <S.TimeDiv>
            <span>현재시각</span>
            <div>{timeStr}</div>
          </S.TimeDiv>
        </Wrapper>
      )}
    </div>
  );
};

export default DetailWeatherSection;
