import useWeather from '../../../hooks/useWeather';
import styled from 'styled-components';
const DetailWeatherSection = () => {
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
          <div>습도: {weather?.humidity}</div>
          <div>체감온도:{weather?.feels}</div>
          <div>최고기온:{weather?.temp_max}</div>
          <div>최저기온:{weather?.temp_min}</div>
        </div>
      )}
    </div>
  );
};

export default DetailWeatherSection;
