import React from 'react'
import './footer.css'
import logo from '../../assets/GPT3.png'

const Footer = () => {
  return (
    <div className='gpt3__footer' id='footer'>
      <div className="gpt3__footer-heading section__padding">
        <h1 className='gradient__text'>Do you want to step in to the <br /> future before others</h1>
        <div className='gpt3__footer-content_title-p'>
        <p>Request Early Access</p>
        </div>
        
      </div>
      <div className='gpt3__footer-content section__padding'>
        <div className='gpt3__footer-content_title'>
          <img src={logo} alt='gpt3'/>
          
          <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
        
        </div>
        <div className='gpt3__footer-content_links'>
          <p id='link-header'>links</p>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-content_company'>
        <p id='link-company'>Company</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
          
        </div>
        <div className='gpt3__footer-content_contact'>
        <p id='link-contact'>Get in touch</p>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>085-132567</p>
          
        </div>
        
      </div>
      <div className='gpt3__footer-end'>© 2021 GPT-3. All rights reserved.</div>
    </div>
  )
}

export default Footer