import React from "react";
import "./App.css";

// imports
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technology from "./components/Technology";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero title="Front-End Developer" github="Github" linkedIn="LinkedIn" />
      <About title="About..." />
      <Technology title="Some Tech I use..." />
      <Projects />
      <Contact />
      <Footer text="Michael Fazekas 2020." />
    </div>
  );
}

export default App;
