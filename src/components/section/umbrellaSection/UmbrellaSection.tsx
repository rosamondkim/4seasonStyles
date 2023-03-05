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
    <Wrapper>
      {isTakeUmbrella ? (
        <>
          <span>눈 소식이 있습니다.</span>
          <S.Umbrella>아 맞다 우산!</S.Umbrella>
        </>
      ) : (
        <span>맑다</span>
      )}
    </Wrapper>
  );
};

export default UmbrellaSection;
