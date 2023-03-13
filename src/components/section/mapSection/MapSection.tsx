import React, { useEffect, useState } from 'react';
import useCurrentLocation from 'hooks/useCurrentLocation';
import Wrapper from 'components/Wrapper';
import { MAP_ICON } from 'styles/CommonIcon';
import * as S from './MapSectionStyle';

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
  const { location, error } = useCurrentLocation();
  const [isLoading, setIsLoading] = useState(true);

  const { kakao } = window;

  // useEffect(() => {
  const onClickMap = () => {
    const kakaoMap = () => {
      if (!location) {
        return;
      }
      if (error) {
        return;
      }
      let x = location.lon;
      let y = location.lat;
      if (x && y) {
        let container = document.getElementById('mapDiv');
        let options = {
          center: new kakao.maps.LatLng(y, x),
          level: 3,
        };
        let map = new kakao.maps.Map(container, options);
      }
    };
    kakaoMap();
    
  };
  // }, [location]);

  // <div id="mapDiv" style={{ width: '300px', height: '300px' }}></div>

  return (
    <Wrapper>
      <button onClick={onClickMap}>
        <span>이동할 계획이 있으신가요?</span>
        <img src={MAP_ICON} alt="지도아이콘" />
      </button>
    </Wrapper>
  );
};

export default Map;
