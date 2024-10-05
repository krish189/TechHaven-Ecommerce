import React from 'react';
import '../Subscribe/Subscribe.css';
import Button from 'react-bootstrap/Button';
import channel from '../../../assets/channel.jpg';
import { useState, useEffect } from 'react';

function Subscribe() {
  const [subscribe, setSubscribe] = useState(false);

  const handleSubscribe = () => {
    setSubscribe(true);
  }


  useEffect(() => {
    if (subscribe) {
      const timeout = setTimeout(() => {
        setSubscribe(false);
      }, 5000); 

      return () => clearTimeout(timeout);
    }
  }, [subscribe]);

  return (
    <div className='subscribe'>
        <img src={channel} alt='channel'/>
        <h2>Subscribe for Latest Updates</h2>
        <h1>Official TechHaven Channel</h1>
        <Button variant="light" size='lg' onClick={handleSubscribe}>Subscribe</Button><br></br><br></br>
        {subscribe && <h2>Thank you for subscribing!</h2>}
    </div>
  )
}

export default Subscribe