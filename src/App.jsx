import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import ContactMe from "./pages/ContactMe";

export default function App() {
  return (
    <div className="flex-col justify-center items-center m-0 p-0 box-border text-white text-xl font-montserrat">
      <LandingPage />
      <AboutMe />
      <Portfolio />
      <ContactMe />
    </div>
  );
}
