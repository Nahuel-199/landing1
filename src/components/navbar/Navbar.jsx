import React, { useState } from 'react'
import logo from "../../images/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

    const handleClick = () => {
      setClicked(!clicked);
    };

  return (
    <nav>
        <Link to="main" className="logo"  smooth={true} duration={2000}>
            <img src={logo} alt="logo" />
        </Link>
        <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"} style={{color: "white"}}></i>
      </div>
        <input className='menu-btn' type="checkbox" id="menu-btn" />
       {/*  <label className="menu-icons" onClick={handleClick} for="menu-btn">
            <span className="nav-icon"></span>
         </label> */}
         <ul className={clicked ? "menu active" : "menu"} smooth={true} duration={1000}>
            <li><Link to="main" smooth={true} duration={1000}>Header</Link></li>
            <li><Link to="features" smooth={true} duration={1000}>Features</Link></li>
            <li><Link to="presentaion" smooth={true} duration={1000}>Offer</Link></li>
            <li><Link to="about" smooth={true} duration={1000}>About</Link></li>
            <li><Link to="contact" smooth={true} duration={1000}>Contact</Link></li>
         </ul>
        </nav>
  )
}

export default Navbar