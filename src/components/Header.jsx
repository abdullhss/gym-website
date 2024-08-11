import logo from '../assets/logo.png';
import './Style/Header.css'
import burgerIcone from "../assets/bars.png"
import {useState } from 'react'; 
export default function Header() {
    let [menuOpen , setMenuOpen] = useState(false);
    // if(window.innerWidth >= 768 ){
    //     setMenuOpen(true)
    // }
return (
    <header>
        <a href="#">  <img  id="logo" src={logo} alt="logo" /> </a>
        <div   style={{display:menuOpen ? "none" : "block" }}  className='burgerIconeContaner'><img className='BurgerIcnoe'src={burgerIcone} alt="" onClick={()=>{setMenuOpen(!menuOpen)}} />        </div>
        <ul style={{display:menuOpen ? "block" : "none" }}>
            <li onClick={()=>{setMenuOpen(false)}}><a href="#">home</a></li>
            <li onClick={()=>{setMenuOpen(false)}}><a href="#">Programs</a></li>
            <li onClick={()=>{setMenuOpen(false)}}><a href="#">Why us</a></li>
            <li onClick={()=>{setMenuOpen(false)}}><a href="#">Plans</a></li>
            <li onClick={()=>{setMenuOpen(false)}}><a href="#">testimonials</a></li>
        </ul>
    </header>
)
}
