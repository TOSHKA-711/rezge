import React from "react";
import "./style/Register.css";
import manImg from "../imgs/man avatar.png";
import FemaleImg from "../imgs/women avatar.png";
import { Link } from "react-router-dom";

const Register = () => {


  return (
    <div className="register">
      <Link to="/registerHus">
        <div className="child">
          <img src={manImg} className="man-img"></img>
          <h2>التسجيل كزوج</h2>
        </div>
      </Link>
      <Link to="/registerWife">
        <div className="child" >
          <img src={FemaleImg} className="women-img"></img>
          <h2>التسجيل كزوجة</h2>
        </div>
      </Link>
    </div>
  );
};

export default Register;
