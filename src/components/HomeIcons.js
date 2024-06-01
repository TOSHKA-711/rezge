import React from "react";
import "./style/HomeIcons.css";
import { FaHeadset, FaUserCheck, FaIdCard, FaShieldAlt } from 'react-icons/fa';

const HomeIcons = () => {
  return (
    <div className="home-icons">
  
      <div className="security-section">
        <div className="icon-container">
          <FaShieldAlt size={50} />
          <p> توفير الأمان والموثوقية المطلقة </p>
        </div>

        <div className="icon-container">
          <FaUserCheck size={50} />
          <p> تجربة مستخدم سلسة وميسره</p>
        </div>

        <div className="icon-container">
          <FaHeadset size={50} />
          <p> دعم فني متميز ومتفانٍ</p>
        </div>

        <div className="icon-container">
          <FaIdCard size={50} />
          <p>استكشف تفاصيل الشريك المثالي عبر ملفات تعريفية شاملة </p>
        </div>
      </div>
    </div>
  );
};

export default HomeIcons;
