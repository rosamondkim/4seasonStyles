import React, { useState } from 'react';
import * as S from './UmbrellaSectionStyle';
import Wrapper from 'components/Wrapper';
import { UMBRELLA_ICON } from 'styles/CommonIcon.jsx';

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
      color="white"
    >
      {isTakeUmbrella ? (
        <S.UmbrellaWrapper>
          <div>
            <h3>비소식이 있습니다.</h3>
            <div>아 맞다 우산!</div>
          </div>
          <img src={UMBRELLA_ICON} alt="우산아이콘" />
        </S.UmbrellaWrapper>
      ) : (
        <div>맑다</div>
      )}
    </Wrapper>
  );
};

export default UmbrellaSection;
