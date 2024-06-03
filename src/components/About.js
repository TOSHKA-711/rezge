import React from "react";
import aboutImg from "../imgs/aboutImg.png";
import "./style/About.css";
import { useTranslation } from 'react-i18next';
const About = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="about">
      <div className="container">
        <div className="about-img">
          <img src={aboutImg}></img>
        </div>
        <div className="about-text">
          <h1>   {t('home.about.title')}</h1>
          <p>
          {t('home.about.p')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
