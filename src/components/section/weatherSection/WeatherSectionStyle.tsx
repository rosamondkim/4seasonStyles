import styled from 'styled-components';

// export const 변수 = styled.div`
//   //모바일
//   @media (min-width: 744px) {
//     //아이패드
//   }
//   @media (min-width: 1280px) {
//     //웹
//   }
// `;

type WeatherIconProps = {
  backgroundImageUrl: string;
};

export const Wrapper = styled.div`
  // 모바일
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 267px;
  background-color: var(--bg-color);
  box-shadow: var(--section-shadow);
  border-radius: var(--sec-border-radius);
  position: relative;
  z-index: 0;
  @media (min-width: 744px) {
    //패드
    width: 347px;
    height: 336px;
  }
  @media (min-width: 1280px) {
    //웹
    width: 467px;
    height: 267px;
  }
`;

export const WeatherIcon = styled.div<WeatherIconProps>`
  position: relative; // 트러블슈팅 작성하기
  width: 94px;
  height: 94px;
  margin-right: 2rem;
  background-image: url(${(props) => props.backgroundImageUrl});
  background-repeat: no-repeat;
  background-size: contain;

  &::before {
    position: absolute;
    display: block;
    z-index: -1;
    content: '';
    border-radius: 50%;
    top: -20px;
    left: 10px;
    width: 86px;
    height: 86px;
    background-color: var(--main-bg-color);
  }
`;

export const WeatherDesc = styled.h2`
  font-size: 2rem;
`;

export const DiscWrapper = styled.div`
  text-align: center;
  margin-left: 2.5rem;
`;

export const AddressInfo = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  margin-top: 2rem;
`;

export const Temp = styled.h1`
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-size: 6.4rem;
`;
