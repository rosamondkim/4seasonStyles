import React from 'react';

interface Props {
  temp: number;
}

const RecommendBottoms: React.FC<Props> = ({ temp }) => {
  let clothing = '';
  if (temp >= 28) {
    clothing = '덥다더워 민소매고고';
  } else if (temp >= 23) {
    clothing = '반팔 정도 입음 댈듯';
  } else if (temp >= 20) {
    clothing = '긴팔이나 반팔니트 입어라';
  } else if (temp >= 17) {
    clothing = '니트같은거';
  } else if (temp >= 12) {
    clothing = '자켓, 가디건 걸쳐';
  } else if (temp >= 10) {
    clothing = '트렌치의 계절이 왔따';
  } else if (temp >= 6) {
    clothing = '아직까진 얼죽코';
  } else if (temp >= -3) {
    clothing = '숏패딩';
  } else {
    clothing = '롱패딩입자';
  }

  return <div>{clothing}</div>;
};

export default RecommendBottoms;
