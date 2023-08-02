import React from "react";
import webLogo from "../assets/webLogo.png";

export default function Navbar() {
  const handleDragStart = (e) => e.preventDefault();

  return (
    <div className="flex justify-evenly items-center h-[9rem] text-white text-xl font-bold">
      <div>
        <a href="xxx">
          <img
            src={webLogo}
            className="h-[130px] pointer-events-none	"
            alt="Earth-Logo"
          />
        </a>
      </div>
      <div className="flex gap-[3rem] text-[#fff] ">
        <a href="xxx">
          <div>Home</div>
        </a>
        <a href="xxx">
          <div>About</div>
        </a>
        <a href="xxx">
          <div>Passions</div>
        </a>
        <a href="xxx">
          <div>Portfolio</div>
        </a>
        <a href="xxx">
          <div>Contact Me</div>
        </a>
      </div>
    </div>
  );
}
