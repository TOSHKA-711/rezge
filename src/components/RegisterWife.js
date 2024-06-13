import React, { useContext, useEffect, useState } from "react";
import "./style/RegisterHus.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { MyContext } from "../contextApi/MyProvider";
const RegisterHus = () => {
  const { t, i18n } = useTranslation();
  const [countries, setCountries] = useState([]);
  const { selectedLanguage, setSelectedLanguage } = useContext(MyContext);

  const [payload, setPayload] = useState({
    name: "",
    nickname: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
    type_marriage: "",
    family_status:"",
    age: 25,
    number_children: 1,
    accommodation: "",
    country_id: 57,
    "city_id": 1,
    weight: 100,
    length: 180,
    skin_color: "",
    body_structure: "",
    smoking: "no",
    religiosity: "",
    prayer: "",
    beard: "",
    education: "",
    physical_situation: "",
    work: "",
    career: "",
    income: "",
    health_status: "",
    description: "",
    about_you: "",
  });

  //   handle countries api
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  // ----------------------- handle POST API -------------------

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPayload({
      ...payload,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    console.log(payload);
    const url = "http://back.rezge.com/api/wife/register";

    axios
      .post(url, payload)
      .then((response) => {
        console.log("Response:", response.data);
      
      })
      .catch(error => {
        if (error.response) {
            console.error('Error response data:', error.response.data);
         
        } else {
            console.error('Error message:', error.message);
        }
    });
  };
  return (
    <div className="register-hus">
      <div className="container">
        <div className="title"> {t("register-hus.titles.wife")}</div>
        <div className="form">
          {/* ---------------------------first form----------------------------  */}

          <div className="login-data form-child">
            <p className="form-title">
              {" "}
              {t("register-hus.loginData.labels.title")}
            </p>
            <TextField
              id="filled-basic"
              label={t("register-hus.loginData.labels.username")}
              variant="filled"
              className="input"
              name="name"
              value={payload.name}
              onChange={(e) => handleInputChange(e)}
            />
            <TextField
              id="filled-basic"
              label="الاسم المستعار"
              variant="filled"
              className="input"
              name="nickname"
              value={payload.nickname}
              onChange={(e) => handleInputChange(e)}
            />
            <TextField
              id="filled-basic"
              label={t("register-hus.loginData.labels.email")}
              variant="filled"
              className="input"
              name="email"
              value={payload.email}
              onChange={(e) => handleInputChange(e)}
            />
            <TextField
              id="filled-basic"
              label="رقم الهاتف"
              variant="filled"
              className="input"
              name="phone"
              value={payload.phone}
              onChange={(e) => handleInputChange(e)}
            />
            <TextField
              id="filled-basic"
              label={t("register-hus.loginData.labels.password")}
              variant="filled"
              className="input"
              type="password"
              name="password"
              value={payload.password}
              onChange={(e) => handleInputChange(e)}
            />
            <TextField
              id="filled-basic"
              label={t("register-hus.loginData.labels.confirmPassword")}
              variant="filled"
              className="input"
              type="password"
              name="password_confirmation"
              value={payload.password_confirmation}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          {/* ---------------------------second form----------------------------  */}
          <div className="status-data form-child">
            <p className="form-title">
              {" "}
              {t("register-hus.statusData.labels.familyStatus")}
            </p>
            <FormControl variant="filled" className="input">
              <InputLabel
                id="demo-simple-select-filled-label"
                className="select-label"
              >
                {t("register-hus.statusData.labels.marriageType")}
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={payload.type_marriage}
                name="type_marriage"
                onChange={(e) => handleInputChange(e)}
              >
                <MenuItem
                  value=     {t("register-hus.statusData.options.marriageType.first wife")}
                >
                  {" "}
                  {t("register-hus.statusData.options.marriageType.first wife")}
                </MenuItem>
                <MenuItem
                  value=  {t(
                    "register-hus.statusData.options.marriageType.second wife"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.statusData.options.marriageType.second wife"
                  )}
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="filled" className="input">
              <InputLabel
                id="demo-simple-select-filled-label"
                className="select-label"
              >
                {t("register-hus.statusData.labels.familyStatus")}
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={payload.family_status}
                name="family_status"
                onChange={(e) => handleInputChange(e)}
              >
                <MenuItem
                  value= {t("register-hus.statusData.options.familyStatus.single")}
                >
                  {t("register-hus.statusData.options.familyStatus.single")}
                </MenuItem>
                <MenuItem
                  value={t("register-hus.statusData.options.familyStatus.divorced")}
                >
                  {t("register-hus.statusData.options.familyStatus.divorced")}
                </MenuItem>
                <MenuItem
                  value={t("register-hus.statusData.options.familyStatus.widowed")}
                >
                  {t("register-hus.statusData.options.familyStatus.widowed")}
                </MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="filled-basic"
              label={t("register-hus.statusData.labels.age")}
              variant="filled"
              className="input"
              value={payload.age}
              name="age"
              onChange={(e) => handleInputChange(e)}
            />
            <FormControl variant="filled" className="input">
              <InputLabel
                id="demo-simple-select-filled-label "
                className="select-label"
              >
                {t("register-hus.statusData.labels.childrenCount")}
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={payload.number_children}
                name="number_children"
                onChange={(e) => handleInputChange(e)}
              >
                <MenuItem value={0}>0</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
              </Select>
            </FormControl>
          </div>
          {/* ---------------------------third form----------------------------  */}

          <div className="nationality-data form-child">
            <p className="form-title">
              {" "}
              {t("register-hus.nationalityData.title")}{" "}
            </p>
            <FormControl className="input">
              <InputLabel id="demo-simple-select-label">
                {t("register-hus.nationalityData.labels.residence")}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={payload.accommodation}
                name="accommodation"
                label={t("register-hus.nationalityData.labels.residence")}
                onChange={(e) => handleInputChange(e)}
              >
                {countries.map((item) =>
                  selectedLanguage === "AR" ? (
                    <MenuItem
                      value={item.translations.ara.common}
                      key={item.translations.ara.common}
                    >
                      {item.translations.ara.common}
                    </MenuItem>
                  ) : selectedLanguage === "EN" ? (
                    <MenuItem value={item.name.common} key={item.name.common}>
                      {item.name.common}
                    </MenuItem>
                  ) : (
                    <MenuItem
                      value={item.translations.fra.common}
                      key={item.translations.fra.common}
                    >
                      {item.translations.fra.common}
                    </MenuItem>
                  )
                )}
              </Select>
            </FormControl>
            <TextField
              id="filled-basic"
              label="city_id"
              variant="filled"
              className="input"
              required
              value={payload.city_id}
              name="city_id"
              onChange={(e) => handleInputChange(e)}
            />
            <TextField
              id="filled-basic"
              label={t("register-hus.nationalityData.labels.countryCode")}
              variant="filled"
              className="input"
              value={payload.country_id}
              name="country_id"
              onChange={(e) => handleInputChange(e)}
            />
            <TextField
              id="filled-basic"
              label={t("register-hus.nationalityData.labels.muslim")}
              variant="filled"
              className="input"
              disabled
            />
          </div>
          {/* ---------------------------fourth form----------------------------  */}

          <div className="login-data form-child">
            <p className="form-title">
              {" "}
              {t("register-hus.specifications.title")}
            </p>
            <TextField
              id="filled-basic"
              label={t("register-hus.specifications.labels.weight")}
              variant="filled"
              className="input"
              value={payload.weight}
              name="weight"
              onChange={(e) => handleInputChange(e)}
            />
            <TextField
              id="filled-basic"
              label={t("register-hus.specifications.labels.height")}
              variant="filled"
              className="input"
              value={payload.length}
              name="length"
              onChange={(e) => handleInputChange(e)}
            />
            <FormControl variant="filled" className="input">
              <InputLabel
                id="demo-simple-select-filled-label "
                className="select-label"
              >
                {t("register-hus.specifications.labels.skinColor")}
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={payload.skin_color}
                name="skin_color"
                onChange={(e) => handleInputChange(e)}
              >
                <MenuItem value="White">
                  {t("register-hus.specifications.options.skinColor.white")}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.specifications.options.skinColor.light brown"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.specifications.options.skinColor.light brown"
                  )}{" "}
                </MenuItem>
                <MenuItem
                  value={t("register-hus.specifications.options.skinColor.tan")}
                >
                  {" "}
                  {t("register-hus.specifications.options.skinColor.tan")}{" "}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.specifications.options.skinColor.light olive"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.specifications.options.skinColor.light olive"
                  )}{" "}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.specifications.options.skinColor.dark olive"
                  )}
                >
                  {t(
                    "register-hus.specifications.options.skinColor.dark olive"
                  )}{" "}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.specifications.options.skinColor.black"
                  )}
                >
                  {t("register-hus.specifications.options.skinColor.black")}
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="filled" className="input">
              <InputLabel
                id="demo-simple-select-filled-label "
                className="select-label"
              >
                {t("register-hus.specifications.labels.bodyStructure")}
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={payload.body_structure}
                name="body_structure"
                onChange={(e) => handleInputChange(e)}
              >
                <MenuItem
                  value={t(
                    "register-hus.specifications.options.bodyStructure.thin"
                  )}
                >
                  {" "}
                  {t("register-hus.specifications.options.bodyStructure.thin")}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.specifications.options.bodyStructure.average"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.specifications.options.bodyStructure.average"
                  )}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.specifications.options.bodyStructure.athletic"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.specifications.options.bodyStructure.athletic"
                  )}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.specifications.options.bodyStructure.overweight"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.specifications.options.bodyStructure.overweight"
                  )}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.specifications.options.bodyStructure.obese"
                  )}
                >
                  {" "}
                  {t("register-hus.specifications.options.bodyStructure.obese")}
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          {/* ---------------------------fifth form----------------------------  */}

          <div className="login-data form-child">
            <p className="form-title">
              {" "}
              {t("register-hus.religiousCommitment.labels.religiosity")}
            </p>
            <FormControl variant="filled" className="input">
              <InputLabel
                id="demo-simple-select-filled-label "
                className="select-label"
              >
                {t("register-hus.religiousCommitment.labels.religiosity")}
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={payload.religiosity}
                name="religiosity"
                onChange={(e) => handleInputChange(e)}
              >
                <MenuItem
                  value={t(
                    "register-hus.religiousCommitment.options.religiosity.not religious"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.religiousCommitment.options.religiosity.not religious"
                  )}{" "}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.religiousCommitment.options.religiosity.somewhat religious"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.religiousCommitment.options.religiosity.somewhat religious"
                  )}{" "}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.religiousCommitment.options.religiosity.religious"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.religiousCommitment.options.religiosity.religious"
                  )}{" "}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.religiousCommitment.options.religiosity.very religious"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.religiousCommitment.options.religiosity.very religious"
                  )}{" "}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.religiousCommitment.options.religiosity.no answer"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.religiousCommitment.options.religiosity.no answer"
                  )}{" "}
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="filled" className="input">
              <InputLabel
                id="demo-simple-select-filled-label "
                className="select-label"
              >
                {t("register-hus.religiousCommitment.labels.prayer")}
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={payload.prayer}
                name="prayer"
                onChange={(e) => handleInputChange(e)}
              >
                <MenuItem
                  value={t(
                    "register-hus.religiousCommitment.options.prayer.always pray"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.religiousCommitment.options.prayer.always pray"
                  )}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.religiousCommitment.options.prayer.pray most of the time"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.religiousCommitment.options.prayer.pray most of the time"
                  )}{" "}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.religiousCommitment.options.prayer.pray sometimes"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.religiousCommitment.options.prayer.pray sometimes"
                  )}{" "}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.religiousCommitment.options.prayer.never pray"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.religiousCommitment.options.prayer.never pray"
                  )}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.religiousCommitment.options.prayer.no answer"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.religiousCommitment.options.prayer.no answer"
                  )}{" "}
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="filled" className="input">
              <InputLabel
                id="demo-simple-select-filled-label "
                className="select-label"
              >
                {t("register-hus.religiousCommitment.labels.smoking")}
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={payload.smoking}
                name="smoking"
                onChange={(e) => handleInputChange(e)}
              >
                <MenuItem
                  value={t(
                    "register-hus.religiousCommitment.options.smoking.yes"
                  )}
                >
                  {" "}
                  {t("register-hus.religiousCommitment.options.smoking.yes")}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.religiousCommitment.options.smoking.no"
                  )}
                >
                  {" "}
                  {t("register-hus.religiousCommitment.options.smoking.no")}
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="filled" className="input">
              <InputLabel
                id="demo-simple-select-filled-label "
                className="select-label"
              >
                {t("register-hus.religiousCommitment.labels.beard")}
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={payload.beard}
                name="beard"
                onChange={(e) => handleInputChange(e)}
              >
                <MenuItem
                  value={t(
                    "register-hus.religiousCommitment.options.beard.yes"
                  )}
                >
                  {t("register-hus.religiousCommitment.options.beard.yes")}
                </MenuItem>
                <MenuItem
                  value={t("register-hus.religiousCommitment.options.beard.no")}
                >
                  {t("register-hus.religiousCommitment.options.beard.no")}
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          {/* ---------------------------6th form----------------------------  */}

          <div className="login-data form-child">
            <p className="form-title">
              {" "}
              {t("register-hus.health&education.titles.education")}
            </p>
            <FormControl variant="filled" className="input">
              <InputLabel
                id="demo-simple-select-filled-label "
                className="select-label"
              >
                {t("register-hus.health&education.titles.education")}
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={payload.education}
                name="education"
                onChange={(e) => handleInputChange(e)}
              >
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.education.Intermediate Studies"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.health&education.options.education.Intermediate Studies"
                  )}{" "}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.education.High School Studies"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.health&education.options.education.High School Studies"
                  )}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.education.University Studies"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.health&education.options.education.University Studies"
                  )}{" "}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.education.Doctorate"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.health&education.options.education.Doctorate"
                  )}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.education.Self-Study"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.health&education.options.education.Self-Study"
                  )}
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="filled" className="input">
              <InputLabel
                id="demo-simple-select-filled-label "
                className="select-label"
              >
                {t("register-hus.health&education.titles.financial_status")}
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={payload.physical_situation}
                name="physical_situation"
                onChange={(e) => handleInputChange(e)}
              >
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.financial_status.Poor"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.health&education.options.financial_status.Poor"
                  )}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.financial_status.Near Average"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.health&education.options.financial_status.Near Average"
                  )}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.financial_status.Average"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.health&education.options.financial_status.Average"
                  )}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.financial_status.Above Average"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.health&education.options.financial_status.Above Average"
                  )}{" "}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.financial_status.Good"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.health&education.options.financial_status.Good"
                  )}{" "}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.financial_status.Well-Off"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.health&education.options.financial_status.Well-Off"
                  )}{" "}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.financial_status.Wealthy"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.health&education.options.financial_status.Wealthy"
                  )}{" "}
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="filled" className="input">
              <InputLabel
                id="demo-simple-select-filled-label "
                className="select-label"
              >
                {t("register-hus.health&education.titles.work_field")}
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={payload.work}
                name="work"
                onChange={(e) => handleInputChange(e)}
              >
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.work_field.Currently Unemployed"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.health&education.options.work_field.Currently Unemployed"
                  )}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.work_field.Still Studying"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.health&education.options.work_field.Still Studying"
                  )}{" "}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.work_field.Secretarial"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.health&education.options.work_field.Secretarial"
                  )}{" "}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.work_field.Arts / Literature"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.health&education.options.work_field.Arts / Literature"
                  )}{" "}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.work_field.Administration"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.health&education.options.work_field.Administration"
                  )}{" "}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.work_field.Commerce"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.health&education.options.work_field.Commerce"
                  )}{" "}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.work_field.Food Industry"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.health&education.options.work_field.Food Industry"
                  )}{" "}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.work_field.Construction"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.health&education.options.work_field.Construction"
                  )}{" "}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.work_field.Law"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.health&education.options.work_field.Law"
                  )}{" "}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.work_field.Medicine"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.health&education.options.work_field.Medicine"
                  )}{" "}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.work_field.Politics / Government"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.health&education.options.work_field.Politics / Government"
                  )}{" "}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.work_field.Retired"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.health&education.options.work_field.Retired"
                  )}{" "}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.work_field.Marketing and Sales"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.health&education.options.work_field.Marketing and Sales"
                  )}{" "}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.work_field.Self-Employed"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.health&education.options.work_field.Self-Employed"
                  )}{" "}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.work_field.Education"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.health&education.options.work_field.Education"
                  )}{" "}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.work_field.Engineering / Science"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.health&education.options.work_field.Engineering / Science"
                  )}{" "}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.work_field.Transportation"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.health&education.options.work_field.Transportation"
                  )}{" "}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.work_field.Computer / IT"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.health&education.options.work_field.Computer / IT"
                  )}{" "}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.work_field.Other"
                  )}
                >
                  {" "}
                  {t("register-hus.health&education.options.work_field.Other")}
                </MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="filled-basic"
              label={t("register-hus.health&education.titles.job_title")}
              variant="filled"
              className="input"
              value={payload.career}
              name="career"
              onChange={(e) => handleInputChange(e)}
            />
            <FormControl variant="filled" className="input">
              <InputLabel
                id="demo-simple-select-filled-label "
                className="select-label"
              >
                {t("register-hus.health&education.titles.monthly_income")}
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={payload.income}
                name="income"
                onChange={(e) => handleInputChange(e)}
              >
                {/* <MenuItem value=" without"> بدون</MenuItem> */}
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.monthly_income.less than 500"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.health&education.options.monthly_income.less than 500"
                  )}{" "}
                </MenuItem>
                <MenuItem value=" 500-1000"> 500-1000 </MenuItem>
                <MenuItem value=" 1000-3000"> 1000-3000</MenuItem>
                <MenuItem value=" 3000-6000"> 3000-6000</MenuItem>
                <MenuItem value="6000-9000 "> 6000-9000</MenuItem>
                <MenuItem value="9000-12000 ">9000-12000 </MenuItem>
                <MenuItem value=" 12000-16000"> 12000-16000</MenuItem>
                <MenuItem value=" 16000-20000"> 16000-20000</MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.monthly_income.more than 20000"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.health&education.options.monthly_income.more than 20000"
                  )}{" "}
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="filled" className="input">
              <InputLabel
                id="demo-simple-select-filled-label "
                className="select-label"
              >
                {t("register-hus.health&education.titles.health_status")}
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={payload.health_status}
                name="health_status"
                onChange={(e) => handleInputChange(e)}
              >
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.health_status.Good Health"
                  )}
                >
                  {" "}
                  {t(
                    "register-hus.health&education.options.health_status.Good Health"
                  )}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.health_status.Intellectual Disability"
                  )}
                >
                  {t(
                    "register-hus.health&education.options.health_status.Intellectual Disability"
                  )}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.health_status.Physical Disability"
                  )}
                >
                  {t(
                    "register-hus.health&education.options.health_status.Physical Disability"
                  )}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.health_status.Depression"
                  )}
                >
                  {t(
                    "register-hus.health&education.options.health_status.Depression"
                  )}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.health_status.Kyphosis and Lordosis"
                  )}
                >
                  {t(
                    "register-hus.health&education.options.health_status.Kyphosis and Lordosis"
                  )}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.health_status.Schizophrenia"
                  )}
                >
                  {t(
                    "register-hus.health&education.options.health_status.Schizophrenia"
                  )}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.health_status.Internal"
                  )}
                >
                  {t(
                    "register-hus.health&education.options.health_status.Internal"
                  )}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.health_status.Vitiligo"
                  )}
                >
                  {t(
                    "register-hus.health&education.options.health_status.Vitiligo"
                  )}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.health_status.Visual Impairment"
                  )}
                >
                  {t(
                    "register-hus.health&education.options.health_status.Visual Impairment"
                  )}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.health_status.Albinism"
                  )}
                >
                  {t(
                    "register-hus.health&education.options.health_status.Albinism"
                  )}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.health_status.Skin Conditions"
                  )}
                >
                  {t(
                    "register-hus.health&education.options.health_status.Skin Conditions"
                  )}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.health_status.Disfiguring Burns"
                  )}
                >
                  {t(
                    "register-hus.health&education.options.health_status.Disfiguring Burns"
                  )}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.health_status.Diabetes"
                  )}
                >
                  {t(
                    "register-hus.health&education.options.health_status.Diabetes"
                  )}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.health_status.Hearing Impairment"
                  )}
                >
                  {t(
                    "register-hus.health&education.options.health_status.Hearing Impairment"
                  )}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.health_status.Speech Impairment"
                  )}
                >
                  {t(
                    "register-hus.health&education.options.health_status.Speech Impairment"
                  )}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.health_status.Obesity"
                  )}
                >
                  {t(
                    "register-hus.health&education.options.health_status.Obesity"
                  )}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.health_status.Polio"
                  )}
                >
                  {t(
                    "register-hus.health&education.options.health_status.Polio"
                  )}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.health_status.Quadriplegia"
                  )}
                >
                  {t(
                    "register-hus.health&education.options.health_status.Quadriplegia"
                  )}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.health_status.Hemiplegia"
                  )}
                >
                  {t(
                    "register-hus.health&education.options.health_status.Hemiplegia"
                  )}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.health_status.Psoriasis"
                  )}
                >
                  {t(
                    "register-hus.health&education.options.health_status.Psoriasis"
                  )}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.health_status.Epilepsy"
                  )}
                >
                  {t(
                    "register-hus.health&education.options.health_status.Epilepsy"
                  )}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.health_status.Sexual Dysfunction"
                  )}
                >
                  {t(
                    "register-hus.health&education.options.health_status.Sexual Dysfunction"
                  )}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.health_status.Infertility"
                  )}
                >
                  {t(
                    "register-hus.health&education.options.health_status.Infertility"
                  )}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.health_status.Limb Loss"
                  )}
                >
                  {t(
                    "register-hus.health&education.options.health_status.Limb Loss"
                  )}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.health_status.Dwarfism"
                  )}
                >
                  {t(
                    "register-hus.health&education.options.health_status.Dwarfism"
                  )}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.health_status.Down Syndrome"
                  )}
                >
                  {t(
                    "register-hus.health&education.options.health_status.Down Syndrome"
                  )}
                </MenuItem>
                <MenuItem
                  value={t(
                    "register-hus.health&education.options.health_status.Psychological"
                  )}
                >
                  {t(
                    "register-hus.health&education.options.health_status.Psychological"
                  )}
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          {/* ---------------------------7th form----------------------------  */}

          <div className="login-data form-child">
            <p className="form-title">
              {" "}
              {t("register-hus.aboutYou.titles.partner_description")}{" "}
            </p>
            <TextField
              fullWidth
              label={t("register-hus.aboutYou.labels")}
              id="fullWidth"
              className="input input2"
              value={payload.description}
              name="description"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          {/* ---------------------------8th form----------------------------  */}

          <div className="login-data form-child">
            <p className="form-title">
              {" "}
              {t("register-hus.aboutYou.titles.about_you")}
            </p>
            <TextField
              fullWidth
              label={t("register-hus.aboutYou.labels")}
              id="fullWidth"
              className="input input2"
              value={payload.about_you}
              name="about_you"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          {/* ----------------------end forms---------- */}
          <button className="about-btn" onClick={() => handleSubmit()}>
            {t("register-hus.submit-btn")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterHus;
