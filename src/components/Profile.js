import React from "react";
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
import profileImg from "../imgs/man avatar.png"

export default function EditButton() {
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
                  <Link to="/register">
                    <button className="about-btn">Edit profile</button>
                  </Link>
                </div>
                <div style={{ marginLeft: "1rem", marginTop: "8rem" }}>
                  <MDBTypography tag="h5" className="header-name">Andy Horwitz</MDBTypography>
                  <MDBCardText>USA - New York</MDBCardText>
                </div>
              </div>
              <div className="card-body-custom">
                <div className="stats-custom">
                  <div className="stats-item">
                    <MDBCardText className="mb-1 h5">75 / 180</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      kg / cm
                    </MDBCardText>
                  </div>
                  <div className="stats-item">
                    <MDBCardText className="mb-1 h5">21</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Age
                    </MDBCardText>
                  </div>
                  <div className="stats-item">
                    <MDBCardText className="mb-1 h5">Single</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Status
                    </MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="card-content-custom">
                <div className="about-custom">
                  <p className="lead fw-normal mb-1">familial status</p>
                  <div className="div-flex">
                    <div className="stats-item body-item">
                      <MDBCardText className="mb-1 h5">1 child</MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        children number
                      </MDBCardText>
                    </div>
                    <div className="stats-item body-item">
                      <MDBCardText className="mb-1 h5">First wife</MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Marriage type
                      </MDBCardText>
                    </div>
                    <div className="stats-item body-item">
                      <MDBCardText className="mb-1 h5">
                        Prays Most of The Time
                      </MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Prayer
                      </MDBCardText>
                    </div>
                  </div>
                </div>
                <div className="about-custom">
                  <p className="lead fw-normal mb-1">Looks and health</p>
                  <div className="div-flex">
                    <div className="stats-item body-item">
                      <MDBCardText className="mb-1 h5">black</MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Skin color
                      </MDBCardText>
                    </div>
                    <div className="stats-item body-item">
                      <MDBCardText className="mb-1 h5">75 / 180</MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        KG / CM
                      </MDBCardText>
                    </div>
                    <div className="stats-item body-item">
                      <MDBCardText className="mb-1 h5">sporty</MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Body shape
                      </MDBCardText>
                    </div>
                  </div>
                  <div className="div-flex">
                    <div className="stats-item body-item">
                      <MDBCardText className="mb-1 h5">yes</MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Beard
                      </MDBCardText>
                    </div>
                    <div className="stats-item body-item">
                      <MDBCardText className="mb-1 h5">Healthy</MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Health status
                      </MDBCardText>
                    </div>
                    <div className="stats-item body-item">
                      <MDBCardText className="mb-1 h5">No</MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Smoking
                      </MDBCardText>
                    </div>
                  </div>
                </div>
                <div className="about-custom">
                  <p className="lead fw-normal mb-1">Education and work</p>
                  <div className="div-flex">
                    <div className="stats-item body-item">
                      <MDBCardText className="mb-1 h5">Graduated</MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Educational
                      </MDBCardText>
                    </div>
                    <div className="stats-item body-item">
                      <MDBCardText className="mb-1 h5">
                        Computer / Informatics
                      </MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Field of work
                      </MDBCardText>
                    </div>
                    <div className="stats-item body-item">
                      <MDBCardText className="mb-1 h5">programmer</MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Job
                      </MDBCardText>
                    </div>
                  </div>
                  <div className="div-flex">
                    <div className="stats-item body-item">
                      <MDBCardText className="mb-1 h5">20000</MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Monthly income (egp)
                      </MDBCardText>
                    </div>
                    <div className="stats-item body-item">
                      <MDBCardText className="mb-1 h5">
                        Upper Middle Class
                      </MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Financial status
                      </MDBCardText>
                    </div>
                  </div>
                </div>
                <div className="about-custom">
                  <p className="lead fw-normal mb-1">About me</p>
                  <div className="div-flex">
                    <div className="stats-item body-item">
                      <MDBCardText className="small text-muted mb-0">
                        ...........
                      </MDBCardText>
                    </div>
                  </div>
                </div>
                <div className="about-custom">
                  <p className="lead fw-normal mb-1">About my partner</p>
                  <div className="div-flex">
                    <div className="stats-item body-item">
                      <MDBCardText className="small text-muted mb-0">
                        ................
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
