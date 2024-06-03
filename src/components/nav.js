import React, { useState } from "react";
import "../components/style/nav.css";
import logo from "../imgs/WhatsApp_Image_2024-05-31_at_23.31.25_bb301489-removebg-preview.png";
import Button from "@mui/material/Button";
import { FaXmark } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTranslation } from 'react-i18next';


const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("AR");



  // handle toggle navbar 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  // handle change language
  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };

// handle i18n 
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
   
  };;


  return (
    <nav className="nav">
      <div className="nav-bar">
        <div className="container">
          <div className="nav-links">
            <Link to="/">{t('nav.home')}</Link>
            <FormControl>
              <Select
                value={language}
                onChange={handleChangeLanguage}
                displayEmpty
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value={"AR"} onClick={()=>changeLanguage("en")}>AR</MenuItem>
                <MenuItem value={"EN"} onClick={()=>changeLanguage("ar")}>EN</MenuItem>
                <MenuItem value={"FR"} onClick={()=>changeLanguage("fr")}>FR</MenuItem>
              </Select>
            </FormControl>
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
              {t('nav.login')}
              </Button>
            </Link>
            <Link to="/register">
              <button className="about-btn">{t('nav.subscribe')}</button>
            </Link>
          </div>
        </div>

        <div className={`nav-toggle-layer ${isMenuOpen ? "open" : ""}`}>
          <Link to="/">
            <a>{t('nav.home')}</a>
          </Link>
          <Link to="/register">
            <button className="about-btn">{t('nav.subscribe')}</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;


