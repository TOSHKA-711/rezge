import React, { useContext } from "react";
import "./style/Profile.css";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { FaPray } from "react-icons/fa";
import profileImg from "../imgs/man avatar.png";
import { MyContext } from "../contextApi/MyProvider";
import { useTranslation } from "react-i18next";
import { use } from "i18next";

export default function EditButton() {
  const { userData, setUserData } = useContext(MyContext);
  const { t } = useTranslation();
  // console.log(userData);

  return (
    <div className="gradient-custom-2">
      <MDBContainer className="container-custom">
        <MDBRow className="row-custom">
          <MDBCol className="col-custom">
            <MDBCard className="card-custom">
              <div className="card-header-custom">
                <div className="card-header-content">
                  <MDBCardImage
                    src={profileImg}
                    alt="Generic placeholder image"
                    className="img-thumbnail-custom"
                    fluid
                  />
                  <Link to="/updateProfile">
                    <button className="about-btn">{t("profile.edit_profile")}</button>
                  </Link>
                </div>
                <div style={{ marginLeft: "1rem", marginTop: "8rem" }}>
                  <MDBTypography tag="h5" className="header-name">
                    {userData.nickname}
                  </MDBTypography>
                  <MDBCardText>{userData.accommodation}</MDBCardText>
                </div>
              </div>
              <div className="card-body-custom">
                <div className="stats-custom">
                  <div className="stats-item">
                    <MDBCardText className="mb-1 h5">{userData.id}</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                    {t("profile.ID")}
                    </MDBCardText>
                  </div>
                  <div className="stats-item">
                    <MDBCardText className="mb-1 h5">
                      {userData.age}
                    </MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                    {t("profile.Age")}
                    </MDBCardText>
                  </div>
                  <div className="stats-item">
                    <MDBCardText className="mb-1 h5">
                      {userData.family_status}
                    </MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                    {t("profile.Status")}
                    </MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="card-content-custom">
                <div className="about-custom">
                  <p className="lead fw-normal mb-1">{t("profile.familial_status.familial_status")}</p>
                  <div className="div-flex">
                    <div className="stats-item body-item">
                      <MDBCardText className="mb-1 h5">
                        {userData.number_children}
                      </MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                      {t("profile.familial_status.children_number")}
                      </MDBCardText>
                    </div>
                    <div className="stats-item body-item">
                      <MDBCardText className="mb-1 h5">
                        {userData.type_marriage}
                      </MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                      {t("profile.familial_status.Marriage_type")}
                      </MDBCardText>
                    </div>
                    <div className="stats-item body-item">
                      <MDBCardText className="mb-1 h5">
                        {userData.husband_info.prayer}
                      </MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        {t("profile.familial_status.Prayer")}
                      </MDBCardText>
                    </div>
                  </div>
                </div>
                <div className="about-custom">
                  <p className="lead fw-normal mb-1">{t("profile.looks.title")}</p>
                  <div className="div-flex">
                    <div className="stats-item body-item">
                      <MDBCardText className="mb-1 h5">
                        {userData.husband_info.skin_color}
                      </MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                      {t("profile.looks.Skin color")}
                      </MDBCardText>
                    </div>
                    <div className="stats-item body-item">
                      <MDBCardText className="mb-1 h5">
                        {userData.husband_info.weight} /{" "}
                        {userData.husband_info.length}
                      </MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                      {t("profile.looks.KG / CM")}
                      </MDBCardText>
                    </div>
                    <div className="stats-item body-item">
                      <MDBCardText className="mb-1 h5">
                        {userData.husband_info.body_structure}
                      </MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                      {t("profile.looks.Body_shape")}
                      </MDBCardText>
                    </div>
                  </div>
                  <div className="div-flex">
                    {/* <div className="stats-item body-item">
                      <MDBCardText className="mb-1 h5">
                        {userData.husband_info.beard}
                      </MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Beard
                      </MDBCardText>
                    </div> */}
                    <div className="stats-item body-item">
                      <MDBCardText className="mb-1 h5">
                        {userData.husband_info.health_status}
                      </MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                      {t("profile.looks.Health status")}
                      </MDBCardText>
                    </div>
                    <div className="stats-item body-item">
                      <MDBCardText className="mb-1 h5">
                        {userData.husband_info.smoking}
                      </MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                      {t("profile.looks.Smoking")}
                      </MDBCardText>
                    </div>
                  </div>
                </div>
                <div className="about-custom">
                  <p className="lead fw-normal mb-1">{t("profile.Education_and_work.title")}</p>
                  <div className="div-flex">
                    <div className="stats-item body-item">
                      <MDBCardText className="mb-1 h5">
                        {userData.husband_info.education}
                      </MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                      {t("profile.Education_and_work.Educational")}
                      </MDBCardText>
                    </div>
                    {/* <div className="stats-item body-item">
                      <MDBCardText className="mb-1 h5">
                        Computer / Informatics
                      </MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Field of work
                      </MDBCardText>
                    </div> */}
                    <div className="stats-item body-item">
                      <MDBCardText className="mb-1 h5">
                        {userData.husband_info.career}
                      </MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                      {t("profile.Education_and_work.Job")}
                      </MDBCardText>
                    </div>
                  </div>
                  <div className="div-flex">
                    <div className="stats-item body-item">
                      <MDBCardText className="mb-1 h5">
                        {userData.husband_info.income}
                      </MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                      {t("profile.Education_and_work.Monthly income (egp)")}
                      </MDBCardText>
                    </div>
                    {/* <div className="stats-item body-item">
                      <MDBCardText className="mb-1 h5">
                        Upper Middle Class
                      </MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Financial status
                      </MDBCardText>
                    </div> */}
                  </div>
                </div>
                <div className="about-custom">
                  <p className="lead fw-normal mb-1">{t("profile.about_me.me")}</p>
                  <div className="div-flex">
                    <div className="stats-item body-item">
                      <MDBCardText className="small text-muted mb-0">
                        {userData.husband_info.about_you}
                      </MDBCardText>
                    </div>
                  </div>
                </div>
                <div className="about-custom">
                  <p className="lead fw-normal mb-1">{t("profile.about_me.partner")}</p>
                  <div className="div-flex">
                    <div className="stats-item body-item">
                      <MDBCardText className="small text-muted mb-0">
                        {userData.husband_info.description}
                      </MDBCardText>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
