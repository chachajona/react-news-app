import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../containers/Home';
import News from '../containers/News';
import Details from '../containers/Details';
import Unauthorized from '../containers/Unauthorized';
import Login from '../containers/Login';
import Register from '../containers/Register';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import Layout from '../components/layout';

const AppRoutes = () => {
  return (
      <Routes>
        {/* public routes */}
        <Route path="" element={<PublicRoutes />} >
            <Route index element={<Login />} />
            <Route path="login" element={<Login />}/>
            <Route path="register" element={<Register />} />
        </Route>

        {/* private routes */}
        <Route path="" element={<PrivateRoutes />}>
          <Route path="/" element={<Layout />}>
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
