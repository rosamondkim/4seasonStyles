import * as S from './HomeStyle';
import WeatherSection from 'components/section/weatherSection/WeatherSection';
import useWeather from 'hooks/useWeather';
import DetailWeatherSection from 'components/section/detailWeatherSection/DetailWeatherSection';
import UmbrellaSection from 'components/section/umbrellaSection/UmbrellaSection';

const Home = () => {
  const { weather, error } = useWeather();
  const isLoading = weather === null;

  if (error) {
    return <div>날씨 정보를 불러올 수 없습니다!</div>;
  }

  return (
    <div>
      {isLoading ? (
        <div>로딩중...</div>
      ) : (
        <S.MainStyle weather={weather?.id}>
          <S.WhiteWrapper>
            <WeatherSection />
            <DetailWeatherSection />
            <UmbrellaSection />
          </S.WhiteWrapper>
        </S.MainStyle>
      )}
    </div>
  );
};

export default Home;
