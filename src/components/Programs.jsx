import "./Style/Programs.css"
import {programsData} from "../data/programsData.jsx"
import ProgramCard from "./ProgramCard.jsx"
export default function Programs() {
return (
    <div className="programs">
        <div className="ProgramsSpans">
            <span className="outlineText">EXPLORE OUR</span><span>PROGRAMS</span><span className="outlineText">TO SHAPE YOU</span>
        </div>
        <div className="ProgramsCards">
            {programsData.map((program , index)=>{
                return ( <ProgramCard kye={index} image={program.image} details={program.details} heading={program.heading}></ProgramCard>) ;
            })}
        </div>
    </div>
)
}
