import React from "react";
import "./style/Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h4> رزقي للزواج الاسلامي </h4>
              <p>رزقي للزواج الإسلامي: نساعدك في العثور على نصفك الآخر</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-top">
        <div className="container">
          <div className="row2">
            <div className="footer-contact child">
              <h4>قوائم الاعضاء</h4>
              <ul>
                <li>
                  <a href="#">كل الراغبين في الزواج</a>
                </li>
                <li>
                  <a href="#">البحث المتقدم</a>
                </li>
                <li>
                  <a href="#">المتواجدون الان </a>
                </li>
                <li>
                  <a href="#">الاعضاء المتميزون</a>
                </li>
                <li>
                  <a href="#">اعضاء جدد</a>
                </li>
                <li>
                  <a href="#">الحالات الصحيه</a>
                </li>
              </ul>
            </div>

            <div className="footer-links child">
              <h4>من نحن</h4>
              <ul>
                <li>
                  <a href="#">نبذه عنا </a>
                </li>
                <li>
                  <a href="#">اتصل بنا </a>
                </li>
                <li>
                  <a href="#">اشترك</a>
                </li>
                <li>
                  <a href="#">تسجيل دخول </a>
                </li>
              </ul>
            </div>

            <div className="footer-links child">
              <h4> الدعم الفني</h4>
              <ul>
                <li>
                  <a href="#">مساعده </a>
                </li>
                <li>
                  <a href="#">الاسئله الشائعه</a>
                </li>
                <li>
                  <a href="#">شروط الموقع و قوانينه</a>
                </li>
                <li>
                  <a href="#">سياسه الخصوصسه</a>
                </li>
                <li>
                  <a href="#">سياسات ملفات</a>
                </li>
              </ul>
            </div>

            <div className="footer-links child">
              <h2>رزقي</h2>
              <h2>للزواج الاسلامي </h2>
              <h3>البداية المباركة لحياة سعيدة</h3>
              <div className="social-links mt-3"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-bottom ">
        <div className="copyright">
          <p>
            ابدأ رحلة الزواج بثقة ويقين، مع رزقي للزواج الإسلامي، حيث تلتقي
            القلوب وتتشابك الأرواح
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
