import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch from react-redux
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/users';
import Header from './Header';
import Alert from '../../components/Alert';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import { createAlert } from '../../store/alertSlice'; // Import your addAlert action

const Login = () => {
  const alerts = useSelector((state) => state.alert.alerts);
  const [user, setUser] = useState('');
  const dispatch = useDispatch(); // Get the dispatch function from Redux
  const navigate = useNavigate();

  const handleSubmit = () => {
    login(user)
      .then(() => {
        navigate('/');
        dispatch(
          createAlert({
            type: 'success',
            text: 'Logged in successfully',
          })
        );
      })
      .catch(() => {
        dispatch(
          createAlert({
            type: 'error',
            text: 'Failed to log in',
          })
        );
      });
  };

  return (
    <div className="min-h-full h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="p-2 absolute right-0 top-0">
        <ThemeSwitcher />
      </div>
      <Header
        heading="Login to your account"
        paragraph="Don't have an account yet?"
        linkName="Register"
        linkUrl="/register"
      />
      <div className="w-full max-w-md mx-auto">
        <form className="bg-white dark:bg-gray-600 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-white text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={user}
              placeholder="username"
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 dark:text-white text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline required:border-red-500"
              placeholder="password"
            />
          </div>
          <button
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
      {/* Render your alerts */}
      <div className="w-full max-w-md mx-auto">
        {alerts.map((alert) => (
          <Alert key={alert.id} id={alert.id} type={alert.type} text={alert.text} />
        ))}
      </div>
    </div>
  );
};

export default Login;