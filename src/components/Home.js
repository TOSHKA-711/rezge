import React from "react";
import "./style/Home.css";
import homeImg from "../imgs/test1.jpg";
// import homeImg from "../imgs/home-3.jpg";

import Button from "@mui/material/Button";
import About from "./About";
import SearchForm from "./SearchForm";
import Footer from "./Footer";
import Subscribe from "./Subscribe";
import HomeIcons from "./HomeIcons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="home">
        <div className="container">
          <div className="home-img">
            <img src={homeImg}></img>
            <div className="layer"></div>
          </div>

          <div className="home-text">
            <h1> {t('home.home-sec.h1')} </h1>
            <h3> {t('home.home-sec.p')} </h3>
            <Link to="/register">
              <Button variant="contained" className="home-btn">
              {t('home.home-sec.sub-btn')} 
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <About />
      <SearchForm />
      <HomeIcons />
      <Subscribe />
    </>
  );
};

export default Home;
