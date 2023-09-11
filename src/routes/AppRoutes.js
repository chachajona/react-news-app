import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../containers/Home';
import Settings from '../containers/Settings';
import Usage from '../containers/Usage';
import Users from '../containers/Users';
import Details from '../containers/Details';
import Marks from '../containers/Marks';
import Remarks from '../containers/Remarks';
import Sports from '../containers/Sports';
import Unauthorized from '../containers/Unauthorized';
import Login from '../containers/Login';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const AppRoutes = () => {
  return (
      <Routes>
        {/* public routes */}
        <Route path="" element={<PublicRoutes />} >
          <Route path="login" element={<Login />}/>
        </Route>

        {/* private routes */}
        <Route path="" element={<PrivateRoutes />}>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="settings" element={<Settings />} />
            <Route path="usage" element={<Usage />} />
            <Route path="users">
              <Route index element={<Users />} />
              <Route path=":userId" element={<Details />}>
                <Route index element={<Marks />} />
                <Route path="marks" element={<Sports />} />
                <Route path="remarks" element={<Remarks />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<Unauthorized />} />
        </Route>
      </Routes>
  );
};

export default AppRoutes;
