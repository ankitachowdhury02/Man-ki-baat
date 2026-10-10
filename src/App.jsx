
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import Hero from "./Components/Hero";
import OurStory from "./Components/OurStory";
import About from "./Components/About";

function Home() {
  return (
    <>
      <Hero />
      <OurStory />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
