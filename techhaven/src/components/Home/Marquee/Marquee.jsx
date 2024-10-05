import React from 'react';
import '../Marquee/Marquee.css';
import dot from '../../../assets/dot.png';

function Marquee() {
  return (
    <div className='marqueeparent'>
        <div className='marquee'>
            <p><img src={dot} alt='dot' className='doticon'/> TechHaven: Your Reliable Tech Partner </p>
            <p><img src={dot} alt='dot' className='doticon'/> Join the TechHaven Family! Your Satisfaction is Our Top Priority! </p>
            <p><img src={dot} alt='dot' className='doticon'/> Experience Unmatched Quality with Every Product at TechHaven! </p>
            <p><img src={dot} alt='dot' className='doticon'/> TechHaven: Constant Updates. Discover More!</p>
            <p><img src={dot} alt='dot' className='doticon'/> TechHaven: Your Reliable Tech Partner </p>
            <p><img src={dot} alt='dot' className='doticon'/> Join the TechHaven Family! Your Satisfaction is Our Top Priority! </p>
            <p><img src={dot} alt='dot' className='doticon'/> Experience Unmatched Quality with Every Product at TechHaven! </p>
            <p><img src={dot} alt='dot' className='doticon'/> TechHaven: Constant Updates. Discover More! <img src={dot} alt='dot' className='lastdot'/></p>
        </div>
    </div>
  )
}

export default Marquee