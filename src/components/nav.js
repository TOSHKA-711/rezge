import React, { useContext, useState } from "react";
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
import { useTranslation } from "react-i18next";
import { MyContext } from "../contextApi/MyProvider";
import { AiFillSketchCircle } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("AR");
  const { selectedLanguage, setSelectedLanguage } = useContext(MyContext);
  const { loginState, setLoginState } = useContext(MyContext);

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
  const changeLanguageAr = () => {
    i18n.changeLanguage("en");
    setSelectedLanguage("AR");
  };
  const changeLanguageEN = () => {
    i18n.changeLanguage("ar");
    setSelectedLanguage("EN");
  };
  const changeLanguageFR = () => {
    i18n.changeLanguage("fr");
    setSelectedLanguage("FR");
  };

  return !loginState ? (
    <nav className="nav">
      <div className="nav-bar">
        <div className="container">
          <div className="nav-links">
            <Link to="/">{t("nav.home")}</Link>
            <FormControl>
              <Select
                value={language}
                onChange={handleChangeLanguage}
                displayEmpty
              >
                <MenuItem value={"AR"} onClick={() => changeLanguageAr()}>
                  AR
                </MenuItem>
                <MenuItem value={"EN"} onClick={() => changeLanguageEN()}>
                  EN
                </MenuItem>
                <MenuItem value={"FR"} onClick={() => changeLanguageFR()}>
                  FR
                </MenuItem>
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
                {t("nav.login")}
              </Button>
            </Link>
            <Link to="/register">
              <button className="about-btn">{t("nav.subscribe")}</button>
            </Link>
          </div>
        </div>

        <div className={`nav-toggle-layer ${isMenuOpen ? "open" : ""}`}>
          <Link to="/">
            <a>{t("nav.home")}</a>
          </Link>
          <Link to="/register">
            <button className="about-btn">{t("nav.subscribe")}</button>
          </Link>
        </div>
      </div>
    </nav>
  ) : (
    <nav className="nav">
      <div className="nav-bar">
        <div className="container">
          <div className="nav-links">
            <Link to="/">{t("nav.home")}</Link>
            <FormControl>
              <Select
                value={language}
                onChange={handleChangeLanguage}
                displayEmpty
              >
                <MenuItem value={"AR"} onClick={() => changeLanguageAr()}>
                  AR
                </MenuItem>
                <MenuItem value={"EN"} onClick={() => changeLanguageEN()}>
                  EN
                </MenuItem>
                <MenuItem value={"FR"} onClick={() => changeLanguageFR()}>
                  FR
                </MenuItem>
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
          <Link>
          <IoMdNotificationsOutline className="notifications-icon"/>
          </Link>
            <Link to="" className="user-profile">
              <FaUserCircle className="user-icon" />
              <ul class="list">
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </Link>
            <Link to="">
              <Button variant="contained" className="nav-btn">
                <AiFillSketchCircle className="icon" /> باقة التميز
              </Button>
            </Link>
          </div>
        </div>

        <div className={`nav-toggle-layer ${isMenuOpen ? "open" : ""}`}>
          <Link to="/">
            <a>{t("nav.home")}</a>
          </Link>
          <Link to="/register">
            <button className="about-btn">{t("nav.subscribe")}</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
