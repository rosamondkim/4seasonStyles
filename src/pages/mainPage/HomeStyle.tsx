import styled from 'styled-components';

export const MainStyle = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: var(--main-bg-color);
  padding: 2em;
`;

export const WhiteWrapper = styled.div`
  background-color: var(--bg-color);
  width: 1208px;
  padding: 2em;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
`;
export const WeatherSection = styled.section`
  flex: 1;
  width: 467px;
  padding: 2em;
  background-color: var(--bg-color);
  box-shadow: var(--section-shadow);
  border-radius: var(--sec-border-radius);
`;
