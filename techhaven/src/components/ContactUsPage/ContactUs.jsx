import React from 'react';
import Marquee from '../Home/Marquee/Marquee';
import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState} from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Alert from 'react-bootstrap/Alert';
import success from '../../assets/success.jpeg';
import './ContactUs.css';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [value, setPhone] = useState();
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [product, setProduct] = useState('');
  const [message, setMessage] = useState('');
  const [language, setLanguage] = useState('');
  const [selectedValue, setSelectedValue] = useState('Support Type');
  const [showAlert, setShowAlert] = useState(false);

  const handleSelect = (eventKey) => {
    setSelectedValue(eventKey);  
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const contactusData = {
      name: name,
      email: email,
      phone_number: value,
      city: city,
      state: state,
      product: product,
      support_type: selectedValue,
      message: message,
      language: language
    };
    console.log(contactusData);
    try {
      const response = await fetch('http://localhost:8000/api/contactus/submit-contact-us/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactusData),
      });
      if (response.ok) {
        setShowAlert(!showAlert); 
      } else {
            const data = await response.json();
            if (data.email) {
                alert(`Email error: ${data.email}`);
            } else {
                alert('Failed to submit');
            }
  
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
     <Marquee/>
     <Header/>
     {showAlert &&  (
        <>
          <div className="overlay"></div>
          <Alert variant="success" className='contactusalert' onClose={() => setShowAlert(false)} dismissible>
            <img src={success} alt='success' className='successimg' /><br />
            <Alert.Heading className='contactusalerthead'>Thank You for Contacting Us!</Alert.Heading>
            <p className='contactusalerttxt'>
             Your query has been successfully submitted. We will get back to you soon.
            </p>
          </Alert>
        </>
      )}
      {!showAlert && (
     <div className='contactusform'>
            <Card className='contactuscard'>
            <Card.Body className='contactuscardbody'>
            <h5>Contact Us</h5>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} required /><br></br><br></br>
                <input type='email' placeholder='Enter E-mail' onChange={(e)=>setEmail(e.target.value)} required /><br></br><br></br>
                <PhoneInput international
                defaultCountry="IN" value={value} onChange={setPhone} 
                placeholder="Enter Phone Number"
                className='phonenumberinput' required/><br></br>
                <input type="text" placeholder='Enter City' onChange={(e)=>setCity(e.target.value)} required /><br></br><br></br>
                <input type="text" placeholder='Enter State' onChange={(e)=>setState(e.target.value)} required /><br></br><br></br>
                <input type="text" placeholder='Enter Product Name/Category' onChange={(e)=>setProduct(e.target.value)} required /><br></br><br></br>
                <div>
                  <DropdownButton
                    variant='light'
                    title={selectedValue}
                    onSelect={handleSelect}
                  >
                    <Dropdown.Item eventKey="Technical Support">Technical Support</Dropdown.Item>
                    <Dropdown.Item eventKey="Information">Information</Dropdown.Item>
                    <Dropdown.Item eventKey="Service">Service</Dropdown.Item>
                    <Dropdown.Item eventKey="Sales">Sales</Dropdown.Item>
                    <Dropdown.Item eventKey="Online Order">Online Order</Dropdown.Item>
                    <Dropdown.Item eventKey="Feedback">Feedback</Dropdown.Item>
                  </DropdownButton>
                </div><br></br>
                <textarea placeholder='Message' cols='62' onChange={(e)=>setMessage(e.target.value)} required/><br></br><br></br>
                <textarea placeholder='Preferred Language of Support' cols='62' onChange={(e)=>setLanguage(e.target.value)} required/><br></br><br></br>
                <Button type='submit' className='continue'>Submit</Button><br></br><br></br>    
            </form>
            </Card.Body>
            </Card>  
        </div>)}
       <Footer/>
    </>
  )
}

export default ContactUs