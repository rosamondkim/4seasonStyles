import React from 'react';

interface Props {
  temp: number;
}

const RecommendJackets: React.FC<Props> = ({ temp }) => {
  let clothing = '';
  if (temp >= 28) {
    clothing = 'x';
  } else if (temp >= 23) {
    clothing = 'x';
  } else if (temp >= 20) {
    clothing = '얇은 가디건 및 걸칠 셔츠';
  } else if (temp >= 17) {
    clothing = '얇은 가디건';
  } else if (temp >= 12) {
    clothing = '자켓, 니트가디건';
  } else if (temp >= 10) {
    clothing = '트렌치, 가죽자켓';
  } else if (temp >= 6) {
    clothing = '코트';
  } else if (temp >= -3) {
    clothing = '숏패딩';
  } else {
    clothing = '롱패딩';
  }

  return <div>{clothing}</div>;
};

export default RecommendJackets;
