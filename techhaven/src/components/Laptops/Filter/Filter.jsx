import React from 'react';
import '../Filter/Filter.css';
import Slider from 'rc-slider';
import { useState, useEffect } from 'react';
import 'rc-slider/assets/index.css';
import CurrencyInput from 'react-currency-input-field';
import Alert from 'react-bootstrap/Alert';
import { useFilter } from '../Context/FilterContext'; 

function Filter() {
  //State Initialization
  const { value, setValue } = useFilter();
  const [show, setShow] = useState(true);

  //Triggered when slider thumb moves
  const handleChange = (newValue) => {
    const [value1, value2] = newValue;
    const newMin = Math.min(value1, 699999);
    const newMax = Math.max(value2, 1);
    setValue([newMin, newMax]);
  };


  const handleMinChange = (newMin) => {
    const parsedMin = parseInt(newMin) || 0;
    setValue([parsedMin, value[1]]);
  };

  const handleMaxChange = (newMax) => {
    const parsedMax = parseInt(newMax) || 0;
    setValue([value[0], parsedMax]);
  };

  useEffect(() => {
    if (value[0] !== 0 || value[1] !== 700000) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [value]);

  return (
    <div className='filters'>
        <h3 className='filterstitle'>FILTERS</h3>
        <hr className='filterline'></hr>
        <div>
        {show && <Alert className='pricealert' variant='light' onClose={()=>{setShow(false); setValue([0,700000]);}} dismissible>
             <p>₹{value[0]} - ₹{value[1]}</p>
        </Alert>}
        </div>
        <div className='filterprice'>
        <h5 className='filterpricetitle'>Price</h5>
        </div>
        <div className='range'>
        <Slider
          range
          value={value}
          min={0}
          max={700000}
          onChange={handleChange}
          trackStyle={[{ backgroundColor: 'gray', height: 8 }]} // Track color
          railStyle={{ backgroundColor: 'lightgray', height: 8 }} // Rail color
          handleStyle={[
            { backgroundColor: 'black', border: '2px solid white', height: 18, width: 18 }, // Left handle
            { backgroundColor: 'black', border: '2px solid white', height: 18, width: 18 }  // Right handle
          ]}    
        />
      </div>
      <div className='priceinput'>
        <CurrencyInput placeholder="₹ 0" intlConfig={{ locale: 'en-IN', currency: 'INR' }} className='min' value={value[0]} onValueChange={handleMinChange}/>
        <p className='to'>to</p>
        <CurrencyInput placeholder="₹ 700000" intlConfig={{ locale: 'en-IN', currency: 'INR' }} className='max'  value={value[1]} onValueChange={handleMaxChange}/>
      </div>
      <hr className='filterline2'></hr>
      <br></br>
    </div>
  )
}

export default Filter