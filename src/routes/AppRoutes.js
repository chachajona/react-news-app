import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Unauthorized from '../containers/Unauthorized';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import Layout from '../components/layout';

const Home = lazy(() => wait(import('../containers/Home')));
const News = lazy(() => wait(import('../containers/News')));
const Details = lazy(() => wait(import('../containers/Details')));
const Login = lazy(() => wait(import('../containers/Login')));
const Register = lazy(() => wait(import('../containers/Register')));
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

function wait(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

export default AppRoutes;
