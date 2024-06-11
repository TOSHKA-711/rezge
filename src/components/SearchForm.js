// import React, { useState, useEffect, useContext } from "react";
// import "./style/SearchForm.css";
// import InputLabel from "@mui/material/InputLabel";
// import TextField from "@mui/material/TextField";
// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";
// import FormControl from "@mui/material/FormControl"; // Added import for FormControl
// import Slider from "@mui/material/Slider";
// import Button from "@mui/material/Button";
// import { useTranslation } from "react-i18next";
// import { MyContext } from "../contextApi/MyProvider";
// const minDistance = 10;
// const SearchForm = () => {
//   const { selectedLanguage, setSelectedLanguage } = useContext(MyContext);
//   console.log(selectedLanguage);
//   const { t, i18n } = useTranslation();
//   const [active, setActive] = useState(true);
//   const [countries, setCountries] = useState([]);
//   const [nationality, setNationality] = React.useState("");
//   const [Property, setProperty] = React.useState("");
//   const [status, setStatus] = React.useState("");
//   const [payload, setPayload] = useState({
//     min_age: "",
//     max_age: "",
//     country: "",
//     city: "",
//     status: "",
//   });

//   // const handleInputChange = (event) => {
//   //   setNationality(event.target.value);
//   // };
//   // const handleInput2Change = (event) => {
//   //   setProperty(event.target.value);
//   // };
//   // const handleInput3Change = (event) => {
//   //   setStatus(event.target.value);
//   // };

//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((response) => response.json())
//       .then((data) => setCountries(data))
//       .then((data) => setProperty(data))
//       .catch((error) => console.error("Error fetching countries:", error));
//   }, []);

//   const handleActive = () => {
//     setActive(!active);
//   };

//   // handle input range
//   const [value1, setValue1] = React.useState([20, 37]);

//   const handleChange1 = (event, newValue, activeThumb) => {
//     if (!Array.isArray(newValue)) {
//       return;
//     }

//     if (activeThumb === 0) {
//       setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
//       setPayload({
//         ...payload,
//         min_age: value1[0],
//         max_age: value1[1],
//       });
//     } else {
//       setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
//       setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
//       setPayload({
//         ...payload,
//         min_age: value1[0],
//         max_age: value1[1],
//       });
//     }
//   };
//   // handle submit
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setPayload({
//       ...payload,
//       [name]: value,
//     });
//   };

//   return (
//     <div className="search">
//       <div className="container">
//         <div className="first">
//           <button
//             className={`second-btn ${!active && "active"}`}
//             onClick={handleActive}
//           >
//             {t("home.searchForm.btn2")}
//           </button>
//           <button
//             className={`first-btn ${active && "active"}`}
//             onClick={handleActive}
//           >
//             {t("home.searchForm.btn1")}
//           </button>
//         </div>
//         <div className="second">
//         <TextField
//               id="filled-basic"
//               label="المدينة "
//               variant="filled"
//               className="input"
//               name="city"
//               value={payload.city}
//               onChange={(e) => handleInputChange(e)}
//             />
//           <FormControl fullWidth>
//             <InputLabel id="demo-simple-select-label">
//               {" "}
//               {t("home.searchForm.labels.Property")}
//             </InputLabel>
//             <Select
//               labelId="demo-simple-select-label"
//               id="demo-simple-select"
//               name="country"
//               value={payload.country}
//               label=" مكان الاقامة "
//               onChange={(e) => handleInputChange(e)}
//             >
//               {countries.map((item) =>
//                 selectedLanguage === "AR" ? (
//                   <MenuItem
//                     value={item.translations.ara.common}
//                     key={item.translations.ara.common}
//                   >
//                     {item.translations.ara.common}
//                   </MenuItem>
//                 ) : selectedLanguage === "EN" ? (
//                   <MenuItem value={item.name.common} key={item.name.common}>
//                     {item.name.common}
//                   </MenuItem>
//                 ) : (
//                   <MenuItem
//                     value={item.translations.fra.common}
//                     key={item.translations.fra.common}
//                   >
//                     {item.translations.fra.common}
//                   </MenuItem>
//                 )
//               )}
//             </Select>
//           </FormControl>
//           <FormControl fullWidth>
//             <InputLabel id="demo-simple-select-label">
//               {t("home.searchForm.labels.status")}{" "}
//             </InputLabel>
//             <Select
//               labelId="demo-simple-select-label"
//               id="demo-simple-select"
//               name="status"
//               value={payload.status}
//               label=" الحالة"
//               onChange={(e) => handleInputChange(e)}
//             >
//               <MenuItem value={t("home.searchForm.status-input.1")}>
//                 {t("home.searchForm.status-input.1")}
//               </MenuItem>
//               <MenuItem value={t("home.searchForm.status-input.2")}>
//                 {t("home.searchForm.status-input.2")}
//               </MenuItem>
//               <MenuItem value={t("home.searchForm.status-input.3")}>
//                 {t("home.searchForm.status-input.3")}
//               </MenuItem>
//               <MenuItem value= {t("home.searchForm.status-input.4")}>
//                 {t("home.searchForm.status-input.4")}
//               </MenuItem>
//             </Select>
//           </FormControl>
//         </div>
//         <div className="third">
//           <Slider
//             getAriaLabel={() => "Minimum distance"}
//             value={value1}
//             onChange={handleChange1}
//             valueLabelDisplay="auto"
//             disableSwap
//             className="range"
//           />
//           <h1> {t("home.searchForm.labels.age")}</h1>
//         </div>
//         <div className="submit">
//           <Button variant="contained" className="form-btn">
//             {t("home.searchForm.btn")}
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchForm;

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

const minDistance = 10;

const SearchForm = () => {
  const { selectedLanguage } = useContext(MyContext);
  const { t } = useTranslation();
  const [active, setActive] = useState(true);
  const [countries, setCountries] = useState([]);
  const [payload, setPayload] = useState({
    min_age: 20,
    max_age: 37,
    country: "",
    city: "",
    status: "",
  });

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

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


  const handleSubmit = () => {
    const url = `${
      active === true
      ? "https://rezge.art-lms.net/api/filter/husband"
        : "https://rezge.art-lms.net/api/filter/wife"
    }  `;

    axios
    .post(url, payload)
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.error("Error response data:", error.response.data);
        } else {
          console.error("Error message:", error.message);
        }
      });
      console.log(payload , url);
  };

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
