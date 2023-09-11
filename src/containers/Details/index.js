import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink ,useParams, useNavigate, useLocation, Outlet } from 'react-router-dom';
import "./index.css";
import PrivateLinks from '../../components/links/PrivateLinks';

const Details = () => {
  
  const location = useLocation();
  const state = location.state || {};

  const { userId } = useParams();

  const [user, setUser] = useState(state.data);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      axios('/data.json')
      .then((res) => {
        const data = res.data.find((item) => {
          return item.id === parseInt(userId);
        });
        setUser(data);
      });
    }
  }, [userId, user]);

  if (!user) {
    return null;
  }
  return (
    <div className="page details">
      <div className="title">
        {user.name}
      </div>
      <div className="body">
        Address: {user.address}
      </div>
      <div className="body">
        Phone: {user.phone}
      </div>
      <div className="body">
        Class: {user.class}
      </div>
      <div className="sub-menu">
        <PrivateLinks to="" end> Marks </PrivateLinks>
        <PrivateLinks to="sports"> Sports </PrivateLinks>
        <PrivateLinks to="remarks"> Remarks </PrivateLinks>
      </div>
      <div className="details-body">
        <Outlet context={user}/>
      </div>
      <button onClick={() => {
        navigate('/users');
      }}>
        Go Back
      </button>
    </div>
  )
}

export default Details