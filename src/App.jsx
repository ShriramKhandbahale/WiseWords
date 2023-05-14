import { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux';

// components
import Navbar from '@components/Navbar';

// pages 
import Home from '@pages/Home';
import Quotes from '@pages/Quotes';
import About from '@pages/About';

const App = () => {
  const theme = useSelector((state) => state.theme.value)
  return (
    <div className='App' id={theme}>
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
