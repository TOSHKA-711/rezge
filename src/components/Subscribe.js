import React from "react";
import { Link } from "react-router-dom";
import "./style/Subscribe.css";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="overlay">
        <div className="overlay__inner">
          <h1 className="overlay__title">اشترك الان</h1>
          <p className="overlay__description">
            سجل الآن ! "رزقي للزواج الاسلامي"، الموقع العربي الإسلامي للزواج
            يفتح أبوابه للجميع للتسجيل. يُعنى الموقع حصرًا بالزواج، متبنيًا
            سياسة صارمة تتماشى مع تعاليم الدين الإسلامي. هنا لن نجد مجالًا
            للتعارف أو الصداقة بل نقوم بتمكينكم للوصول إلى شريك الحياة المناسب،
            وفقًا للقيم والمعايير الإسلامية.
          </p>
          <div className="overlay__btns">
            <Link to="/register">
              <button className="overlay_btn overlay_btn--colors">
                <span>اشترك الان</span>
                <span className="overlay__btn-emoji">✔</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
