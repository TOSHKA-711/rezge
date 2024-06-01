import React from "react";
import aboutImg from "../imgs/aboutImg.png";
import "./style/About.css"
const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about-img">
          <img src={aboutImg}></img>
        </div>
        <div className="about-text">
          <h1>نبذة عنا</h1>
          <p>
            رزقي للزواج الإسلامي: نحن في "رزقي للزواج الإسلامي" نعمل كأداة
            لمساعدة الجنسين على الزواج الشرعي بطريقة إسلامية، من خلال توفير جميع
            الأدوات اللازمة لتسجيل الطلبات والبحث، وتسهيل عملية إيجاد الطرف
            الآخر بالمواصفات المطلوبة. نحن ملتزمون بالزواج الشرعي فقط، ولا نقدم
            خدمات للتعارف أو الصداقة أو أي نوع آخر من الزيجات. تتميز سياساتنا
            بالجدية والالتزام بالشروط الشرعية والأخلاقية. مهمتنا هي تسهيل طريقك
            نحو الزواج الشرعي الميسر، وتحقيق رغبتك في بناء أسرة سعيدة تستند إلى
            قيم ديننا الإسلامي.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
