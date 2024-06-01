import React, { useEffect, useState } from "react";
import "./style/RegisterHus.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const RegisterHus = () => {
  const [age, setAge] = useState("");
  const [countries, setCountries] = useState([]);
  const [nationality, setNationality] = useState("");
  const [Property, setProperty] = useState("");
  const [status, setStatus] = useState("");

  //   handle countries api
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .then((data) => setProperty(data))
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);
  const handleInputChange = (event) => {
    setNationality(event.target.value);
  };
  const handleInput2Change = (event) => {
    setProperty(event.target.value);
  };
  const handleInput3Change = (event) => {
    setStatus(event.target.value);
  };
  // -----------------

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="register-hus">
      <div className="container">
        <div className="title">التسجيل كزوج</div>
        <div className="form">
          {/* ---------------------------first form----------------------------  */}

          <div className="login-data form-child">
            <p className="form-title">معلومات تسجيل الدخول</p>
            <TextField
              id="filled-basic"
              label="اسم المستخدم"
              variant="filled"
              className="input"
            />
            <TextField
              id="filled-basic"
              label="البريد الالكتروني"
              variant="filled"
              className="input"
            />
            <TextField
              id="filled-basic"
              label="كلمة المرور"
              variant="filled"
              className="input"
              type="password"
            />
            <TextField
              id="filled-basic"
              label="تأكيد كلمه المرور"
              variant="filled"
              className="input"
              type="password"
            />
          </div>
          {/* ---------------------------second form----------------------------  */}
          <div className="status-data form-child">
            <p className="form-title">الحالة الاجتماعية</p>
            <FormControl variant="filled" className="input">
              <InputLabel
                id="demo-simple-select-filled-label"
                className="select-label"
              >
                نوع الزواج
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value="">{/* <em>None</em> */}</MenuItem>
                <MenuItem value={10}>زوجة اولى</MenuItem>
                <MenuItem value={10}>زوجة ثانية</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="filled" className="input">
              <InputLabel
                id="demo-simple-select-filled-label"
                className="select-label"
              >
                الحالة الاجتماعية
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value={10}>عازب</MenuItem>
                <MenuItem value={10}>مطلق</MenuItem>
                <MenuItem value={10}>أرمل</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="filled-basic"
              label=" العمر"
              variant="filled"
              className="input"
            />
            <FormControl variant="filled" className="input">
              <InputLabel
                id="demo-simple-select-filled-label "
                className="select-label"
              >
                عدد الاطفال
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value={10}>0</MenuItem>
                <MenuItem value={10}>1</MenuItem>
                <MenuItem value={10}>2</MenuItem>
                <MenuItem value={10}>3</MenuItem>
                <MenuItem value={10}>5</MenuItem>
                <MenuItem value={10}>6</MenuItem>
                <MenuItem value={10}>7</MenuItem>
                <MenuItem value={10}>8</MenuItem>
              </Select>
            </FormControl>
          </div>
          {/* ---------------------------third form----------------------------  */}

          <div className="nationality-data form-child">
            <p className="form-title"> الجنسية والاقامة </p>
            <FormControl className="input">
              <InputLabel id="demo-simple-select-label">
                مكان الاقامة
              </InputLabel>
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
            <FormControl className="input">
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
            <TextField
              id="filled-basic"
              label="المدينة "
              variant="filled"
              className="input"
              required
            />
            <TextField
              id="filled-basic"
              label=" مسلم "
              variant="filled"
              className="input"
              disabled
            />
          </div>
          {/* ---------------------------fourth form----------------------------  */}

          <div className="login-data form-child">
            <p className="form-title"> مواصفاتك</p>
            <TextField
              id="filled-basic"
              label="الوزن (كج) "
              variant="filled"
              className="input"
            />
            <TextField
              id="filled-basic"
              label=" الطول (سم)"
              variant="filled"
              className="input"
            />
            <FormControl variant="filled" className="input">
              <InputLabel
                id="demo-simple-select-filled-label "
                className="select-label"
              >
                لون البشرة
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value={10}>أبيض</MenuItem>
                <MenuItem value={10}>حنطي مائل للبياض</MenuItem>
                <MenuItem value={10}>حنطي مائل للسمار</MenuItem>
                <MenuItem value={10}>أسمر فاتح</MenuItem>
                <MenuItem value={10}>أسمر غامق</MenuItem>
                <MenuItem value={10}>أسود</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="filled" className="input">
              <InputLabel
                id="demo-simple-select-filled-label "
                className="select-label"
              >
                بنية الجسم
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value={10}>نحيف/رفيع</MenuItem>
                <MenuItem value={10}>متوسط البنيه</MenuItem>
                <MenuItem value={10}>قوام رياضي</MenuItem>
                <MenuItem value={10}>سمين</MenuItem>
                <MenuItem value={10}>ضخم</MenuItem>
              </Select>
            </FormControl>
          </div>
          {/* ---------------------------fifth form----------------------------  */}

          <div className="login-data form-child">
            <p className="form-title"> الالتزام الديني</p>
            <FormControl variant="filled" className="input">
              <InputLabel
                id="demo-simple-select-filled-label "
                className="select-label"
              >
                التدين
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value={10}>غير متدين</MenuItem>
                <MenuItem value={10}> متدين قليلا</MenuItem>
                <MenuItem value={10}> متدين</MenuItem>
                <MenuItem value={10}>متدين كثيرا</MenuItem>
                <MenuItem value={10}>لا اجابه</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="filled" className="input">
              <InputLabel
                id="demo-simple-select-filled-label "
                className="select-label"
              >
                الصلاة
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value={10}> اصلي دائما</MenuItem>
                <MenuItem value={10}> اصلي اغلب الاوقات</MenuItem>
                <MenuItem value={10}> اصلي بعض الاحيان</MenuItem>
                <MenuItem value={10}> لا أصلي</MenuItem>
                <MenuItem value={10}>لا اجابه</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="filled" className="input">
              <InputLabel
                id="demo-simple-select-filled-label "
                className="select-label"
              >
                التدخين
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value={10}> نعم</MenuItem>
                <MenuItem value={10}> لا</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="filled" className="input">
              <InputLabel
                id="demo-simple-select-filled-label "
                className="select-label"
              >
                اللحية
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value={10}> نعم</MenuItem>
                <MenuItem value={10}> لا</MenuItem>
              </Select>
            </FormControl>
          </div>
          {/* ---------------------------6th form----------------------------  */}

          <div className="login-data form-child">
            <p className="form-title"> الدراسه والعمل</p>
            <FormControl variant="filled" className="input">
              <InputLabel
                id="demo-simple-select-filled-label "
                className="select-label"
              >
                المستوى التعليمي
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value={10}> دراسه اعداديه</MenuItem>
                <MenuItem value={10}> دراسه ثانوية</MenuItem>
                <MenuItem value={10}> دراسه جامعية</MenuItem>
                <MenuItem value={10}> دكتوراه</MenuItem>
                <MenuItem value={10}> دراسه ذاتية</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="filled" className="input">
              <InputLabel
                id="demo-simple-select-filled-label "
                className="select-label"
              >
                الوضع المادي
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value={10}> فقير</MenuItem>
                <MenuItem value={10}> قريب من المتوسط</MenuItem>
                <MenuItem value={10}> متوسط</MenuItem>
                <MenuItem value={10}> اكثر من المتوسط</MenuItem>
                <MenuItem value={10}> جيد </MenuItem>
                <MenuItem value={10}> ميسور </MenuItem>
                <MenuItem value={10}> ثري </MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="filled" className="input">
              <InputLabel
                id="demo-simple-select-filled-label "
                className="select-label"
              >
                مجال العمل
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value={10}> بدوت عمل حاليا</MenuItem>
                <MenuItem value={10}> لا زلت ادرس </MenuItem>
                <MenuItem value={10}> سكرتارية </MenuItem>
                <MenuItem value={10}> مجال الفن / الادب </MenuItem>
                <MenuItem value={10}> الادارة </MenuItem>
                <MenuItem value={10}> مجال التجارة </MenuItem>
                <MenuItem value={10}> مجال الاغذية </MenuItem>
                <MenuItem value={10}> مجال الانشاءات والبناء </MenuItem>
                <MenuItem value={10}> مجال القانون </MenuItem>
                <MenuItem value={10}> مجال الطب</MenuItem>
                <MenuItem value={10}> السياسه / الجكومة </MenuItem>
                <MenuItem value={10}> متقاعد </MenuItem>
                <MenuItem value={10}> التسويق والمبيعات </MenuItem>
                <MenuItem value={10}> صاجب عمل خاص </MenuItem>
                <MenuItem value={10}> مجال التدريس </MenuItem>
                <MenuItem value={10}> مجال الهندسه / العلوم </MenuItem>
                <MenuItem value={10}> مجال النقل </MenuItem>
                <MenuItem value={10}> مجال الكمبيوتر او المعلوماتيه </MenuItem>
                <MenuItem value={10}> شئ اخر </MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="filled-basic"
              label="الوظيفة "
              variant="filled"
              className="input"
            />
            <FormControl variant="filled" className="input">
              <InputLabel
                id="demo-simple-select-filled-label "
                className="select-label"
              >
                الدخل الشهري (جنيه)
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value={10}> بدون</MenuItem>
                <MenuItem value={10}> اقل من 500</MenuItem>
                <MenuItem value={10}> 500-1000 </MenuItem>
                <MenuItem value={10}> 1000-3000</MenuItem>
                <MenuItem value={10}> 3000-6000</MenuItem>
                <MenuItem value={10}> 6000-9000</MenuItem>
                <MenuItem value={10}>9000-12000 </MenuItem>
                <MenuItem value={10}> 12000-16000</MenuItem>
                <MenuItem value={10}> 16000-20000</MenuItem>
                <MenuItem value={10}> اكثر من 20000</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="filled" className="input">
              <InputLabel
                id="demo-simple-select-filled-label "
                className="select-label"
              >
                الحالة الصحية
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value={10}> بصحة جيده الحمدلله</MenuItem>
                <MenuItem value={10}> اعاقه فكريه</MenuItem>
                <MenuItem value={10}> اعاقه حركيه</MenuItem>
                <MenuItem value={10}> اكتئاب</MenuItem>
                <MenuItem value={10}> انحناء وتقوس</MenuItem>
                <MenuItem value={10}> انفصام شخصيه </MenuItem>
                <MenuItem value={10}> باطنه </MenuItem>
                <MenuItem value={10}> برص </MenuItem>
                <MenuItem value={10}>بصرية </MenuItem>
                <MenuItem value={10}> بهاء </MenuItem>
                <MenuItem value={10}> جلدية </MenuItem>
                <MenuItem value={10}> حروق مشوهة </MenuItem>
                <MenuItem value={10}> سكري </MenuItem>
                <MenuItem value={10}> سمعيه </MenuItem>
                <MenuItem value={10}> الكلام-النطق</MenuItem>
                <MenuItem value={10}> سمنه مفرطه </MenuItem>
                <MenuItem value={10}> شلل اطفال </MenuItem>
                <MenuItem value={10}>شلل رباعي </MenuItem>
                <MenuItem value={10}> شلل نصفي </MenuItem>
                <MenuItem value={10}> صدفيه</MenuItem>
                <MenuItem value={10}> صرع </MenuItem>
                <MenuItem value={10}> عجز جنسي </MenuItem>
                <MenuItem value={10}> عقم </MenuItem>
                <MenuItem value={10}> فقدان طرف او عضو </MenuItem>
                <MenuItem value={10}> قزم </MenuItem>
                <MenuItem value={10}> متلازمه داون </MenuItem>
                <MenuItem value={10}> نفسية </MenuItem>
              </Select>
            </FormControl>
          </div>
          {/* ---------------------------7th form----------------------------  */}

          <div className="login-data form-child">
            <p className="form-title">
              {" "}
              مواصفات شريك حياتك التي ترغب الإرتباط به{" "}
            </p>
            <TextField
              fullWidth
              label="يرجى الكتابة بطريقة جادة و مهذبة"
              id="fullWidth"
              className="input input2"
            />
          </div>
          {/* ---------------------------8th form----------------------------  */}

          <div className="login-data form-child">
            <p className="form-title">تحدث عن نفسك</p>
            <TextField
              fullWidth
              label="يرجى الكتابة بطريقة جادة و مهذبة"
              id="fullWidth"
              className="input input2"
            />
          </div>
          {/* ----------------------end forms---------- */}
          <button className="about-btn">تأكيد</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterHus;
