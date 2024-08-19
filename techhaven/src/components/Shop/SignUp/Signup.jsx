import React from 'react';
import logo from '../../../assets/logo_login.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../SignUp/Signup.css';

function Signup() {
  return (
    <>
    <div className='signupform'>
        <Card>
        <Card.Img src={logo} alt='logo' className='signuplogo' variant='top'/>
        <Card.Body>
        <h5>Sign Up</h5>
        <p>Create your TechHaven account</p>
        <form>
            <input type='text' placeholder='Enter First Name' required/><br></br><br></br>
            <input type='text' placeholder='Enter Last Name' required/><br></br><br></br>
            <input type='email' placeholder='Enter E-mail' required/><br></br><br></br>
            <input type='password' placeholder='Enter Password' required/><br></br><br></br>
            <Button className='continue'>Continue</Button><br></br><br></br>
        </form>
        </Card.Body>
        </Card>
    </div>
    </>
  )
}

export default Signup