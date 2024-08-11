import React from 'react'
import "./Style/Footer.css"
import gitHub from "../assets/github.png"
import linkedIn from "../assets/linkedin.png"
import logo from "../assets/logo.png"
export default function Footer() {
  return (
    <div className='footer' >
        <div className='footerSocial'>
            <a href="https://github.com/abdullhss" target='_blank' ><img className='github' src={gitHub} alt="" /></a>
            <a href="https://www.linkedin.com/in/abdullah-yosry/"  target='_blank'><img className='linkedin' src={linkedIn} alt="" /></a>
        </div>
        <div className='footerLogoContaner'>
            <img className='footerLogo' src={logo} alt="" />
        </div>
        <div className="blurEffect footerBlur"></div>
        <div className="footerBlur2"></div>
    </div>
  )
}
