import React from 'react'
import './blog.css'
import { Article } from '../../Component'
import blog01 from '../../assets/blog01.png'
import blog02 from '../../assets/blog02.png'
import blog03 from '../../assets/blog03.png'
import blog04 from '../../assets/blog04.png'
import blog05 from '../../assets/blog05.png'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>
        A lot is happening, <br /> 
        We are blogging about it.  
        </h1>
      </div>
      <div className='gpt3__blog-container'>
      <div className='gpt3__blog-container_groupA'>
        <Article date='Sep 26, 2021' img={blog01} text='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
      </div>
      <div className='gpt3__blog-container_groupB'>
      <Article date='Sep 26, 2021' img={blog02} text='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
      <Article date='Sep 26, 2021' img={blog03} text='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
      <Article date='Sep 26, 2021' img={blog04} text='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
      <Article date='Sep 26, 2021' img={blog05} text='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
      </div>
      </div>
    </div>
  )
}

export default Blog