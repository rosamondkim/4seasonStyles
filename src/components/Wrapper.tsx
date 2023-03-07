import React, { ReactNode } from 'react';
import styled from 'styled-components';

// props로 내려줘야할것 : width height flex background hover
interface WrapperProps {
  widthVal?: string;
  heightVal?: string;
  heightValTab?: string;
  heightValWeb?: string;
  background?: string;
  isHover?: string;
  justifyContent?: string;
  flexDirection?: string;
  children?: ReactNode;
}

const Wrapper = (props: WrapperProps) => {
  return <WrapperDiv {...props}>{props.children}</WrapperDiv>;
};

export default Wrapper;

export const WrapperDiv = styled.div<WrapperProps>`
  // 모바일
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent ?? 'center'};
  align-items: center;
  flex: 1;
  flex-direction: ${({ flexDirection }) => flexDirection ?? 'row'};
  width: 100%;
  height: ${({ heightVal }) => heightVal ?? 'auto'};
  background-color: var(--bg-color);
  background: ${({ background }) => background ?? 'auto'};
  box-shadow: var(--section-shadow);
  border-radius: var(--sec-border-radius);
  position: relative;
  z-index: 0;
  padding: 2.5rem;
  margin-bottom: 1rem;

  &:hover {
    background: ${({ isHover }) => isHover ?? 'auto'};
  }
  @media (min-width: 744px) {
    //패드
    padding: 2rem;
    height: ${({ heightValTab }) => heightValTab ?? 'auto'};
  }
  @media (min-width: 1280px) {
    //웹
    padding: 5.5rem;
    height: ${({ heightValWeb }) => heightValWeb ?? 'auto'};
  }
`;
