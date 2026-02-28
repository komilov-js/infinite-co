import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";

import { Routes, Route } from "react-router-dom"; // ✅ TO'G'RI
import About from "./components/pages/about/about.jsx";
import ProjectDetail from "./components/ProjectDetail.jsx";
import ServiceLeadPage from "./components/ServiceLeadPage.jsx";
import AllProjects from "./components/AllProjects.jsx";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Hero />} />
          {/* Project detail page */}
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          {/* About page */}
          <Route path="/about" element={<About />} />
          <Route path="/services/:slug" element={<ServiceLeadPage />} />
          <Route path='/projects' element={<AllProjects />} />  
        </Routes>
      </main>

      <Footer />
    </div>
  );
}