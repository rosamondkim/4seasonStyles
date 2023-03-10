import { Route, Routes } from 'react-router-dom';

import NotFoundPage from 'pages/notFoundPage/NotFoundPage';
import SplashPage from 'pages/splashPage/SplashPage';
import Home from 'pages/mainPage/Home';

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<SplashPage />}></Route>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  );
};

export default Router;
