// src/ProfileCard.js
import React, { useContext, useState } from "react";
import "./FilterCard.css";
import manAvatar from "../../imgs/man avatar.png";
import womenAvatar from "../../imgs/women avatar.png";
import { MyContext } from "../../contextApi/MyProvider";

const FilterCard = ({type,age,status,accommodation,name}) => {
  const [cardType, setCardType] = useState({type});
//   const [data, setData] = useState();
  const {
    selectedLanguage,
    token,
    setToken,
    filterResponse,
    setFilterResponse,
  } = useContext(MyContext);
  

  return (
    <div className="card-item">
      <div className="card-header">
        {/* <span className="flag">🇪🇬</span> */}
        <span className="username"> {name}</span>
      </div>
      <div className="card-body">
        <img
          className="avatar"
          src={type === "husband" ? manAvatar : womenAvatar}
          alt="Avatar"
        />
        <span className="status-indicator"></span>
        <span className="age-location">{age} سنة </span>
      </div>
      <div className="card-info">
        <div className="info-item">
          <span className="icon">💔</span>
          <span className="info-text">{status}</span>
        </div>
        <div className="info-item">
          <span className="icon">📍</span>
          <span className="info-text">{accommodation} </span>
        </div>
      </div>
      <div className="card-footer">
        <button className="message-button">💬</button>
        {/* <button className="like-button">❤</button> */}
      </div>
    </div>
  );
};

export default FilterCard;
