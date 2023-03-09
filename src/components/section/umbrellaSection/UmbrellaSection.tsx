import Wrapper from 'components/Wrapper';
import React, { useState } from 'react';
import * as S from './UmbrellaSectionStyle';

/** 여기서 문제
 * 비 소식/눈 소식이 없을때의 이미지도 만들어줘야하고
 * 로직도 새로 작성해야한다..
 * 비소식/눈소식 있으면 useState로..
 */
const UmbrellaSection = () => {
  const [isTakeUmbrella, setIsTakeUmbrella] = useState(true);
  return (
    <Wrapper
      heightVal="170px"
      background="url('img/umbrella.jpg') no-repeat center/100%"
    >
      {isTakeUmbrella ? (
        <>
          <span>비온다</span>
        </>
      ) : (
        <span>맑다</span>
      )}
    </Wrapper>
  );
};

export default UmbrellaSection;
