import React from 'react';
import logo from '../../../assets/logo_login.png';
import '../Login/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import Alert from 'react-bootstrap/Alert';

function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [showSuccessMessage,setShowSuccessMessage]=useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [error, setError] = useState('');
  const {login} = useAuth();
  const navigate = useNavigate();

  const handleSubmit= async (event)=>{
    event.preventDefault();
    const userData = {
    email:email,
    password:password
    }
    try
    {
      const response = await fetch('http://localhost:8000/api/accounts/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('access_token', data.access); 
        localStorage.setItem('refresh_token', data.refresh);
        login({
            name: data.user.name, 
            email: data.user.email,
        });
        setShowSuccessMessage(true);
        setErrorMessage(false);
        setTimeout(() => {
            setShowSuccessMessage(false);
            navigate('/shop');
        }, 2000);
    }
      else
      {
        const data = await response.json();
        setError(data.error);
        setErrorMessage(true);
        setShowSuccessMessage(false);
      }
    }catch(error){
        console.error('Error:',error)
    }
  }
  return (
    <>
    <div className='loginform'>
        {showSuccessMessage && (
          <Alert variant="success" className='successalert'>
            <p>Login successful.</p>
          </Alert>
        )}
        {errorMessage && (
          <Alert variant="danger" className='erroralert'>
            <p>{error}</p>
          </Alert>
        )}
        <Card className='logincard'>
        <Card.Img src={logo} alt='logo' className='loginlogo' variant='top'/>
        <Card.Body className='logincardbody'>
        <h5>Login</h5>
        <p>Login and explore your tech world now!</p>
        <form onSubmit={handleSubmit}>
            <input type='email' placeholder='Enter Username' onChange={(e)=>{setEmail(e.target.value)}} required/><br></br><br></br>
            <input type='password' placeholder='Enter Password' onChange={(e)=>{setPassword(e.target.value)}} required/><br></br><br></br>
            <Button type="submit" className='loginbtn'>Login</Button><br></br><br></br>
            <p>New to TechHaven? <Link to='/signup' className='signuplink'>Join now and power up your experience!</Link></p>
        </form>
        </Card.Body>
        </Card>
    </div>
    </>
  )
}

export default Login