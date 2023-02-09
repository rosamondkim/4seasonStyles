import { useState, useEffect } from 'react';
//useCurrentLocation 커스텀 훅: 성공시 현재 경도/위도를 첫번째 인자로 반환해주고, 실패시 에러메세지 두번째 인자로 반환

const useCurrentLocation = (): {
  location: { lat: number; lon: number } | undefined;
  error: string | undefined;
} => {
  // location 정보 저장
  const [location, setLocation] = useState<
    { lat: number; lon: number } | undefined
  >();
  // error 메세지 저장
  const [error, setError] = useState<string | undefined>();
  // Geolocation의 getCurrentPosition 성공시
  const onGeoOk = (position: any) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    setLocation({ lat, lon });
  };
  // Geolocation의 getCurrentPosition 실패시
  const onGeoError = (error: any) => {
    setError(error.message);
    console.log('위치정보 파악 불가능');
  };

  useEffect(() => {
    const { geolocation } = navigator;

    if (!geolocation) {
      setError('위치정보를 파악할 수 없습니다!');
      return;
    }
    // GeoLocation API 호출하기
    geolocation.getCurrentPosition(onGeoOk, onGeoError);
  }, []);

  return { location, error };
};

export default useCurrentLocation;
