import React from "react";
import "./style/Subscribe.css";

const Subscribe = () => {
  const handleOpenSubscribe =()=>{
    window.open("./Register" , "_self");
  }
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
            <button className="overlay_btn overlay_btn--colors" onClick={handleOpenSubscribe}>
              <span>اشترك الان</span>
              <span className="overlay__btn-emoji">✔</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
