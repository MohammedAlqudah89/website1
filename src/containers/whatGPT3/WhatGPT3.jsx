import React from 'react'
import './whatgpt3.css'
import Features from '../../Component/features/Features'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__wgpt section__margin' id='wgpt3'>
      <div className='gpt3__wgpt-feature'>
        <Features title='What is GPT-3' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'/>
      </div>
      <div className='gpt3__wgpt_heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt__wgpt-container'>
        <Features title= 'Chatbots' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. '/>
        <Features title='Knowledgebase' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'/>
        <Features title='Education' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'/>
      </div>
    </div>
  )
}

export default WhatGPT3