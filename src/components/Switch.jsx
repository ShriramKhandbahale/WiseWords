import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { changeTheme } from "../store";
import { useDispatch } from "react-redux";

const Switch = () => {
  const dispatch = useDispatch();
  const theme = localStorage.getItem('theme') || 'light';

  useEffect(() => {
    dispatch(changeTheme(theme));
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(changeTheme(newTheme));
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="toggle-switch" onClick={toggleTheme}>
      <div
        style={{
          transition: 'all 0.3s ease',
          background: theme === 'light' ? "#62A1FF" : 'gray',
        }}
        className="toggle-switch__container"
      >
        <motion.div
          className="toggle-switch__container__button"
          initial={{
            x: theme === 'light' ? 'calc(100% + 5px)' : '0',
          }}
          animate={{
            x: theme === 'light' ? 'calc(100% + 5px)' : '0',
          }}
        ></motion.div>
      </div>
    </div>
  );
};

export default Switch;