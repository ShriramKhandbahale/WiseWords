import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProfileIcon from "@assets/profile-icon-light.png"
import Switch from "./Switch";
import MenuIcon from "@assets/menu-icon.svg"
import CloseIcon from "@assets/close-icon.svg";

const Navbar = () => {

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
              <img src={ProfileIcon} alt="" />
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