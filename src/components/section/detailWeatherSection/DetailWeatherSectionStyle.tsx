import styled from 'styled-components';

export const WeatherDiv = styled.div`
  //모바일
  display: flex;
  flex-direction: column;
  font-size: 20px;
  line-height: 2.5rem;
  @media (min-width: 744px) {
    //아이패드
    padding: 2rem;
  }
  @media (min-width: 1280px) {
    //웹
  }
`;

export const TimeDiv = styled.div`
  //모바일
  font-size: 50px;
  text-align: center;
  @media (min-width: 744px) {
    //아이패드
    padding: 2rem;
  }
  @media (min-width: 1280px) {
    //웹
  }
  & span {
    font-size: 30px;
  }
`;
