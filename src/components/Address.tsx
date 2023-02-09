import React, { useEffect, useState } from 'react';
import useCurrentLocation from 'hooks/useCurrentLocation';
import axios from 'axios';

const Address = () => {
  const { location, error } = useCurrentLocation();
  const [address, setAddress] = useState<String>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const REACT_APP_KAKAO_REST_API = process.env.REACT_APP_KAKAO_REST_API;
  useEffect(() => {
    if (!location) {
      return;
    }
    if (error) {
      return;
    }
    const alterAddress = () => {
      let x = location.lon;
      let y = location.lat;
      if (x && y) {
        axios
          .get(
            `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${x}&y=${y}`,
            {
              headers: {
                Authorization: `KakaoAK ${REACT_APP_KAKAO_REST_API}`,
              },
            },
          )
          .then((result) => {
            let address = result.data.documents[0].address_name;
            setAddress(address);
            setIsLoading(false);
          });
      }
    };
    alterAddress();
  }, [location]);

  return isLoading ? <span>주소정보 받아오는중</span> : <div>{address}</div>;
};

export default Address;
