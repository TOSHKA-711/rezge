import React, { useState } from "react";

const MyContext = React.createContext();

const MyProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("AR");
  const [loginState, setLoginState] = useState(false);
  const [token, setToken] = useState("");
  const [filterResponse, setFilterResponse] = useState([]);
  const [notificationsCount, setNotificationsCount] = useState();
  const [userData, setUserData] = useState({
    id: 0,
    name: "",
    nickname: "",
    age: 0,
    email: "",
    phone: "",
    status: "",
    password: "",
    city_id: 0,
    country_id: 0,
    family_status: "",
    number_children: 0,
    type: "husband",
    type_marriage: " ",
    accommodation: "",
    husband_info: {
      id: 0,
      husband_id: 0,
      weight: 0,
      length: 0,
      skin_color: "",
    },
  });

  return (
    <MyContext.Provider
      value={{
        selectedLanguage,
        setSelectedLanguage,
        loginState,
        setLoginState,
        userData,
        setUserData,
        token,
        setToken,
        notificationsCount,
        setNotificationsCount,
        filterResponse,
        setFilterResponse,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
