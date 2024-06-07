import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./style/Subscribe.css";
import { useTranslation } from "react-i18next";
import { MyContext } from "../contextApi/MyProvider";
const Subscribe = () => {
  const { t, i18n } = useTranslation();
  const { selectedLanguage, setSelectedLanguage } = useContext(MyContext);

  return (
    <div className="subscribe">
      {selectedLanguage === "AR" ? (
        <div className="overlay">
          <div className="overlay__inner">
            <h1 className="overlay__title"> {t("home.subscribe.title")}</h1>
            <p className="overlay__description">
              {t("home.subscribe.content")}
            </p>
            <div className="overlay__btns">
              <Link to="/register">
                <button className="overlay_btn overlay_btn--colors">
                  <span> {t("home.subscribe.title")}</span>
                  <span className="overlay__btn-emoji">✔</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="overlay ltr">
          <div className="overlay__inner">
            <h1 className="overlay__title"> {t("home.subscribe.title")}</h1>
            <p className="overlay__description">
              {t("home.subscribe.content")}
            </p>
            <div className="overlay__btns">
              <Link to="/register">
                <button className="overlay_btn overlay_btn--colors">
                  <span> {t("home.subscribe.title")}</span>
                  <span className="overlay__btn-emoji">✔</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subscribe;
