import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [error, setError] = useState(null);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!username || !password) {
        setError('Username and password are required.');
        return;
      }

      const response = await axios.post('http://localhost:4000/api/v1/login', {
        username,
        password,
      });

      alert(response.data.message);

      setIsLoggedIn(true); // Update login status upon successful login
      // Redirect to some other page after successful login
      navigate('/');

      // Display success message
      toast.success('Login successful!');
      localStorage.setItem('isLoggedIn', true)
    } catch (error) {
      console.error('Error logging in user:', error);
      console.log(error)
      setError(error.data);
    }
  };

  // Redirect to home if already logged in
  if (isLoggedIn) {
    navigate('/');
    return null;
  }

  return (
    <div
      className="bg-dark"
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: '#f4f4f4',
          padding: '40px',
          borderRadius: '8px',
          boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.2)',
          maxWidth: '400px',
          width: '100%',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>Login</h2>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        <div style={{ marginBottom: '20px' }}>
          <label
            htmlFor="username"
            style={{
              display: 'block',
              marginBottom: '5px',
              color: '#666',
              fontSize: '16px',
            }}
          >
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              fontSize: '16px',
            }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label
            htmlFor="password"
            style={{
              display: 'block',
              marginBottom: '5px',
              color: '#666',
              fontSize: '16px',
            }}
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              fontSize: '16px',
            }}
          />
        </div>
        <p
          style={{
            marginBottom: '20px',
            color: '#666',
            fontSize: '14px',
            textAlign: 'center',
          }}
        >
          Not registered? <a href="/register" style={{ color: '#007bff', textDecoration: 'none' }}>Register Here</a>
        </p>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#007bff',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
