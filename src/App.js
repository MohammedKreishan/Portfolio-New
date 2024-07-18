import "./index.css";
import { Routes, Route } from "react-router-dom";
import React, { useState, createContext } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills";
import AboutUs from "./components/AboutUs/aboutUs";
import Home from "./components/Home/home";
import Projects from "./components/Projects/Projects";
import WebDevelopment from "./components/Web_DeveLopment/Web_Development"
import Cyber_Security from "./components/Cyber_Security/Cyber_Security"
import 'bootstrap/dist/css/bootstrap.min.css';


export const userContext = createContext();

function App() {

  return (
    <userContext.Provider
      
    >
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />Cypher_Security
          <Route path="/WebDevelopment" element={<WebDevelopment />} />
          <Route path="/Cyber_Security" element={<Cyber_Security />} />

          <Route path="/" element={<Projects/>} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </userContext.Provider>
  );
}

export default App;
