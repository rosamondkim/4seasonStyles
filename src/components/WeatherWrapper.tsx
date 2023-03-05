import React, { ReactNode } from 'react';
import styled from 'styled-components';

// props로 내려줘야할것 : width height flex background hover
interface WrapperProps {
  widthVal?: string;
  heightVal?: string;
  backgroundImage?: string;
  isHover?: string;
  flexDirection?: string;
  children?: ReactNode;
}

const WeatherWrapper = (props: WrapperProps) => {
  return <WeatherWrapperDiv {...props}>{props.children}</WeatherWrapperDiv>;
};

export default WeatherWrapper;

export const WeatherWrapperDiv = styled.div<WrapperProps>`
  // 모바일
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: ${({ flexDirection }) => flexDirection ?? 'row'};
  width: 100%;
  height: ${({ heightVal }) => heightVal ?? 'auto'};
  background-color: var(--bg-color);
  background-image: ${({ backgroundImage }) => backgroundImage ?? 'auto'};
  box-shadow: var(--section-shadow);
  border-radius: var(--sec-border-radius);
  position: relative;
  z-index: 0;

  &:hover {
    background: ${({ isHover }) => isHover ?? 'transparent'};
  }
  @media (min-width: 744px) {
    //패드
    padding: 1.7rem;
    height: ${({ heightVal }) => heightVal ?? 'auto'};
  }
  @media (min-width: 1280px) {
    //웹
    padding: 5.5rem;
    height: ${({ heightVal }) => heightVal ?? 'auto'};
  }
`;
