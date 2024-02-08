import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from "../../store/reducers/UserReducer";
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(createUser(formData));
      setIsLoggedIn(true);
      navigate('/');
    } catch (error) {
      console.error('Registration failed:', error);
      // You can handle the error state, show an error message, etc.
    }
  };

  return (
    <div>
      <h1>Registration Page</h1>
      {isLoggedIn ? (
        <p>Registration successful! Redirecting...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
}

export default Registration;
