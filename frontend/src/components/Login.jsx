import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Login = () => {
  const navigation = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      navigation('/dashboard');
    }
  }, [navigation]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5200/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        alert('Invalid credentials');
        throw new Error('Invalid credentials');
      }
      const data = await response.json();

    const { accessToken } = data;
    console.log('Received token:', accessToken);
    
    localStorage.setItem('authToken', accessToken);
    alert('Login successfully');
    navigation('/dashboard');
    } catch (error) {
      console.error('Error:', error.message);
      alert('Invalid credentials');
    }
  };

  return (
    <>
     <h2>User Login</h2>
    <div className='login'>
     
      <form className="container" onSubmit={handleSubmit}>
      
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter the Email'
            required
          />
      
        <br />
      
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder='Enter the Password'
            required
          />
       
        <br />
        <button type="submit">Login</button>
        <p>
          Don't have an account? <a href="/signup">Sign up here</a>.
        </p>
      </form>
    </div>
    </>
  );
};

export default Login;
