import React, { useState, useEffect } from "react";
import "./style/SearchForm.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl"; // Added import for FormControl
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";

const minDistance = 10;
const SearchForm = () => {
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
            ابحث عن زوجة
          </button>
          <button
            className={`first-btn ${active && "active"}`}
            onClick={handleActive}
          >
            ابحث عن زوج
          </button>
        </div>
        <div className="second">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">الجنسية</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={nationality}
              label="الجنسيه"
              onChange={handleInputChange}
            >
              {countries.map((item) => {
                return (
                  <MenuItem
                    value={item.translations.ara.common}
                    key={item.translations.ara.common}
                  >
                    {item.translations.ara.common}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">مكان الاقامة</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Property}
              label="مكان الاقامة"
              onChange={handleInput2Change}
            >
              {countries.map((item) => {
                return (
                  <MenuItem
                    value={item.translations.ara.common}
                    key={item.translations.ara.common}
                  >
                    {item.translations.ara.common}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">الحالة </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              label=" الحالة"
              onChange={handleInput3Change}
            >
              <MenuItem value={"Single"}>اعذب</MenuItem>
              <MenuItem value={"Divorced"}>مطلق</MenuItem>
              <MenuItem value={"Widower"}>أرمل</MenuItem>
              <MenuItem value={"married"}>متزوج</MenuItem>
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
          <h1> العمر</h1>
        </div>
        <div className="submit">
          <Button variant="contained" className="form-btn">
            تأكيد
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
