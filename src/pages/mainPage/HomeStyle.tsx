import styled from 'styled-components';

export const MainStyle = styled.div`
  // 모바일
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: var(--main-bg-color);
  padding: 1.4rem;

  @media (min-width: 744px) {
    // 패드
    background-color: teal; //지워야함
    padding: 2.5rem;
  }
  @media (min-width: 1280px) {
    //웹
    padding: 1.4rem;
    background-color: orange; //지워야함
  }
`;

export const WhiteWrapper = styled.div`
  @media (max-width: 743px) {
    // 모바일 화면에서는 white 영역 보이지 않게
    background-color: transparent;
    box-shadow: none;
    padding: 0;
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 744px) {
    //아이패드

    padding: 2rem;
  }
  // 웹
  background-color: var(--bg-color);
  width: 100%;
  height: 100vh;
  padding: 2rem;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
`;
