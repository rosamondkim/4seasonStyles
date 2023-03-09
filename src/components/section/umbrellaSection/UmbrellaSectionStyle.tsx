import styled from 'styled-components';

export const UmbrellaWrapper = styled.div`
  //모바일
  display: flex;
  align-items: center;
  & div {
    h3 {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 0.8rem;
    }
    div {
      font-size: 1.5rem;
    }
  }
  img {
    width: 104px;
    height: 104px;
  }
  @media (min-width: 744px) {
    //아이패드
  }
  @media (min-width: 1280px) {
    //웹
  }
`;
