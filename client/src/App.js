import React from "react";
import ContactUs from "./Components/ContactUs";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Clients from "./Components/Clients";
import Service from "./Components/Service";
import Solutions from "./Components/Solutions";
import SurveySolutions from "./Components/SurveySolutions";
import AboutUs from "./Components/AboutUs";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Clients" element={<Clients />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Solutions" element={<Solutions />} />
          <Route path="/SurveySolutions" element={<SurveySolutions />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
