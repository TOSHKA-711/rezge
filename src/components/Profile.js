import React from "react";
import "./style/Profile.css";
import { HiMiniIdentification } from "react-icons/hi2";

const Profile = () => {
  return (
    <div className="profile">
      <div className="container">
        <div className="header">
          <div className="photo">
            <img src="https://www.mawada.net/images/b09e5dd816220def38df.png"></img>
          </div>
          <div className="content">
            <h1>T0SHKA</h1>
            <div className="details">
                <p>21 years - single - EGYPT</p>
                <div>
                <HiMiniIdentification />
                12345678
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
