import React from 'react';
import '../Subscribe/Subscribe.css';
import Button from 'react-bootstrap/Button';
import channel from '../../../assets/channel.jpg';

function Subscribe() {
  return (
    <div className='subscribe'>
        <img src={channel} alt='channel'/>
        <h2>Subscribe for Latest Updates</h2>
        <h1>Official TechHaven Channel</h1>
        <Button variant="light" size='lg'>Subscribe</Button>
    </div>
  )
}

export default Subscribe