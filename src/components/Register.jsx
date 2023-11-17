import React from 'react'
import { useState } from 'react'
import '../css/Register.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
    const [userName,setUserName]=useState('');
    const[email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handleSubmit = async (e) => {
       e.preventDefault();

       const userData={
        userName,
        email,
        password
       
       };
       try{
        const response= await fetch('http://localhost:3001/auth/register',{
          method:'post',
          credentials: 'include',

          headers:{
            'content-Type':'application/json'
          },
          body: JSON.stringify(userData),
          
        });
        if(response.ok){
          navigate('/');
        }
        else{
          console.error("register failed")
        }
       }catch(error){
        console.error('Error:',error);
       }
    };
  
  return (
  
    <div className='form-container'>
      <form onSubmit={handleSubmit} >
      <h2>SocialBee</h2>
        <div className="form-group">
            <input type="text"
            placeholder='Enter username'
            value={userName}
            onChange={(e)=>setUserName(e.target.value)} 
            required/>
        </div>

        <div className="form-group">
            <input type="email"
            placeholder='Enter email'
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}
            required/>
        </div>

        <div className="form-group">
            <input type="password"
            placeholder='Enter password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required />
        </div>
        <button type='submit'> Register</button>
        <Link className="form-link" to="/login">Have an account</Link>
        </form>      
     
    </div>
  )
}

export default Register
