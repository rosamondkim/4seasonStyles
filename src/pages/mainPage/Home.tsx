import * as S from './HomeStyle';
import WeatherSection from 'components/section/WeatherSection';
const Home = () => {
  return (
    <S.MainStyle>
      <S.WhiteWrapper>
        <S.WeatherSection>
          <WeatherSection />
        </S.WeatherSection>
      </S.WhiteWrapper>
    </S.MainStyle>
  );
};

export default Home;
