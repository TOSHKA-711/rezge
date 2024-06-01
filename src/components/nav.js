import React, { useState } from "react";
import "../components/style/nav.css";
import logo from "../imgs/WhatsApp_Image_2024-05-31_at_23.31.25_bb301489-removebg-preview.png";
import Button from "@mui/material/Button";
import { FaXmark } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <nav className="nav">
      <div className="nav-bar">
        <div className="container">
          <div className="nav-links">
            <Link to="/">الرئيسية</Link>
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
            <Link to="/login">
              <Button variant="contained" className="nav-btn">
                دخول
              </Button>
            </Link>
            <Link to="/register">
              <button className="about-btn">أشتراك</button>
            </Link>
          </div>
        </div>

        <div className={`nav-toggle-layer ${isMenuOpen ? "open" : ""}`}>
          <Link to="/">
            <a>الرئيسية</a>
          </Link>
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
