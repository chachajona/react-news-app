import React from 'react';
import { NavLink } from "react-router-dom";
import "./index.css";
import LogedInOutlet from '../outlets/LogedInOutlet';
import { clearUserInfo } from '../../utils/Common';
import PrivateLinks from '../links/PrivateLinks';

const Header = () => {
  return (
    <div>
      <div className="header">
        <PrivateLinks to="/"> 
          <span> Home </span> 
        </PrivateLinks>
        <PrivateLinks to="users"> 
          <span> Users </span>
        </PrivateLinks>
        <PrivateLinks to="settings"> 
          <span> Settings </span>
        </PrivateLinks>
        <PrivateLinks to="usage"> 
          <span> Usage </span>
        </PrivateLinks>
        <PrivateLinks to="login" onClick={()=> clearUserInfo()}>
          <span> Logout </span>
        </PrivateLinks>
      </div>
      <div>
        <LogedInOutlet />
      </div>
    </div>
  )
}

export default Header