import React from 'react';
import Marquee from '../Home/Marquee/Marquee';
import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Alert from 'react-bootstrap/Alert';
import success from '../../assets/success.jpeg';
import jsPDF from 'jspdf';
import logo from '../../assets/logo_login.png';
import './WarrantyRegistration.css';

function WarrantyRegistration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [value, setPhone] = useState();
  const [street_address, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [postal_code, setPostalCode] = useState('');
  const [selectedValue, setSelectedValue] = useState('Select Product Category');
  const [product_name, setProductName] = useState('');
  const [brand, setBrand] = useState('');
  const [modelno, setModelNo] = useState('');
  const [serialno, setSerialNo] = useState('');
  const [price, setPrice] = useState('');
  const [pdate, setPdate] = useState('');
  const [receiveupdate, setReceiveUpdate] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSelect = (eventKey) => {
    setSelectedValue(eventKey);  
  };
  
  const handleCheckboxChange = (e) => {
     if (e.target.checked)
     {
        setReceiveUpdate(e.target.value);
     }
     else
     {
        setReceiveUpdate('');
     }
  };

  const handleSubmit = async (event) =>{
       event.preventDefault();
       const warranty_registration_data={
        name: name,
        email: email,
        phone_number: value,
        street_address: street_address,
        city: city,
        state: state,
        country: country,
        postal_code: postal_code,
        product_category: selectedValue,
        product_name: product_name,
        brand: brand,
        model_no: modelno,
        serial_no: serialno,
        price: price,
        pdate: pdate,
        receiveupdate: receiveupdate
       }
       console.log(warranty_registration_data);
       try {
        const response = await fetch('http://localhost:8000/api/warranty-registration/submit-warranty-registration/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(warranty_registration_data),
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

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.addImage(logo, 60, 10, 100, 45);
    doc.setFont('helvetica', 'bold');
    doc.text("Warranty Registration Details", 20, 60);
    doc.text("Registrant", 20, 70);
    doc.setFont('helvetica', 'normal');
    doc.text(`Name: ${name}`, 20, 80);
    doc.text(`Email: ${email}`, 20, 90);
    doc.text(`Phone: ${value}`, 20, 100);
    doc.text(`Street Address: ${street_address}`, 20, 110);
    doc.text(`City: ${city}`, 20, 120);
    doc.text(`State: ${state}`, 20 , 130);
    doc.text(`Country: ${country}`, 20, 140);
    doc.text(`Postal Code: ${postal_code}`, 20, 150);
    doc.setFont('helvetica', 'bold');
    doc.text("Product Information", 20, 160);
    doc.setFont('helvetica', 'normal');
    doc.text(`Product Category: ${selectedValue}`, 20, 170);
    doc.text(`Product Name: ${product_name}`, 20, 180);
    doc.text(`Brand: ${brand}`, 20, 190);
    doc.text(`Model Number: ${modelno}`, 20, 200);
    doc.text(`Serial Number: ${serialno}`, 20, 210);
    doc.text(`Price: ${price}`, 20, 220);
    doc.text(`Purchase Date: ${pdate}`, 20, 230);
    doc.text(`Receive Updates: ${receiveupdate ? 'Yes' : 'No'}`, 20, 240);
    doc.text(`© TechHaven India Pvt. Ltd. ® All Rights Reserved`, 40, 280)

    doc.save('Warranty_Registration.pdf');
  };


  return (
    <>
    <Marquee/>
    <Header/>
    {showAlert &&  (
        <>
          <div className="overlay"></div>
          <Alert variant="success" className='warrantyregistrationalert' onClose={() => setShowAlert(false)} dismissible>
            <img src={success} alt='success' className='successimg' /><br />
            <Alert.Heading className='warrantyregistrationalerthead'>Thank You for Registering Your Product!</Alert.Heading>
            <p className='warrantyregistrationalerttxt'>
             Your product warranty has been successfully registered.
            </p>
            <Button onClick={generatePDF} variant="outline-success" className='downloadpdf'>
              Download PDF
            </Button>
          </Alert>
        </>
      )}
      {!showAlert && (
     <div className='warrantyregistrationform'>
            <Card className='warrantyregistrationcard'>
            <Card.Body className='warrantyregistrationcardbody'>
            <h5 style={{position: 'relative', left: '8rem'}}>Warranty Registration</h5>
            <form onSubmit={handleSubmit}>
                <h6 style={{position: 'relative', right: '1rem'}}>Registrant</h6>
                <input type='text' placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}  required /><br></br><br></br>
                <input type='email' placeholder='Enter E-mail' onChange={(e)=>setEmail(e.target.value)} required /><br></br><br></br>
                <PhoneInput international
                defaultCountry="IN" value={value} onChange={setPhone} 
                placeholder="Enter Phone Number"
                className='phonenumberinput' required/><br></br>
                <input type="text" placeholder='Enter Street Address' onChange={(e)=>setStreetAddress(e.target.value)}  required /><br></br><br></br>
                <input type="text" placeholder='Enter City' onChange={(e)=>setCity(e.target.value)} required /><br></br><br></br>
                <input type="text" placeholder='Enter State' onChange={(e)=>setState(e.target.value)}  required /><br></br><br></br>
                <input type="text" placeholder='Enter Country' onChange={(e)=>setCountry(e.target.value)} required /><br></br><br></br>
                <input type="text" placeholder='Enter Postal Code' onChange={(e)=>setPostalCode(e.target.value)}  required /><br></br><br></br>
                <h6 style={{position: 'relative', right: '1rem'}}>Product Information</h6>
                <div>
                  <DropdownButton
                    variant='light'
                    title={selectedValue}
                    onSelect={handleSelect}
                  >
                    <Dropdown.Item eventKey="Laptops">Laptops</Dropdown.Item>
                    <Dropdown.Item eventKey="Speakers">Speakers</Dropdown.Item>
                    <Dropdown.Item eventKey="Headphones & Earbuds">Headphones & Earbuds</Dropdown.Item>
                    <Dropdown.Item eventKey="LED TVs">LED TVs</Dropdown.Item>
                    <Dropdown.Item eventKey="Projectors">Projectors</Dropdown.Item>
                    <Dropdown.Item eventKey="Microphones">Microphones</Dropdown.Item>
                    <Dropdown.Item eventKey="Computer Accessories">Computer Accessories</Dropdown.Item>
                    <Dropdown.Item eventKey="Laptop Accessories">Laptop Accessories</Dropdown.Item>
                    <Dropdown.Item eventKey="Mobile Accessories">Mobile Accessories</Dropdown.Item>
                    <Dropdown.Item eventKey="HDMI Accessories">HDMI Accessories</Dropdown.Item>
                    <Dropdown.Item eventKey="Barcode Scanners">Barcode Scanners</Dropdown.Item>
                    <Dropdown.Item eventKey="Keyboards">Keyboards</Dropdown.Item>
                    <Dropdown.Item eventKey="Mouses">Mouses</Dropdown.Item>
                    <Dropdown.Item eventKey="Monitors">Monitors</Dropdown.Item>
                    <Dropdown.Item eventKey="Keyboard Mouse Combo">Keyboard Mouse Combo</Dropdown.Item>
                    <Dropdown.Item eventKey="Home Theater">Home Theater</Dropdown.Item>
                    <Dropdown.Item eventKey="Smart Lighting">Smart Lighting</Dropdown.Item>
                    <Dropdown.Item eventKey="CCTV Camera">CCTV Camera</Dropdown.Item>
                    <Dropdown.Item eventKey="Smart Watch">Smart Watch</Dropdown.Item>
                  </DropdownButton>
                </div><br></br>
                <input type="text" placeholder='Enter Product Name' onChange={(e)=>setProductName(e.target.value)} required /><br></br><br></br>
                <input type="text" placeholder='Enter Brand Name' onChange={(e)=>setBrand(e.target.value)}  required /><br></br><br></br>
                <input type="text" placeholder='Enter Model Number' onChange={(e)=>setModelNo(e.target.value)} required /><br></br><br></br>
                <input type="text" placeholder='Enter Serial Number' onChange={(e)=>setSerialNo(e.target.value)}  required /><br></br><br></br>
                <input type="text" placeholder='Enter Purchase Price' onChange={(e)=>setPrice(e.target.value)} required /><br></br><br></br>
                <label htmlFor="purchase_date">Enter Purchase Date</label><br></br>
                <input type="date" id='purchase_date' onChange={(e)=>setPdate(e.target.value)} required /><br></br><br></br>
                <Form.Check label='Receive exclusive offers and product updates' value='Yes' onChange={handleCheckboxChange}/><br></br>
                <Button type='submit' className='continue'>Submit</Button><br></br><br></br>    
            </form>
            </Card.Body>
            </Card>  
        </div>)}
       <Footer/>
    </>
  )
}

export default WarrantyRegistration