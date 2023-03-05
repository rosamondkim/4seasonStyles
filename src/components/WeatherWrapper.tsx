import React, { ReactNode } from 'react';
import styled from 'styled-components';

// props로 내려줘야할것 : width height flex background hover
interface WrapperProps {
  width?: string;
  height?: string;
  background?: string;
  hover?: string;
  flexDirection?: string;
  children?: ReactNode;
}

const WeatherWrapper = (props: WrapperProps) => {
  return <WeatherWrapperDiv>{props.children}</WeatherWrapperDiv>;
};

export default WeatherWrapper;

export const WeatherWrapperDiv = styled.div<WrapperProps>`
  // 모바일
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ flexDirection }) => flexDirection ?? 'row'};
  width: 100%;
  height: ${({ height }) => height ?? 'auto'};
  background-color: var(--bg-color);
  background-image: ${({ background }) => background ?? 'auto'};
  box-shadow: var(--section-shadow);
  border-radius: var(--sec-border-radius);
  position: relative;
  z-index: 0;

  &:hover {
    background: ${({ hover }) => hover ?? 'transparent'};
  }
  @media (min-width: 744px) {
    //패드
    width: 347px;
    height: auto;
  }
  @media (min-width: 1280px) {
    //웹
    width: 467px;
    height: auto;
  }
`;
