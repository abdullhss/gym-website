import React from 'react'
import './Style/Plans.css'
import PlanCard from './PlanCard'
import {plansData} from "../data/plansData"
export default function Plans() {
  return (
    <div className='Plans'>
        <div className="PlansHeader">
            <span className='outlineText'>ready to start</span>
            <span>your journey</span>
            <span className='outlineText'>Now Withus</span>
        </div>
        <div className="blurEffect blurPlan"></div>
        <div className="blurEffect blurPlan2"></div>
        <div className='PlanCardContaner'>
          {
            plansData.map((planData , i )=>{
              return( <PlanCard photo={planData.icon} title={planData.name} features={planData.features} price={planData.price} key={i} id={`idIs${i}`}></PlanCard>)
            })
          }
        </div>
    </div>
  )
}
