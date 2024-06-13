import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
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
import { IoIosLogOut } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineNotificationsActive } from "react-icons/md";
import Notification from "./items/Notification";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    selectedLanguage,
    setSelectedLanguage,
    loginState,
    setLoginState,
    token,
    setToken,
    notificationsCount,
    setNotificationsCount,
  } = useContext(MyContext);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state

  // handle toggle navbar
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // handle change language
  const handleChangeLanguage = (event) =>
    setSelectedLanguage(event.target.value);

  // handle i18n
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    const languageMap = {
      AR: "ar",
      EN: "en",
      FR: "fr",
    };
    i18n.changeLanguage(languageMap[lang]);
    setSelectedLanguage(lang);
  };

  const handleLogOut = () => {
    setLoginState(false);
    window.location.href = "/rezge/";
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading
      try {
        const response = await axios.get(
          "http://back.rezge.com/api/notifications/user",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setNotifications(response.data.notifications);
        setNotificationsCount(response.data.count);
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchData();
  }, [token]); // Add token to dependency array

  return (
    <nav className="nav">
      <div className="nav-bar">
        <div className="container">
          <div className="nav-links">
            <Link to="/">{t("nav.home")}</Link>
            <FormControl>
              <Select
                value={selectedLanguage}
                onChange={handleChangeLanguage}
                displayEmpty
              >
                <MenuItem value="AR" onClick={() => changeLanguage("AR")}>
                  AR
                </MenuItem>
                <MenuItem value="EN" onClick={() => changeLanguage("EN")}>
                  EN
                </MenuItem>
                <MenuItem value="FR" onClick={() => changeLanguage("FR")}>
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
            {!loginState ? (
              <>
                <Link to="/login">
                  <Button variant="contained" className="nav-btn">
                    {t("nav.login")}
                  </Button>
                </Link>
                <Link to="/register">
                  <button className="about-btn">{t("nav.subscribe")}</button>
                </Link>
              </>
            ) : (
              <>
                <Link className="notifications">
                  {notifications.length === 0 ? (
                    <IoMdNotificationsOutline className="notifications-icon empty" />
                  ) : (
                    <MdOutlineNotificationsActive className="notifications-icon !empty" />
                  )}
                  <div className="notifications-count">
                    {notificationsCount}
                  </div>
                  <div className="notifications-bar">
                    {notifications.map((item) => {
                      return (
                        <Notification
                          className="notif-child"
                          key={item.notifiable_id}
                          sender={item.data.sender_name}
                        />
                      );
                    })}

                    {/* <Notification className="notif-child" sender="tooshka" /> */}
                  </div>
                </Link>
                <div className="user-profile">
                  <FaUserCircle className="user-icon" />
                  <ul className="list">
                    <li>
                      <Link to="/profile">
                        profile <FaRegUser className="logout-icon" />
                      </Link>
                    </li>
                    <li onClick={handleLogOut}>
                      <Link to="/">
                        logout <IoIosLogOut className="logout-icon" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link to="">
                  <Button variant="contained" className="nav-btn">
                    <AiFillSketchCircle className="icon" /> باقة التميز
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>

        <div className={`nav-toggle-layer ${isMenuOpen ? "open" : ""}`}>
          <Link to="/">
            <a>{t("nav.home")}</a>
          </Link>
          <Link to="/register">
            <button className="about-btn">{t("nav.subscribe")}</button>
          </Link>
          <Link to="">
            <Button variant="contained" className="nav-btn">
              <AiFillSketchCircle className="icon" /> باقة التميز
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
