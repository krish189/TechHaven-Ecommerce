import React from 'react';
import Card from 'react-bootstrap/Card';
import '../Explore/Explore.css';
import laptop from '../../../assets/laptop.jpg';
import ledtv from '../../../assets/ledtv.jpeg';
import speaker from '../../../assets/speaker.png';
import keyboardmouse from '../../../assets/keyboardmouse.jpg';
import soundbar from '../../../assets/soundbar.jpg';
import projector from '../../../assets/projectors.jpg';

function Explore() {
  return (
    <div className='explore'>
        <h1>Explore Products</h1>
        <div className='cardcontainer'>
        <Card style={{ width: '14rem'}}>
            <Card.Body>
            <Card.Img variant="top" src={laptop} />
            <Card.Title>Laptops</Card.Title>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem'}}>
            <Card.Body>
            <Card.Img variant="top" src={ledtv} />
            <Card.Title>LED TV</Card.Title>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem'}}>
            <Card.Body>
            <Card.Img variant="top" src={speaker} />
            <Card.Title>Party Speakers</Card.Title>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem'}}>
            <Card.Body>
            <Card.Img variant="top" src={keyboardmouse} />
            <Card.Title>Combos</Card.Title>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem'}}>
            <Card.Body>
            <Card.Img variant="top" src={soundbar} />
            <Card.Title>Soundbar</Card.Title>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem'}}>
            <Card.Body>
            <Card.Img variant="top" src={projector} />
            <Card.Title>Projectors</Card.Title>
            </Card.Body>
        </Card>
        </div>
    </div>
  )
}

export default Explore