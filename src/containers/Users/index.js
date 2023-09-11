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
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
            <option value="G">G</option>
            <option value="H">H</option>
            <option value="I">I</option>
            <option value="J">J</option>
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