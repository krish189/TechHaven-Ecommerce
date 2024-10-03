import React from 'react';
import './ProductFAQ.css';
import Marquee from '../Home/Marquee/Marquee';
import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';
import Card from 'react-bootstrap/Card';
import laptop_icon from '../../assets/laptop_icon.png';
import speaker_icon from '../../assets/speaker_icon.png';
import headphone_earbud_icon from '../../assets/headphone_earbud_icon.png';
import ledtv_icon from '../../assets/ledtv_icon.png';
import projector_icon from '../../assets/projector_icon.png';
import microphone_icon from '../../assets/microphone_icon.png';
import computer_accessories_icon from '../../assets/computer_accessories_icon.png';
import laptop_accessories_icon from '../../assets/laptop_accessories_icon.png';
import mobile_accessories_icon from '../../assets/mobile_accessories_icon.png';
import hdmi_accessories_icon from '../../assets/hdmi_accessories_icon.png';
import barcode_scanner_icon from '../../assets/barcode_scanner_icon.png';
import keyboard_icon from '../../assets/keyboard_icon.png';
import mouse_icon from '../../assets/mouse_icon.png';
import monitor_icon from '../../assets/monitor_icon.png';
import combo_icon from '../../assets/combo_icon.png';
import home_theater_icon from '../../assets/home_theater_icon.png';
import smart_light_icon from '../../assets/smart_light_icon.png';
import cctv_camera_icon from '../../assets/cctv_camera_icon.png';
import smart_watch_icon from '../../assets/smart_watch_icon.png';
import { useNavigate } from 'react-router-dom';

function ProductFAQ() {
  const navigate = useNavigate();
  return (
    <>
    <Marquee/>
    <Header/>
    <div className='faq-div'>
    <div className='find-your-product-card'>
        <p className='find-your-product-head'>Find Your Product</p>
        <p className='find-your-product-txt'>You can choose a category and read through frequently asked questions.</p>
        <div className='flex-a'>
        <Card style={{ width: '14rem',height: '14rem', border: '1px solid black'}} onClick={()=>navigate('/support/product-faq/laptop-faq')}>
            <Card.Body>
            <Card.Img variant="top" src={laptop_icon} />
            <Card.Title>Laptop</Card.Title>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem',height: '14rem', border: '1px solid black'}} onClick={()=>navigate('/support/product-faq/speaker-faq')}>
            <Card.Body>
            <Card.Img variant="top" src={speaker_icon} />
            <Card.Title>Speaker</Card.Title>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem',height: '14rem', border: '1px solid black'}} onClick={()=>navigate('/support/product-faq/headphone-earbud-faq')}>
            <Card.Body>
            <Card.Img variant="top" src={headphone_earbud_icon} />
            <Card.Title>Headphones & Earbuds</Card.Title>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem',height: '14rem', border: '1px solid black'}} onClick={()=>navigate('/support/product-faq/ledtv-faq')}>
            <Card.Body>
            <Card.Img variant="top" src={ledtv_icon} />
            <Card.Title>LED TV</Card.Title>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem',height: '14rem', border: '1px solid black'}} onClick={()=>navigate('/support/product-faq/projector-faq')}>
            <Card.Body>
            <Card.Img variant="top" src={projector_icon} />
            <Card.Title>Projector</Card.Title>
            </Card.Body>
        </Card>
        </div>
        <div className='flex-b'>
        <Card style={{ width: '14rem',height: '14rem', border: '1px solid black'}} onClick={()=>navigate('/support/product-faq/microphone-faq')}>
            <Card.Body>
            <Card.Img variant="top" src={microphone_icon} />
            <Card.Title>Microphone</Card.Title>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem',height: '14rem', border: '1px solid black'}} onClick={()=>navigate('/support/product-faq/computer-accessories-faq')}>
            <Card.Body>
            <Card.Img variant="top" src={computer_accessories_icon} />
            <Card.Title>Computer Accessories</Card.Title>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem',height: '14rem', border: '1px solid black'}} onClick={()=>navigate('/support/product-faq/laptop-accessories-faq')}>
            <Card.Body>
            <Card.Img variant="top" src={laptop_accessories_icon} />
            <Card.Title>Laptop Accessories</Card.Title>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem',height: '14rem', border: '1px solid black'}} onClick={()=>navigate('/support/product-faq/mobile-accessories-faq')}>
            <Card.Body>
            <Card.Img variant="top" src={mobile_accessories_icon} />
            <Card.Title>Mobile Accessories</Card.Title>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem',height: '14rem', border: '1px solid black'}} onClick={()=>navigate('/support/product-faq/hdmi-accessories-faq')}>
            <Card.Body>
            <Card.Img variant="top" src={hdmi_accessories_icon} />
            <Card.Title>HDMI Accessories</Card.Title>
            </Card.Body>
        </Card>
        </div>
        <div className='flex-c'>
        <Card style={{ width: '14rem',height: '14rem', border: '1px solid black'}} onClick={()=>navigate('/support/product-faq/barcode-scanner-faq')}>
            <Card.Body>
            <Card.Img variant="top" src={barcode_scanner_icon} />
            <Card.Title>Barcode Scanner</Card.Title>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem',height: '14rem', border: '1px solid black'}} onClick={()=>navigate('/support/product-faq/keyboard-faq')}>
            <Card.Body>
            <Card.Img variant="top" src={keyboard_icon} />
            <Card.Title>Keyboard</Card.Title>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem',height: '14rem', border: '1px solid black'}} onClick={()=>navigate('/support/product-faq/mouse-faq')}>
            <Card.Body>
            <Card.Img variant="top" src={mouse_icon} />
            <Card.Title>Mouse</Card.Title>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem',height: '14rem', border: '1px solid black'}} onClick={()=>navigate('/support/product-faq/monitor-faq')}>
            <Card.Body>
            <Card.Img variant="top" src={monitor_icon} />
            <Card.Title>Monitor</Card.Title>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem',height: '14rem', border: '1px solid black'}} onClick={()=>navigate('/support/product-faq/combo-faq')}>
            <Card.Body>
            <Card.Img variant="top" src={combo_icon} />
            <Card.Title>Keyboard Mouse Combo</Card.Title>
            </Card.Body>
        </Card>
        </div>
        <div className='flex-d'>
        <Card style={{ width: '14rem',height: '14rem', border: '1px solid black'}} onClick={()=>navigate('/support/product-faq/home-theater-faq')}>
            <Card.Body>
            <Card.Img variant="top" src={home_theater_icon} />
            <Card.Title>Home Theater</Card.Title>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem',height: '14rem', border: '1px solid black'}} onClick={()=>navigate('/support/product-faq/smart-light-faq')}>
            <Card.Body>
            <Card.Img variant="top" src={smart_light_icon} />
            <Card.Title>Smart Light</Card.Title>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem',height: '14rem', border: '1px solid black'}} onClick={()=>navigate('/support/product-faq/cctv-camera-faq')}>
            <Card.Body>
            <Card.Img variant="top" src={cctv_camera_icon} />
            <Card.Title>CCTV Camera</Card.Title>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem',height: '14rem', border: '1px solid black'}} onClick={()=>navigate('/support/product-faq/smart-watch-faq')}>
            <Card.Body>
            <Card.Img variant="top" src={smart_watch_icon} />
            <Card.Title>Smart Watch</Card.Title>
            </Card.Body>
        </Card>
        </div>
    </div>
    </div>    
    <Footer/>
    </>
  )
}

export default ProductFAQ