
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import Hero from "./Components/Hero";
import OurStory from "./Components/OurStory";
import About from "./Components/About";
import Reviews from "./Components/Reviews";
import Specialisations from "./Components/Specialisations";
import SpecialisationDetails from "./Components/SpecialisationDetails";

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
      <Header />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* All Specialisations */}
        <Route
          path="/specialisations"
          element={<Specialisations />}
        />

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
