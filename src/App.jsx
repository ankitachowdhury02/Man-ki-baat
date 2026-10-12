
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import Hero from "./Components/Hero";
import OurStory from "./Components/OurStory";
import About from "./Components/About";
import Reviews from "./Components/Reviews";
import Specialisations from "./Components/Specialisations";
import SpecialisationDetails from "./Components/SpecialisationDetails";
import Contact from "./Components/Contact";
import Counsellor from "./Components/Counsellor";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Home() {
  return (
    <>
      <Hero />
      <OurStory />
      <Specialisations />
      <Reviews />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* Dedicated Services / Specialisations Page */}
        <Route path="/services" element={<Specialisations />} />
        <Route
          path="/specialisations"
          element={<Specialisations />}
        />

        {/* Counsellor Page */}
        <Route path="/counsellor" element={<Counsellor />} />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />

        {/* Individual Specialisation Details */}
        <Route
          path="/specialisations/:slug"
          element={<SpecialisationDetails />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
