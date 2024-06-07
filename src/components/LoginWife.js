import React, { useState } from "react";
import Footer from "./Footer";
import Home from "./Home";
import Nav from "./nav";
import "./style/Login.css";
import axios from "axios";
import { useTranslation } from "react-i18next";


const LoginWife = () => {
  const { t, i18n } = useTranslation();
  const [payload, setPayload] = useState({
    email: "",
    password: ""
  });
  const handleInputChange =(e)=>{
    const {name , value} = e.target;

    setPayload({
      ...payload,
      [name]: value,
    })
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(payload);
    const url = "https://rezge.art-lms.net/api/wife/login";

    axios
      .post(url, payload)
      .then((response) => {
        console.log("Response:", response.data);
        alert(response.data.message)
      })
      .catch(error => {
   alert (error.response.data.message)
        if (error.response) {
          console.error('Error response data:', error.response.data);
         
       
      } else {
          console.error('Error message:', error.message);
      }
    });
  }
  
  return (
    <>
      <div className="login">
        <form className="form card">
          <div className="card_header">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"
              ></path>
            </svg>
            <h1 className="form_heading"> {t('login.title')}</h1>
          </div>
          <div className="field">
            <label htmlFor="username"> {t('login.lablel1')}</label>
            <input
              className="input"
              name="email"
              value={payload.email}
              type="text"
              placeholder={t('login.placeholder')}
              id="username"
              onChange={(e)=>handleInputChange(e)}
            />
          </div>
          <div className="field">
            <label htmlFor="password"> {t('login.password')}</label>
            <input
              className="input"
              name="password"
              value={payload.password}
              type="password"
              placeholder={t('login.password')}
              id="password"
              onChange={(e)=>handleInputChange(e)}
            />
          </div>
          <div className="field">
            <button className="button" onClick={(e)=>handleSubmit(e)}>
            {t('login.submit')}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginWife;
