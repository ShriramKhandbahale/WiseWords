import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

// components
import Navbar from '@components/Navbar';

// pages 
import Home from '@pages/Home';
import Quotes from '@pages/Quotes';
import About from '@pages/About';

const App = () => {

  return (
    <div className='App' id='light'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quotes' element={<Quotes />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
