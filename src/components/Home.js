import React from "react";
import "./style/Home.css";
import homeImg from "../imgs/test1.jpg";
// import homeImg from "../imgs/home-3.jpg";

import Button from "@mui/material/Button";
import About from "./About";
import SearchForm from "./SearchForm";
import Footer from "./Footer";
import Subscribe from "./Subscribe";
import HomeIcons from "./HomeIcons";

const Home = () => {
  const handleOpenSubscribe =()=>{
    window.open("./Register" , "_self");
  }
  return (
    <>
      <div className="home">
        <div className="container">
          <div className="home-img">
            <img src={homeImg}></img>
            <div className="layer"></div>
          </div>
          {/* <div className="home-sec-img">
            <img src={homeSecImg}></img>
        </div> */}
          <div className="home-text">
            <h1>رزقي للزواج الإسلامي</h1>
            <h3> الخطوة الاولى نحو حياة مستقرة</h3>
            <Button variant="contained" className="home-btn" onClick={handleOpenSubscribe}>
              أشتراك
            </Button>
          </div>
        </div>
      </div>
      <About />
      <SearchForm />
      <HomeIcons/>
      <Subscribe />
    </>
  );
};

export default Home;
