import React, { useEffect, useState } from 'react';
import useCurrentLocation from 'hooks/useCurrentLocation';

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
  const { location, error } = useCurrentLocation();
  const [isLoading, setIsLoading] = useState(true);

  const { kakao } = window;

  useEffect(() => {
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
    setIsLoading(false);
  }, [location]);

  return isLoading ? (
    <div>지도정보 불러올 수 없음</div>
  ) : (
    <div>
      <div id="mapDiv" style={{ width: '300px', height: '300px' }}></div>
    </div>
  );
};

export default Map;
