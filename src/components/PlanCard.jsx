import React from 'react'
import './Style/PlanCard.css'
import whiteTick from '../assets/whiteTick.png'
import rightArrow from '../assets/rightArrow.png'

export default function PlanCard({photo , title , features , price , id}) {

  return (
    <div className='PlanCard' id={id}>
      {photo}
      <h1>{title}</h1>
      <h3 className='price'>$ {price}</h3>
      <div className='features'>
        { features.map((f , i)=>{
          return(
            <div className='feature' key={i}>
            < img src={whiteTick} />
            <span>{f}</span>
          </div>
          )
        })}
      </div>
        <span className='SeeMore'>See more details -> </span> 
      <button className='btn'>join now</button>
    </div>
  )
}
