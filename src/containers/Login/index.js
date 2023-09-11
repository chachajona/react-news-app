import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/users';

const Login = () => {
  const [user, setUser] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    setError('');
    login(user)
      .then(() => {
        navigate('/')
      })
      .catch(() => {
        setError('Failed to log in');
      });
  }

  return (
    <div>
      <div className="page login">
        <div>
          <label className="error">{error}</label>
          <input value={user} placeholder="username" onChange={(e) => setUser(e.target.value)} />
          <input placeholder="password" />
          <button onClick={handleSubmit}>Login</button>
        </div>
      </div>  
    </div>
  )
}

export default Login;