import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../containers/Home';
import News from '../containers/News';
import Details from '../containers/Details';
import Unauthorized from '../containers/Unauthorized';
import Login from '../containers/Login';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const AppRoutes = () => {
  return (
      <Routes>
        {/* public routes */}
        <Route path="" element={<PublicRoutes />} >
            <Route index element={<Login />} />
            <Route path="login" element={<Login />}/>
        </Route>

        {/* private routes */}
        <Route path="" element={<PrivateRoutes />}>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="news" >
              <Route index element={<News />} />
              <Route path=":newsId" element={<Details />} />
            </Route>
          </Route>
          <Route path="*" element={<Unauthorized />} />
        </Route>
      </Routes>
  );
};

export default AppRoutes;
