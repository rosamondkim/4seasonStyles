import * as S from './HomeStyle';
import WeatherSection from 'components/section/weatherSection/WeatherSection';
const Home = () => {
  return (
    <S.MainStyle>
      <S.WhiteWrapper>
        <WeatherSection />
      </S.WhiteWrapper>
    </S.MainStyle>
  );
};

export default Home;
