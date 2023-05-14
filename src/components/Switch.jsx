import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { changeTheme } from "../store";
import { useDispatch } from "react-redux";

const Switch = () => {

  const dispatch = useDispatch()
  const [theme, setTheme] = useState(null);

  const localTheme = localStorage.getItem('theme');


  useEffect(() => {
    setTheme(localTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme == 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    dispatch(changeTheme(newTheme))
    localStorage.setItem('theme', newTheme);
  }

  return (
    <div className="toggle-switch" onClick={toggleTheme}>
      <div style={{
        transition: 'all 0.3s ease',
        background: localTheme == 'light' ? "#62A1FF" : 'gray'
      }} className="toggle-switch__container">
        <motion.div className="toggle-switch__container__button"
          initial={{
            x: localTheme == 'light' ? 'calc(100% + 5px)' : '0',
          }}
          animate={{
            x: theme == 'light' ? 'calc(100% + 5px)' : '0',
          }}
        ></motion.div>
      </div>
    </div>
  )
}

export default Switch;