import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MAIN_LOGO_ICON } from 'styles/CommonIcon';

const SplashPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      navigate('/home');
    }, 1500);
    return () => {
      clearTimeout(timeOut);
    };
  }, [navigate]);

  return (
    <SplashScreen>
      <Logo src={MAIN_LOGO_ICON} alt="메인 로고 아이콘" />
    </SplashScreen>
  );
};

export default SplashPage;

const SplashScreen = styled.div`
  height: 100vh;
  background-color: var(--main-bg-color);
`;

const Logo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 45.6em;
  height: 29.4em;
`;
