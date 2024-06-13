import React, { useState, useEffect, useContext } from "react";
import "./style/SearchForm.css";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import { MyContext } from "../contextApi/MyProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const minDistance = 10;

const SearchForm = () => {
  const navigation = useNavigate();
  
  const {
    selectedLanguage,
    token,
    setToken,
    filterResponse,
    setFilterResponse,
  } = useContext(MyContext);
  const { t } = useTranslation();
  const [active, setActive] = useState(true);
  const [countries, setCountries] = useState([]);
  const [payload, setPayload] = useState({
    min_age: 20,
    max_age: 30,
    country: 1,
    city: 1,
    status: 1,
  });


  const handleActive = () => {
    setActive(!active);
  };

  const handleSliderChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    const newPayload = { ...payload };

    if (activeThumb === 0) {
      newPayload.min_age = Math.min(newValue[0], payload.max_age - minDistance);
    } else {
      newPayload.max_age = Math.max(newValue[1], payload.min_age + minDistance);
    }

    setPayload(newPayload);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPayload({
      ...payload,
      [name]: value,
    });
  };

  //   handle countries api
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

// handle submit search 

  const handleSubmit = () => {
    const url = `${
      active === true
        ? "https://back.rezge.com/api/filter/husband"
        : "https://back.rezge.com/api/filter/wife"
    }  `;

    axios
      .post(url, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setFilterResponse(response.data.data);
        // console.log("Response:", response.data.data);
        navigation("/filterResult");
      
      })
      .catch((error) => {
        if (error.response) {
          console.error("Error response data:", error.response.data);
        } else {
          console.error("Error message:", error.message);
        }
      });
    console.log(payload, url);
  };

console.log("filter respone" , filterResponse);

  return (
    <div className="search">
      <div className="container">
        <div className="first">
          <button
            className={`second-btn ${!active && "active"}`}
            onClick={handleActive}
          >
            {t("home.searchForm.btn2")}
          </button>
          <button
            className={`first-btn ${active && "active"}`}
            onClick={handleActive}
          >
            {t("home.searchForm.btn1")}
          </button>
        </div>
        <div className="second">
          <TextField
            id="filled-basic"
            label="المدينة"
            variant="filled"
            className="input"
            name="city"
            value={payload.city}
            onChange={handleInputChange}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              {t("home.searchForm.labels.Property")}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="country"
              value={payload.country}
              onChange={handleInputChange}
            >
              {countries.map((item) => (
                <MenuItem
                  value={
                    selectedLanguage === "AR"
                      ? item.translations.ara.common
                      : selectedLanguage === "EN"
                      ? item.name.common
                      : item.translations.fra.common
                  }
                  key={
                    selectedLanguage === "AR"
                      ? item.translations.ara.common
                      : item.name.common
                  }
                >
                  {selectedLanguage === "AR"
                    ? item.translations.ara.common
                    : selectedLanguage === "EN"
                    ? item.name.common
                    : item.translations.fra.common}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              {t("home.searchForm.labels.status")}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="status"
              value={payload.status}
              onChange={handleInputChange}
            >
              <MenuItem value={t("home.searchForm.status-input.1")}>
                {t("home.searchForm.status-input.1")}
              </MenuItem>
              <MenuItem value={t("home.searchForm.status-input.2")}>
                {t("home.searchForm.status-input.2")}
              </MenuItem>
              <MenuItem value={t("home.searchForm.status-input.3")}>
                {t("home.searchForm.status-input.3")}
              </MenuItem>
              <MenuItem value={t("home.searchForm.status-input.4")}>
                {t("home.searchForm.status-input.4")}
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="third">
          <Slider
            getAriaLabel={() => "Minimum distance"}
            value={[payload.min_age, payload.max_age]}
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            disableSwap
            className="range"
          />
          <h1>{t("home.searchForm.labels.age")}</h1>
        </div>
        <div className="submit">
          <Button
            variant="contained"
            className="form-btn"
            onClick={handleSubmit}
          >
            {t("home.searchForm.btn")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
