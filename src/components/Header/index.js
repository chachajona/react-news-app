import React from 'react';
import { NavLink } from "react-router-dom";
import LogedInOutlet from '../outlets/LogedInOutlet';
import { clearUserInfo } from '../../utils/Common';

const Header = () => {
  const user = localStorage.getItem('cred');
  return (
    <>
      <div className="sticky top-0 bg-indigo-500 text-indigo-50">
        <header>
          {user ? (
            <ul className="list-none flex justify-center gap-4">
              <li className="p-2"><NavLink to="/">Home</NavLink></li>
              <li className="p-2"><NavLink to="users">Users</NavLink></li>
              <li className="p-2"><NavLink to="settings">Settings</NavLink></li>
              <li className="p-2"><NavLink to="usage">Usage</NavLink></li>
              <li className="p-2"><NavLink to="login" onClick={clearUserInfo}>Logout</NavLink></li>
            </ul>
          ) : (
            <NavLink to="login">Login</NavLink>
          )}
        </header>
      </div>
      <LogedInOutlet />
    </>
  );
};

export default Header