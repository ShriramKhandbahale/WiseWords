import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { auth } from './config/firebase';
import { useAuthState } from "react-firebase-hooks/auth"
// components
import Navbar from '@components/Navbar';
import AuthCard from '@components/AuthCard';
import LoadingScreen from '@components/LoadingScreen'

// pages 
import Home from '@pages/Home';
import Quotes from '@pages/Quotes';
import About from '@pages/About';

const App = () => {
  const theme = useSelector((state) => state.theme.value)
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className='App' id={theme}>
      <Navbar />
      <Routes>
        <Route path='/' element={user ? <Home /> : <AuthCard />} />
        <Route path='/quotes' element={user ? <Quotes /> : <AuthCard />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
