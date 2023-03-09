import styled from 'styled-components';

interface Color {
  color: number;
}

export const MainStyle = styled.div<{ weather: number }>`
  // 모바일
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 1.4rem;
  background-color: ${({ weather }) => {
    if (weather < 600) {
      return '#CCDBFD';
    } else if (weather === 800) {
      return '#FFCD2A';
    } else if (weather < 802) {
      return '#88A3E3';
    }
  }};

  @media (min-width: 744px) {
    // 패드
    padding: 2.5rem;
  }
  @media (min-width: 1280px) {
    //웹
    padding: 1.4rem;
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 
    gap: 2.5rem;
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
