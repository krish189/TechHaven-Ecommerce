import React from 'react';
import logo from '../../../assets/logo_login.png';
import '../Login/Login.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Login() {
  return (
    <>
    <div className='loginform'>
        <Card>
        <Card.Img src={logo} alt='logo' className='loginlogo' variant='top'/>
        <Card.Body>
        <h5>Login</h5>
        <p>Login and explore your tech world now!</p>
        <form>
            <input type='email' placeholder='Enter E-mail' required/><br></br><br></br>
            <input type='password' placeholder='Enter Password' required/><br></br><br></br>
            <Button className='loginbtn'>Login</Button><br></br><br></br>
            <p>New to TechHaven? <Link to='/signup' className='signuplink'>Join now and power up your experience!</Link></p>
        </form>
        </Card.Body>
        </Card>
    </div>
    </>
  )
}

export default Login