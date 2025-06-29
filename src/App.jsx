import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Notes from "./pages/notes";
import About from "./pages/about";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Navbar from "./components/navbar";
import StudyMaterials from "./pages/StudyMaterials";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <BrowserRouter basename="/StudyOU">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studyMaterials" element={<StudyMaterials />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
