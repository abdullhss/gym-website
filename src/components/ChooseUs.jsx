import React from 'react'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import s7sign from '../assets/tick.png'
import nike from '../assets/nike.png'
import nb from '../assets/nb.png'
import adidas from '../assets/adidas.png'

import './Style/ChooseUs.css'
export default function ChooseUs() {
  return (
    // download extantion for time 
    <div id='ChooseUscontaner'>
        <div id='ChooseUsimges'>
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>

        <div id='ChooseUsContent'>
            <h1 >some reasons</h1>
            <h2> <span className='outlineText'>why</span> Choose Us? </h2>
            <div className='reason'>
              <img src={s7sign} />
              <h3>over 140+ expert coachs</h3>
            </div>
            <div className='reason'>
              <img src={s7sign} />
              <h3>train smarter and faster than before</h3>
            </div>
            <div className='reason'>
              <img src={s7sign} />
              <h3>1 free program for new member</h3>
            </div>
            <div className='reason'>
              <img src={s7sign} />
              <h3>reliable partners</h3>
            </div>
            <h3>our partners</h3>

            <div className='partnersLogos'>
              <img src={nb} alt="" />
              <img src={adidas} alt="" />
              <img src={nike} alt="" />
            </div>
            
        </div>
    </div>
  )
}
