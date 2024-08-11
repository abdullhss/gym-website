import "./Style/Counter.css"
export default function Counter({ title , number}){
    return(
        <div className="counterBox">
            <span className="number">{number}</span>
            <span className="title">{title}</span>
        </div>
    )
}