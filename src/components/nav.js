import React, { useState } from "react";
import "../components/style/nav.css";
import logo from "../imgs/WhatsApp_Image_2024-05-31_at_23.31.25_bb301489-removebg-preview.png";
import Button from "@mui/material/Button";
import { FaXmark } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const handleOpenLogin =()=>{
    window.open("./Login" , "_self");
  }
  const handleOpenSubscribe =()=>{
    window.open("./Register" , "_self");
  }
  const handleOpenHome =()=>{
    window.open("./" , "_self");
  }

  return (
    <nav className="nav">
      <div className="nav-bar">
        <div className="container">
          <div className="nav-links">
            <a onClick={handleOpenHome}>الرئيسية</a>
 
          </div>

          <div className="logo">
            <img src={logo} alt="logo" id="logo-img" />
          </div>

          <div className="nav-toggle-links">
            {isMenuOpen ? (
              <FaXmark className="x-mark" onClick={toggleMenu} />
            ) : (
              <FaBarsStaggered className="bars-mark" onClick={toggleMenu} />
            )}
          </div>

          <div className="nav-btns">
            <a href="#">
              <Button variant="contained" className="nav-btn" onClick={handleOpenLogin}>
                دخول
              </Button>
            </a>
            <a href="#">
              <button className="about-btn" onClick={handleOpenSubscribe}>أشتراك</button>
            </a>
          </div>
        </div>

        <div className={`nav-toggle-layer ${isMenuOpen ? "open" : ""}`}>
        <a onClick={handleOpenHome}>الرئيسية</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

// const handleScroll = () => {
//   const navBar = document.querySelector(".nav");
//   if (window.scrollY === 0) {
//     navBar.style.backgroundColor = "#fff";
//   } else {
//     navBar.style.backgroundColor = "";
//   }
// };

// useEffect(() => {
//   window.addEventListener("scroll", handleScroll);
//   return () => window.removeEventListener("scroll", handleScroll);
// }, []);

// const [toggleLayer, setToggleLayer] = useState(false);
