import React from 'react';
// 622번까지 우산챙기기

interface Props {
  WeatherNumber: number;
}

const rainyDay: React.FC<Props> = ({ WeatherNumber }) => {
  if (WeatherNumber <= 622) {
    return <div>우산을 챙기세요</div>;
  } else {
    return <div>비 소식이 없습니다.</div>;
  }
};

export default rainyDay;
