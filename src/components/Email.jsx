import React, { useRef } from 'react'
import "./Style/Email.css"
import emailjs from "@emailjs/browser"
export default function Email() {
    let formRef = useRef() ; 


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_5cic2lv', 'template_wxlsxxi', form.current, {
            publicKey: '6bLk5Ppz3VTpEPLvD',
          })
          .then(
            (res) => {
              console.log('SUCCESS!' , res.text);
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <>
        <div className='EmailSection'>
            <div className='EmailleftSection'>
                <hr />
                <span> <span className='outlineText'>Ready to </span> <span style={{color:"white"}}>level up</span></span>
                <span> <span style={{color:"white"}}>your body</span> <span className='outlineText'>with us ?</span></span>
            </div>
            <div className="EmailRightSection">
                <form ref={ formRef } onSubmit={sendEmail}>
                    <input type="email" placeholder='Enter your Email Address' name='user_email'/>
                    <button type='submit' className='btn'>Join Now</button>
                </form>
            </div>
        </div>
        <hr />
    </>
  )
}
