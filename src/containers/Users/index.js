import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./index.css";
import { Link, useSearchParams, useNavigate } from "react-router-dom";

const Users = () => {
  
  const [users, setUsers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const cls = searchParams.get('cls');
  const navigate = useNavigate();

  useEffect(() => {
    axios("data.json")
      .then((res) => setUsers(res.data));
  }, []);

  return (
    <div className="page users">
      <div className="options">
        <div>
          Select Class:
        </div>
        <div>
          <select onChange={(e) => setSearchParams({ cls: e.target.value })}>
            <option value="">All</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>
      {users
        .filter((user) => {
          if (!cls) {
            return true;
          }
          return cls === user.class;
        })
        .map((user) => {
        return (
          <div className="users-item" key={user.id} onClick={() => {
            navigate(`/details/${user.id}`, {
              state: {
                data: user,
                
              }
            });
          }}>
            <div className="title">
              <Link to={`/details/${user.id}`}>{user.name}</Link>
            </div>
            <div className="description">
              {user.address}
            </div>
            <div className="description">
              Class: {user.class}
            </div>
          </div>  
        );
      })}
    </div>
  )
}

export default Users;