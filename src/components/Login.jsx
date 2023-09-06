import React, { useState } from 'react';
import '../css/Login.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
 
const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleSubmit = async (e) => {
  //   navigate('/Home');
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your backend to verify the login
      const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Handle successful login, e.g., redirect to a dashboard
             navigate('/');
        console.log('Login successful');
      } else {
        // Handle authentication errors, e.g., display an error message
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };


  return (
    <div className='form-container'> 
  
      <form onSubmit={handleSubmit}>
      {/* <form> */}
        
      <h2>SocialBee</h2>
        <div className="form-group">
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          required />
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          required/>
        </div>

        <button className="form-group" type="submit">Login</button>
        <Link className="form-link" to="/register">create account</Link>
      </form>
     
    </div>
  );
};

export default Login;
