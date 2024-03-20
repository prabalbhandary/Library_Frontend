import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory hook
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate(); // Initialize useHistory hook
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Check if passwords match
      if (password !== confirmPassword) {
        console.error("Passwords do not match");
        return;
      }

      // Make API call to register user
      const response = await axios.post('http://localhost:4000/api/v1/register', {
        email,
        username,
        password
      });

      alert(response.data.message);
      
      // Redirect to login page after successful registration
      navigate('/login');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className='bg-dark' style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form onSubmit={handleSubmit} style={{ backgroundColor: '#f4f4f4', padding: '40px', borderRadius: '8px', boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.2)', maxWidth: '400px', width: '100%' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>Register</h2>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', color: '#666', fontSize: '16px' }}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="username" style={{ display: 'block', marginBottom: '5px', color: '#666', fontSize: '16px' }}>Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', color: '#666', fontSize: '16px' }}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '5px', color: '#666', fontSize: '16px' }}>Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }}
          />
        </div>
        <p style={{ marginBottom: '20px', color: '#666', fontSize: '14px', textAlign: 'center' }}>Already a user? <a href="/login" style={{ color: '#007bff', textDecoration: 'none' }}>Login Here</a></p>
        <button type="submit" style={{ width: '100%', padding: '12px', borderRadius: '4px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', fontSize: '16px' }}>Register</button>
      </form>
    </div>
  );
};

export default Register;
