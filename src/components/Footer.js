import React from "react";
import { useTranslation } from "react-i18next";
import "./style/Footer.css";

const Footer = () => {

  const { t , i18n} = useTranslation();


  return (
    <footer id="footer">
      <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h4> {t('home.footer.footer1.title')}</h4>
              <p>{t('home.footer.footer1.p')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-top">
        <div className="container">
          <div className="row2">
            <div className="footer-contact child">
              <h4> {t('home.footer.footer2.col4.7')}</h4>
              <ul>
                <li>
                  <a href="#"> {t('home.footer.footer2.col4.1')}  </a>
                </li>
                <li>
                  <a href="#">{t('home.footer.footer2.col4.2')} </a>
                </li>
                <li>
                  <a href="#"> {t('home.footer.footer2.col4.3')} </a>
                </li>
                <li>
                  <a href="#">{t('home.footer.footer2.col4.4')} </a>
                </li>
                <li>
                  <a href="#">{t('home.footer.footer2.col4.5')} </a>
                </li>
                <li>
                  <a href="#">{t('home.footer.footer2.col4.6')} </a>
                </li>
              </ul>
            </div>

            <div className="footer-links child">
              <h4>{t('home.footer.footer2.col3.1')} </h4>
              <ul>
                <li>
                  <a href="#"> {t('home.footer.footer2.col3.2')} </a>
                </li>
                <li>
                  <a href="#"> {t('home.footer.footer2.col3.3')} </a>
                </li>
                <li>
                  <a href="#"> {t('home.footer.footer2.col3.4')}</a>
                </li>
                <li>
                  <a href="#"> {t('home.footer.footer2.col3.5')} </a>
                </li>
              </ul>
            </div>

            <div className="footer-links child">
              <h4> {t('home.footer.footer2.col2.1')}</h4>
              <ul>
                <li>
                  <a href="#"> {t('home.footer.footer2.col2.2')}</a>
                </li>
                <li>
                  <a href="#">{t('home.footer.footer2.col2.3')} </a>
                </li>
                <li>
                  <a href="#">  {t('home.footer.footer2.col2.4')} </a>
                </li>
                <li>
                  <a href="#"> {t('home.footer.footer2.col2.5')}</a>
                </li>
                <li>
                  <a href="#"> {t('home.footer.footer2.col2.6')}</a>
                </li>
              </ul>
            </div>

            <div className="footer-links child">
              <h2> {t('home.footer.footer2.col1')}</h2>
              <div className="social-links mt-3"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-bottom ">
        <div className="copyright">
          <p>
          {t('home.footer.footer3')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
