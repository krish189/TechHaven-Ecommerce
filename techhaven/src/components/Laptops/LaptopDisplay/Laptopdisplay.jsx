import React from 'react';
import '../LaptopDisplay/Laptopdisplay.css';
import Filter from '../Filter/Filter';
import Form from 'react-bootstrap/Form';

function Laptopdisplay() {
  return (
    <>
    <div className='laptoppagetitle'>
        <h1 className='laptoppagehead'>LAPTOP</h1>
        <p className='laptoppagetitlecontent'>For Work, Play, Versatility and Reliability. Engineered for Performance, Built to Endure.</p>
        <p className='laptoppagetitlecontent'>1-year Brand Warranty, 100+ Service Centers.</p>
    </div>
    <Filter/>
    <div>
      <h5 className='filtercategorytitle'>Product Category</h5>
      <Form.Check label='All' className='categorycheckbox'/>
      <Form.Check label='Ultrabooks' className='categorycheckbox'/>
      <Form.Check label='Gaming Laptops' className='categorycheckbox'/>
      <Form.Check label='2-in-1 Laptops' className='categorycheckbox'/>
      <Form.Check label='Business Laptops' className='categorycheckbox'/>
      <Form.Check label='Workstation Laptops' className='categorycheckbox'/>
      <Form.Check label='Everyday Laptops' className='categorycheckbox'/>
      <Form.Check label='Rugged Laptops' className='categorycheckbox'/>
      <Form.Check label='Chromebooks' className='categorycheckbox'/>
    </div>
    </>
  )
}

export default Laptopdisplay