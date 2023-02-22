import React from 'react';

interface Props {
  temp: number;
}

const RecommendBottoms: React.FC<Props> = ({ temp }) => {
  let clothing = '';
  if (temp >= 28) {
    clothing = '얇은 반바지 혹은 치마';
  } else if (temp >= 23) {
    clothing = '반바지';
  } else if (temp >= 20) {
    clothing = '청바지 및 면바지';
  } else if (temp >= 17) {
    clothing = '청바지';
  } else if (temp >= 12) {
    clothing = '청바지';
  } else if (temp >= 10) {
    clothing = '청바지';
  } else if (temp >= 6) {
    clothing = '청바지';
  } else if (temp >= -3) {
    clothing = '두꺼운 바지';
  } else {
    clothing = '두꺼운 바지와 내의';
  }

  return <div>{clothing}</div>;
};

export default RecommendBottoms;
