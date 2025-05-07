import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DownloadCV from "./components/DownlaodCV";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <DownloadCV />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;