import "./Style/ProgramCard.css"
import RightArrow from '../assets/rightArrow.png'
export default function ProgramCard({image,heading,details}) {
return (
    <div className="Card">
        {image}
        <span>{heading}</span>
        <span>{details}</span>
        <div className="joinNow"> <span>Join Now</span> <img src={RightArrow} alt="" /></div>
    </div>
)
}
