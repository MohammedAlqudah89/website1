import React from 'react'
import { Brand, Cta, Navbar} from './Component'
import { Blog, Footer, Header, Feature, Possibility, WhatGPT3 } from './containers'
import './App.css'
import './index.css'

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__blog'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 /> 
        <Feature />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
        </div>
  )
}

export default App