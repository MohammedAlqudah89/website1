import React from 'react'
import './possibility.css'
import  possibility  from '../../assets/possibility.png'


const Possibility = () => {
  return (
    <div>
      <div className='gpt3__feature-second section__padding' id='possibility'>
          <div className='gpt3__feature-second-img'>
          <img src={possibility} alt="possibility" />
        </div> 
        <div className='gpt3__feature-second-container'>
          <p className='feature-p'> Request Early Access to Get Started</p>
          <h2 className='gradient__text'>The possibilities are beyond your imagination</h2>
          <p className='feature-p2'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <p className='feature-p3'>Request Early Access to Get Started</p>
        </div>
      </div>
    </div>
  )
}

export default Possibility