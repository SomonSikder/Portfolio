import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Contact from "../page/Contact";
import Skills from "../page/Skills";
import Project from "../page/Project";
import About from "../page/About";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/about" />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routers;
