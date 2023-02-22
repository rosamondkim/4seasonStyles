import React from 'react';

interface Props {
  temp: number;
}

const RecommendTops: React.FC<Props> = ({ temp }) => {
  let clothing = '';
  if (temp >= 28) {
    clothing = '민소매 및 얇은 반팔';
  } else if (temp >= 23) {
    clothing = '반팔';
  } else if (temp >= 20) {
    clothing = '긴팔';
  } else if (temp >= 17) {
    clothing = '니트';
  } else if (temp >= 12) {
    clothing = '따뜻한 니트';
  } else if (temp >= 10) {
    clothing = '따뜻한 니트 및 후드티';
  } else if (temp >= -3) {
    clothing = '기모가 들어간 맨투맨과 히트텍';
  } else {
    clothing = '기모가 들어간 맨투맨과 니트 등 여러겹을 입으세요';
  }

  return <div>{clothing}</div>;
};

export default RecommendTops;
