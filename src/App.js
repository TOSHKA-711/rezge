import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import RegisterHus from "./components/RegisterHus";
import RegisterWife from "./components/RegisterWife";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" exact index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registerHus" element={<RegisterHus />} />
          <Route path="/registerWife" element={<RegisterWife />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
