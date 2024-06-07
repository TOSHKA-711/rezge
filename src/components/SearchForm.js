import React, { useState, useEffect, useContext } from "react";
import "./style/SearchForm.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl"; // Added import for FormControl
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import { MyContext } from "../contextApi/MyProvider";
const minDistance = 10;
const SearchForm = () => {
  const { selectedLanguage, setSelectedLanguage } = useContext(MyContext);
  console.log(selectedLanguage);
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState(true);
  const [countries, setCountries] = useState([]);
  const [nationality, setNationality] = React.useState("");
  const [Property, setProperty] = React.useState("");
  const [status, setStatus] = React.useState("");

  const handleInputChange = (event) => {
    setNationality(event.target.value);
  };
  const handleInput2Change = (event) => {
    setProperty(event.target.value);
  };
  const handleInput3Change = (event) => {
    setStatus(event.target.value);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .then((data) => setProperty(data))
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const handleActive = () => {
    setActive(!active);
  };

  // handle input range
  const [value1, setValue1] = React.useState([20, 37]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };
  // handle input range

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
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              {" "}
              {t("home.searchForm.labels.nationality")}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={nationality}
              label="الجنسيه"
              onChange={handleInputChange}
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
                  <MenuItem
                    value={item.name.common}
                    key={item.name.common}
                  >
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
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              {" "}
              {t("home.searchForm.labels.Property")}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Property}
              label=" مكان الاقامة "
              onChange={handleInput2Change}
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
                  <MenuItem
                    value={item.name.common}
                    key={item.name.common}
                  >
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
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              {t("home.searchForm.labels.status")}{" "}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              label=" الحالة"
              onChange={handleInput3Change}
            >
              <MenuItem value={"Single"}>
                {t("home.searchForm.status-input.1")}
              </MenuItem>
              <MenuItem value={"Divorced"}>
                {t("home.searchForm.status-input.2")}
              </MenuItem>
              <MenuItem value={"Widower"}>
                {t("home.searchForm.status-input.3")}
              </MenuItem>
              <MenuItem value={"married"}>
                {t("home.searchForm.status-input.4")}
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="third">
          <Slider
            getAriaLabel={() => "Minimum distance"}
            value={value1}
            onChange={handleChange1}
            valueLabelDisplay="auto"
            disableSwap
            className="range"
          />
          <h1> {t("home.searchForm.labels.age")}</h1>
        </div>
        <div className="submit">
          <Button variant="contained" className="form-btn">
            {t("home.searchForm.btn")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
