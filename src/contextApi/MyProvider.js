import React, { useState } from "react";

const MyContext = React.createContext();

const MyProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("AR");
  const [loginState, setLoginState] = useState(true);

  return (
    <MyContext.Provider value={{ selectedLanguage, setSelectedLanguage ,loginState,setLoginState}}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
