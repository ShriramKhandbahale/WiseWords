// packages 
import React from 'react'
import { motion } from 'framer-motion';
import { auth, provider } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const AuthCard = () => {
  const navigate = useNavigate();

  const signIn = async () => {
    await signInWithPopup(auth, provider);
    navigate('/')
  }

  return (
    <motion.div className='auth-card'
      initial={{
        top: '55%',
        opacity: 0.5,
      }}

      transition={{
        type: 'tween',
        duration: '1'
      }}
      animate={{
        top: '50%',
        opacity: 1,
      }}
    >
      <div className="auth-card__message">
        <h1>Sign In</h1>
        <span className='auth-card__message__description'>We only show quotes to real people</span>
      </div>
      <div className="auth-card__auth-btn">
        <button onClick={signIn}>Continue With Google</button>
      </div>
    </motion.div>
  )
}

export default AuthCard;
