import React from "react";
import "./style/Register.css";
import manImg from "../imgs/man avatar.png";
import FemaleImg from "../imgs/women avatar.png";

const Register = () => {
  const handleOpenHusbandRegister =()=>{
    window.open("./RegisterHus" , "_self");
  }
  const handleOpenWifeRegister =()=>{
    window.open("./RegisterWife" , "_self");
  }


  return (
    <div className="register">
      <div className="child" onClick={handleOpenHusbandRegister}>
        <img src={manImg} className="man-img"></img>
        <h2>التسجيل كزوج</h2>
      </div>
      <div className="child" onClick={handleOpenWifeRegister}>
        <img src={FemaleImg}  className="women-img"></img>
        <h2>التسجيل كزوجة</h2>
      </div>
    </div>
  );
};

export default Register;
