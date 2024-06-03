import React from "react";
import "./style/HomeIcons.css";
import { FaHeadset, FaUserCheck, FaIdCard, FaShieldAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
const HomeIcons = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="home-icons">
  
      <div className="security-section">
        <div className="icon-container">
          <FaShieldAlt size={50} />
          <p> {t('home.icons-sec.4')} </p>
        </div>

        <div className="icon-container">
          <FaUserCheck size={50} />
          <p> {t('home.icons-sec.3')}</p>
        </div>

        <div className="icon-container">
          <FaHeadset size={50} />
          <p> {t('home.icons-sec.2')}</p>
        </div>

        <div className="icon-container">
          <FaIdCard size={50} />
          <p> {t('home.icons-sec.1')}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeIcons;
