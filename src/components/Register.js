import React from "react";
import "./style/Register.css";
import manImg from "../imgs/man avatar.png";
import FemaleImg from "../imgs/women avatar.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";



const Register = () => {
  const { t, i18n } = useTranslation();



  return (
    <div className="register">
      <Link to="/registerHus">
        <div className="child">
          <img src={manImg} className="man-img"></img>
          <h2> {t('register.card2')}</h2>
        </div>
      </Link>
      <Link to="/registerWife">
        <div className="child" >
          <img src={FemaleImg} className="women-img"></img>
          <h2>  {t('register.card1')}</h2>
        </div>
      </Link>
    </div>
  );
};

export default Register;
