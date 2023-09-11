import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
  return true;
}

const PrivateRoutes = (props) => {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes;