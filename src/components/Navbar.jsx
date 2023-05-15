import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProfileIconLight from "@assets/profile-icon-light.png"
import ProfileIconDark from "@assets/profile-icon-dark.png"
import Switch from "./Switch";
import MenuIcon from "@assets/menu-icon.svg"
import CloseIcon from "@assets/close-icon.svg";
import { useSelector } from "react-redux";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth"

const Navbar = () => {

  const theme = useSelector((state) => state.theme.value)
  const [user] = useAuthState(auth);
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (e) => {
    setActive(e.title)
    handleMenuClick();
  }

  const menu = [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "Quotes",
      link: "/quotes"
    },
    {
      title: "About",
      link: "/about"
    }
  ];

  return (
    <div className="navbar">
      <div className="navbar__desktop">
        <header>
          <div className="navbar__desktop__theme__toggle">
            <Switch />
          </div>

          <nav>
            <ul>
              {menu.map((e, key) => {
                return <li className={active === e.title ? "active" : ""}
                  key={key} onClick={() => handleNavClick(e)}>
                  <Link to={e.link}>{e.title}</Link>
                </li>
              })}
            </ul>
            <div className="navbar__desktop__profile-icon">
              {user ? (
                <img src={user?.photoURL} />
              ) : (
                <img src={theme === 'light' ? ProfileIconLight : ProfileIconDark} />
              )}
            </div>
          </nav>
        </header>
      </div>

      <div className="navbar__hamburger-menu" onClick={handleMenuClick}>
        {isOpen ? <img src={CloseIcon} /> : <img src={MenuIcon} />}
      </div>

      {isOpen && <div className="navbar__mobile">
        <nav>
          <ul>
            {menu.map((e, key) => {
              return <li className={active === e.title ? "active" : ""}
                key={key} onClick={() => handleNavClick(e)}>
                <Link to={e.link}>{e.title}</Link>
              </li>
            })}
          </ul>
          <div className="navbar__mobile__theme__toggle">
            <Switch />
          </div>
        </nav>
      </div>
      }
    </div>
  )
}

export default Navbar;