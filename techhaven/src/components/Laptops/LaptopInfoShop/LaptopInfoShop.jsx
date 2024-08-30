import React from 'react';
import Header from '../../Shop/Header/Header';
import Footer from '../../Home/Footer/Footer';
import Category from '../../Shop/Category/Category';
import { useParams } from 'react-router-dom';
import {useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import '../LaptopInfoShop/LaptopInfoShop.css';

function LaptopInfoShop() {
  const { laptopname } = useParams();
  const [laptopdata, setLaptopdata] = useState([]);

  useEffect(() => {
    const fetchLaptopDatabyName = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/product/filter-laptop-by-name/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: laptopname }),
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setLaptopdata([data]);
        } catch (error) {
          console.error('There was an error fetching the data!', error);
        }
      };
    
      fetchLaptopDatabyName();
  },[laptopname]);

  console.log(laptopdata);
  return (
    <>
    <Header/>
    <Category/>
    <div>
       {laptopdata.map((laptop)=>(
        <Card style={{ width: '10rem', height: 'auto', marginBottom: '20px'}}>
         {laptop.images && laptop.images.map((image, index) => (
              <Card.Img key={index} src={`http://localhost:8000${image}`} alt={`Image ${index + 1}`} className='smallcardimg'/>
            ))}
        </Card>
       ))
       }
    </div>
    <Footer/>
    </>
  )
}

export default LaptopInfoShop