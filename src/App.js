import "./index.css";
import { Routes, Route } from "react-router-dom";
import React, { useState, createContext } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import AboutUs from "./components/AboutUs/aboutUs";
import Home from "./components/Home/home";
import Projects from "./components/Projects/Projects";

export const userContext = createContext();

function App() {

  return (
    <userContext.Provider
      
    >
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Projects/>} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </userContext.Provider>
  );
}

export default App;
