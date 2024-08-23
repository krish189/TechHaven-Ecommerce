import React from 'react';
import logo from '../../../assets/logo_login.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import '../SignUp/Signup.css';
import {Link, useNavigate} from 'react-router-dom';
import {useState} from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import success from '../../../assets/success.jpeg';

function Signup() {
  //State variables and State Functions
  const [value, setPhone] = useState();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  //Navigation Initialization
  const navigate = useNavigate();

  //Handle submit function
  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = {
      name: name,
      email: email,
      password: password,
      phone_number: value,
      address: address
    };

    try {
      const response = await fetch('http://localhost:8000/api/accounts/signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        setShowAlert(!showAlert); 
      } else {
            const data = await response.json();
            if (data.password) {
                alert(`Password error: ${data.password}`);
            } else if (data.email) {
                alert(`Email error: ${data.email}`);
            } else {
                alert('Failed to sign up');
            }

      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <>
    {showAlert &&  (
        <>
          <div className="overlay"></div>
          <Alert variant="success" className='signupalert' onClose={() => setShowAlert(false)} dismissible>
            <img src={success} alt='success' className='successimg' /><br />
            <Alert.Heading className='signupalerthead'>You are All Set with TechHaven!</Alert.Heading>
            <p className='signupalerttxt'>
              Congratulations! Your TechHaven account has been created successfully.
            </p>
            <Button onClick={() => {navigate('/login') }} variant="outline-success" className='alertlogin'>
              Login Now
            </Button>
          </Alert>
        </>
      )}
      {!showAlert && (
        <div className='signupform'>
            <Card className='signupcard'>
            <Card.Img src={logo} alt='logo' className='signuplogo' variant='top'/>
            <Card.Body className='signupcardbody'>
            <h5>Sign Up</h5>
            <p>Create your TechHaven account</p>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter Name' required onChange={(e) => setName(e.target.value)}/><br></br><br></br>
                <input type='email' placeholder='Enter E-mail' required onChange={(e) => setEmail(e.target.value)}/><br></br><br></br>
                <input type='password' placeholder='Enter Password' required onChange={(e) => setPassword(e.target.value)}/><br></br><br></br>
                <PhoneInput international
                defaultCountry="IN" value={value} onChange={setPhone} 
                placeholder="Enter Phone Number"
                className='phonenumberinput' required/><br></br>
                <input type="text" placeholder='Enter Address' required onChange={(e) => setAddress(e.target.value)}/><br></br><br></br>
                <Button type='submit' className='continue'>Sign Up</Button><br></br><br></br>
                <p>Already a member? <Link to='/login' className='loginlink'>Login Now</Link></p>     
            </form>
            </Card.Body>
            </Card>  
        </div>
      )}
    </>
  )
}

export default Signup