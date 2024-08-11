import React, { useState } from 'react'
import "./Style/Testimonial.css"
import { testimonialsData } from '../data/testimonialsData'
import rightArrow from '../assets/rightArrow.png'
import leftArrow from '../assets/leftArrow.png'
export default function Testimonial() {
  let [idx, SetIdx]= useState(0);
  let testmonials = testimonialsData.map((data , i)=>{return(

      <div className='RightSideTestmonial' key={i}>
        
        <div className="TestmonisalImageBackGroundOutline"/>
        <div className="TestmonisalImageBackGroundsolid"/>
        <img className="TestmonisalImage" src={data.image} />
        <div className='Arrows'>
          <img src={leftArrow}  alt="left Arrow " onClick={()=>{{if(idx>0){SetIdx(idx - 1)}else{SetIdx(testimonialsData.length - 1)}}}} />
          <img src={rightArrow} alt="left Arrow " onClick={()=>{{if(idx<2){SetIdx(idx + 1)} else{SetIdx(0)}}}}  />
        </div>
      </div>
  )})
  
  return (
    <div className='testimonial'>
        <div className='leftSideTestimonial'>
          <h4>Testimonials</h4>
          <h3 className='outlineText'>what they</h3>
          <h2>say about us</h2>
            <p>{testimonialsData[idx].review}</p>
            <span>{testimonialsData[idx].name} <span className='status'>-{testimonialsData[idx].status}</span></span>
        </div>
        {testmonials[idx]}
    </div>
  )
}
