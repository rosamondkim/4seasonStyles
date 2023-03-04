import styled from 'styled-components';

export const SplashScreen = styled.div`
  height: 100vh;
  background-color: var(--main-bg-color);
`;

export const Logo = styled.img`
  // 모바일
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 193px;

  @media (min-width: 390px) {
    // 아이패드
    width: 324px;
    height: 209px;
  }
  @media (min-width: 834px) {
    // 웹
    width: 385px;
    height: 248px;
  }
`;
