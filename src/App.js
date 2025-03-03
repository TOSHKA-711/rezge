import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./components/Register";
import RegisterHus from "./components/RegisterHus";
import RegisterWife from "./components/RegisterWife";
import LoginHus from "./components/LoginHus";
import LoginWife from "./components/LoginWife";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ChatApp from "./components/ChatApp";
import PaymentForm from "./components/PaymentForm";
import Notification from "./components/items/Notification";
import FilterCard from "./components/items/FilterCard";
import FilterResults from "./components/FilterResults";
import UpdataProfile from "./components/UpdateProfile";
function App() {
  return (
    <div className="App ">
      <BrowserRouter basename="/rezge">
        <Nav />
        {/* <ChatApp/> */}
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/loginHus" element={<LoginHus />} />
          <Route path="/loginWife" element={<LoginWife />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registerHus" element={<RegisterHus />} />
          <Route path="/registerWife" element={<RegisterWife />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/payment" element={<PaymentForm/>} />
          <Route path="/filterResult" element={<FilterResults/>} />
          <Route path="/updateProfile" element={<UpdataProfile/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
     {/* <FilterCard/> */}
    </div>
  );
}




export default App;
