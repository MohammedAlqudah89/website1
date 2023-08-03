import React from 'react'
import './Features.css'

const Features = ({title, text}) => {
  return (
    <div className='gpt3__feature-container__feature section__padding'>
       <div className='gpt3__feature-container__feature-title'>
      <div />
      <h1>{title}</h1>
        </div>
      <div className='gpt3__feature-container__feature-text'>
          <p>{text}</p>
        </div>
      
    </div>  
    
  )
}

export default Features