import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";

export default function App() {
  return (
    <div className=" m-0 p-0 box-border text-white text-xl font-montserrat">
      <LandingPage />
    </div>
  );
}
