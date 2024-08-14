import React from 'react';
import ht from '../../../assets/ht.jpg';
import '../Product/Product.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


function Product() {
  return (
    <>
    <div className='textcontent'>
        <h1>HOME</h1>
        <h1>THEATER</h1><br></br><br></br>
        <h3>Experience stunning visuals and sound in the comfort of your home</h3>
    </div>
    <div className='product'>
       <img src={ht} alt='ht'/>
       <h1>Products tailored as per your needs</h1>
    </div>
    <div className='support'>
      <CardGroup className='cardgroup'>
        <Card>
        <h1> Have a question ? We are here to help.</h1><br></br>
        <p>Check out the most common questions our customers asked. Still have questions? Contact our customer support.</p>
        <p>Our customer support is available Monday to Friday: 10am-7pm.</p>
        </Card>
        <Card>
        <Accordion>
          <Accordion.Item eventKey="0">
          <Accordion.Header><h5>How to contact TechHaven</h5></Accordion.Header>
          <Accordion.Body>
          Get in touch with us for queries like How to purchase, Get dealership, Contact for sponsorship, Raise a service request - Contact Us.
          </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
          <Accordion.Header><h5>Register Product for Warranty</h5></Accordion.Header>
          <Accordion.Body>
          You can register your newest Zebronics product or buy an extended warranty by simply following this page - Warranty.
          </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </Card>
      </CardGroup>
    </div>
    </>
  )
}

export default Product