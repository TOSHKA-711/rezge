import React, { useEffect, useState } from "react";
import "./style/RegisterHus.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { useTranslation } from "react-i18next";
const RegisterHus = () => {
  const { t, i18n } = useTranslation();
  const [countries, setCountries] = useState([]);

  const [payload, setPayload] = useState({
    name: "",
    nickname: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
    type_marriage: "",
    family_status: "",
    age: 25,
    number_children: 1,
    accommodation: "",
    country_id: 57,
    city: "",
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
    const url = "http://127.0.0.1:8000/api/husband/register";

    axios
      .post(url, payload)
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="register-hus">
      <div className="container">
        <div className="title"> {t('register-hus.titles.hus')}</div>
        <div className="form">
          {/* ---------------------------first form----------------------------  */}

          <div className="login-data form-child">
            <p className="form-title">معلومات تسجيل الدخول</p>
            <TextField
              id="filled-basic"
              label="اسم المستخدم"
              variant="filled"
              className="input"
              name="name"
              value={payload.name}
              onChange={(e) => handleInputChange(e)}
            />
            <TextField
              id="filled-basic"
              label="البريد الالكتروني"
              variant="filled"
              className="input"
              name="email"
              value={payload.email}
              onChange={(e) => handleInputChange(e)}
            />
            <TextField
              id="filled-basic"
              label="كلمة المرور"
              variant="filled"
              className="input"
              type="password"
              name="password"
              value={payload.password}
              onChange={(e) => handleInputChange(e)}
            />
            <TextField
              id="filled-basic"
              label="تأكيد كلمه المرور"
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
                value={payload.type_marriage}
                name="type_marriage"
                onChange={(e) => handleInputChange(e)}
              >
                <MenuItem value="">{/* <em>None</em> */}</MenuItem>
                <MenuItem value="زوجة اولى"> زوجة اولى</MenuItem>
                <MenuItem value="زوجة ثانية"> زوجة ثانية</MenuItem>
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
                value={payload.family_status}
                name="family_status"
                onChange={(e) => handleInputChange(e)}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value="عازب">عازب</MenuItem>
                <MenuItem value="مطلق">مطلق</MenuItem>
                <MenuItem value="أرمل">أرمل</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="filled-basic"
              label=" العمر"
              variant="filled"
              className="input"
              value={payload.age}
              name="age"
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
                value={payload.number_children}
                name="number_children"
                onChange={(e) => handleInputChange(e)}
              >
                <MenuItem value=""></MenuItem>
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
            <p className="form-title"> الجنسية والاقامة </p>
            <FormControl className="input">
              <InputLabel id="demo-simple-select-label">
                مكان الاقامة
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={payload.accommodation}
                name="accommodation"
                label="مكان الاقامة"
                onChange={(e) => handleInputChange(e)}
              >
                {countries.map((item) => {
                  return (
                    <MenuItem
                      value={item.translations.ara.common}
                      key={item.idd.root}
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
              value={payload.city}
              name="city"
              onChange={(e) => handleInputChange(e)}
            />
            <TextField
              id="filled-basic"
              label=" كود المنطقة"
              variant="filled"
              className="input"
              value={payload.country_id}
              name="country_id"
              onChange={(e) => handleInputChange(e)}
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
              value={payload.weight}
              name="weight"
              onChange={(e) => handleInputChange(e)}
            />
            <TextField
              id="filled-basic"
              label=" الطول (سم)"
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
                لون البشرة
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={payload.skin_color}
                name="skin_color"
                onChange={(e) => handleInputChange(e)}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value="أبيض">أبيض</MenuItem>
                <MenuItem value="حنطي مائل للبياض ">
                  {" "}
                  حنطي مائل للبياض{" "}
                </MenuItem>
                <MenuItem value="حنطي مائل للسمار ">
                  {" "}
                  حنطي مائل للسمار{" "}
                </MenuItem>
                <MenuItem value="أسمر فاتح "> أسمر فاتح </MenuItem>
                <MenuItem value="أسمر غامق">أسمر غامق</MenuItem>
                <MenuItem value="أسود">أسود</MenuItem>
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
                value={payload.body_structure}
                name="body_structure"
                onChange={(e) => handleInputChange(e)}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value="نحيف/رفيع "> نحيف/رفيع </MenuItem>
                <MenuItem value="متوسط البنيه "> متوسط البنيه </MenuItem>
                <MenuItem value="قوام رياضي "> قوام رياضي </MenuItem>
                <MenuItem value="سمين "> سمين </MenuItem>
                <MenuItem value="ضخم"> ضخم </MenuItem>
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
                value={payload.religiosity}
                name="religiosity"
                onChange={(e) => handleInputChange(e)}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value=" غير متدين "> غير متدين </MenuItem>
                <MenuItem value="متدين قليلا  "> متدين قليلا </MenuItem>
                <MenuItem value="متدين  "> متدين </MenuItem>
                <MenuItem value=" متدين كثيرا "> متدين كثيرا </MenuItem>
                <MenuItem value="  لا اجابه "> لا اجابه </MenuItem>
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
                value={payload.prayer}
                name="prayer"
                onChange={(e) => handleInputChange(e)}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value=" اصلي دائما  "> اصلي دائما </MenuItem>
                <MenuItem value=" اصلي اغلب الاوقات ">
                  {" "}
                  اصلي اغلب الاوقات{" "}
                </MenuItem>
                <MenuItem value=" اصلي بعض الاحيان ">
                  {" "}
                  اصلي بعض الاحيان{" "}
                </MenuItem>
                <MenuItem value=" لا أصلي "> لا أصلي </MenuItem>
                <MenuItem value=" لا اجابه "> لا اجابه </MenuItem>
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
                value={payload.smoking}
                name="smoking"
                onChange={(e) => handleInputChange(e)}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value="yes"> نعم</MenuItem>
                <MenuItem value="no"> لا</MenuItem>
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
                value={payload.beard}
                name="beard"
                onChange={(e) => handleInputChange(e)}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value="yes "> نعم</MenuItem>
                <MenuItem value="no "> لا</MenuItem>
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
                value={payload.education}
                name="education"
                onChange={(e) => handleInputChange(e)}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value="دراسه اعداديه "> دراسه اعداديه</MenuItem>
                <MenuItem value="دراسه ثانوية "> دراسه ثانوية</MenuItem>
                <MenuItem value="دراسه جامعية"> دراسه جامعية</MenuItem>
                <MenuItem value=" دكتوراه"> دكتوراه</MenuItem>
                <MenuItem value=" دراسه ذاتية"> دراسه ذاتية</MenuItem>
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
                value={payload.physical_situation}
                name="physical_situation"
                onChange={(e) => handleInputChange(e)}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value="فقير "> فقير</MenuItem>
                <MenuItem value="قريب من المتوسط "> قريب من المتوسط</MenuItem>
                <MenuItem value="متوسط "> متوسط</MenuItem>
                <MenuItem value="اكثر من المتوسط "> اكثر من المتوسط</MenuItem>
                <MenuItem value=" جيد"> جيد </MenuItem>
                <MenuItem value=" ميسور"> ميسور </MenuItem>
                <MenuItem value="ثري "> ثري </MenuItem>
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
                value={payload.work}
                name="work"
                onChange={(e) => handleInputChange(e)}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value=" بدوت عمل حاليا"> بدوت عمل حاليا</MenuItem>
                <MenuItem value=" لا زلت ادرس "> لا زلت ادرس </MenuItem>
                <MenuItem value=" سكرتارية "> سكرتارية </MenuItem>
                <MenuItem value="  مجال الفن / الادب ">
                  {" "}
                  مجال الفن / الادب{" "}
                </MenuItem>
                <MenuItem value=" الادارة "> الادارة </MenuItem>
                <MenuItem value="مجال التجارة  "> مجال التجارة </MenuItem>
                <MenuItem value="مجال الاغذية  "> مجال الاغذية </MenuItem>
                <MenuItem value="مجال الانشاءات والبناء  ">
                  {" "}
                  مجال الانشاءات والبناء{" "}
                </MenuItem>
                <MenuItem value=" مجال القانون  "> مجال القانون </MenuItem>
                <MenuItem value=" مجال الطب"> مجال الطب</MenuItem>
                <MenuItem value=" السياسه / الجكومة ">
                  {" "}
                  السياسه / الجكومة{" "}
                </MenuItem>
                <MenuItem value=" متقاعد "> متقاعد </MenuItem>
                <MenuItem value=" التسويق والمبيعات  ">
                  {" "}
                  التسويق والمبيعات{" "}
                </MenuItem>
                <MenuItem value=" صاجب عمل خاص "> صاجب عمل خاص </MenuItem>
                <MenuItem value=" مجال التدريس  "> مجال التدريس </MenuItem>
                <MenuItem value=" مجال الهندسه / العلوم ">
                  {" "}
                  مجال الهندسه / العلوم{" "}
                </MenuItem>
                <MenuItem value="  مجال النقل "> مجال النقل </MenuItem>
                <MenuItem value="مجال الكمبيوتر او المعلوماتيه ">
                  {" "}
                  مجال الكمبيوتر او المعلوماتيه{" "}
                </MenuItem>
                <MenuItem value=" شئ اخر "> شئ اخر </MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="filled-basic"
              label="الوظيفة "
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
                الدخل الشهري (جنيه)
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={payload.income}
                name="income"
                onChange={(e) => handleInputChange(e)}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value=" بدون"> بدون</MenuItem>
                <MenuItem value="اقل من 500 "> اقل من 500</MenuItem>
                <MenuItem value=" 500-1000"> 500-1000 </MenuItem>
                <MenuItem value=" 1000-3000"> 1000-3000</MenuItem>
                <MenuItem value=" 3000-6000"> 3000-6000</MenuItem>
                <MenuItem value="6000-9000 "> 6000-9000</MenuItem>
                <MenuItem value="9000-12000 ">9000-12000 </MenuItem>
                <MenuItem value=" 12000-16000"> 12000-16000</MenuItem>
                <MenuItem value=" 16000-20000"> 16000-20000</MenuItem>
                <MenuItem value=" اكثر من 20000"> اكثر من 20000</MenuItem>
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
                value={payload.health_status}
                name="health_status"
                onChange={(e) => handleInputChange(e)}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value=" بصحة جيده الحمدلله">
                  {" "}
                  بصحة جيده الحمدلله
                </MenuItem>
                <MenuItem value="اعاقه فكريه "> اعاقه فكريه</MenuItem>
                <MenuItem value=" اعاقه حركيه"> اعاقه حركيه</MenuItem>
                <MenuItem value="اكتئاب "> اكتئاب</MenuItem>
                <MenuItem value="انحناء وتقوس "> انحناء وتقوس</MenuItem>
                <MenuItem value=" انفصام شخصيه "> انفصام شخصيه </MenuItem>
                <MenuItem value="باطنه "> باطنه </MenuItem>
                <MenuItem value=" برص"> برص </MenuItem>
                <MenuItem value=" بصرية">بصرية </MenuItem>
                <MenuItem value="بهاء "> بهاء </MenuItem>
                <MenuItem value=" جلدية"> جلدية </MenuItem>
                <MenuItem value="  حروق مشوهة "> حروق مشوهة </MenuItem>
                <MenuItem value="سكري "> سكري </MenuItem>
                <MenuItem value="سمعيه "> سمعيه </MenuItem>
                <MenuItem value="الكلام-النطق "> الكلام-النطق</MenuItem>
                <MenuItem value="سمنه مفرطه  "> سمنه مفرطه </MenuItem>
                <MenuItem value=" شلل اطفال "> شلل اطفال </MenuItem>
                <MenuItem value=" شلل رباعي "> شلل رباعي </MenuItem>
                <MenuItem value=" شلل نصفي "> شلل نصفي </MenuItem>
                <MenuItem value=" صدفيه"> صدفيه</MenuItem>
                <MenuItem value=" صرع"> صرع </MenuItem>
                <MenuItem value=" عجز جنسي "> عجز جنسي </MenuItem>
                <MenuItem value="عقم "> عقم </MenuItem>
                <MenuItem value="فقدان طرف او عضو  ">
                  {" "}
                  فقدان طرف او عضو{" "}
                </MenuItem>
                <MenuItem value="قزم "> قزم </MenuItem>
                <MenuItem value=" متلازمه داون "> متلازمه داون </MenuItem>
                <MenuItem value="نفسية "> نفسية </MenuItem>
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
              value={payload.description}
              name="description"
              onChange={(e) => handleInputChange(e)}
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
              value={payload.about_you}
              name="about_you"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          {/* ----------------------end forms---------- */}
          <button className="about-btn" onClick={() => handleSubmit()}>
            تأكيد
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterHus;
