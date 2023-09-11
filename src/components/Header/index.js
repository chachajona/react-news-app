import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import "./index.css";
import LogedInOutlet from '../outlets/LogedInOutlet';
import { clearUserInfo } from '../../utils/Common';

const Header = () => {
  const user = localStorage.getItem('cred');
  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        {user ? (
          <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="users">Users</NavLink>
            <NavLink to="settings">Settings</NavLink>
            <NavLink to="usage">Usage</NavLink>
            <NavLink to="login" onClick={clearUserInfo}>Logout</NavLink>
          </>
        ) : (
          <NavLink to="login">Login</NavLink>
        )}
      </div>
      <LogedInOutlet />
    </>
  );
};

export default Header