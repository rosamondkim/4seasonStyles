import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './SplashStyle';
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
    <S.SplashScreen>
      <S.Logo src={MAIN_LOGO_ICON} alt="메인 로고 아이콘" />
    </S.SplashScreen>
  );
};

export default SplashPage;
