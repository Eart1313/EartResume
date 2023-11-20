import { useState } from "react";
import webLogo from "../assets/webLogo.png";

export default function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center h-[100px] sm:h-[150px] text-white text-xl font-bold w-[320px] sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1400px] ">
        <a href="/" className="bigger">
          <img
            src={webLogo}
            className="h-[80px] sm:h-[120px] pointer-events-none bigger	"
            alt="Earth-Logo"
          />
        </a>
        <div className="flex hidden md:hidden lg:flex xl:flex 2xl:flex  gap-[1rem] sm:gap-[3rem] text-[#fff] items-center">
          <a href="/">
            <div className="nav">Home</div>
          </a>
          <a href="#About">
            <div className="nav">About</div>
          </a>
          <a href="#portfolio">
            <div className="nav">Portfolio</div>
          </a>
          <a href="#contact">
            <button className="bg-primary hover:bg-[#c13791ff] w-[180px] h-[65px] rounded-full text-xl font-bold">
              Contact me
            </button>
          </a>
        </div>
        <div
          className="w-[40px] lg:hidden xl:hidden cursor-pointer"
          onClick={() => setMenuToggle(!menuToggle)}>
          {menuToggle ? (
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffffff"
              stroke="#ffffff">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title></title>{" "}
                <g id="Complete">
                  {" "}
                  <g id="x-circle">
                    {" "}
                    <g>
                      {" "}
                      <circle
                        cx="12"
                        cy="12"
                        data-name="--Circle"
                        fill="none"
                        id="_--Circle"
                        r="10"
                        stroke="#ffffff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"></circle>{" "}
                      <line
                        fill="none"
                        stroke="#ffffff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        x1="14.5"
                        x2="9.5"
                        y1="9.5"
                        y2="14.5"></line>{" "}
                      <line
                        fill="none"
                        stroke="#ffffff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        x1="14.5"
                        x2="9.5"
                        y1="14.5"
                        y2="9.5"></line>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M4 18L20 18"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"></path>{" "}
                <path
                  d="M4 12L20 12"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"></path>{" "}
                <path
                  d="M4 6L20 6"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"></path>{" "}
              </g>
            </svg>
          )}
        </div>
      </div>
      {
        <div
          className={`nav-menu font-notoSansThai font-bold ${
            menuToggle ? "open" : ""
          }  drop-shadow-lg	`}>
          <div className="nav-menu-item">
            <div className="h-[80px] flex justify-center items-center text-[white] ">
              <a href="/">
                <div className="cursor-pointer">Home</div>
              </a>
            </div>
          </div>
          <div className="nav-menu-item">
            <div className="h-[80px] flex justify-center items-center text-[white] cursor-pointer">
              <a href="#About">
                <div className="cursor-pointer">About</div>
              </a>
            </div>
          </div>
          <div className="nav-menu-item">
            <div className="h-[80px] flex justify-center items-center text-[white] ">
              <a href="#portfolio">
                <div className="cursor-pointer">Portfolio</div>
              </a>
            </div>
          </div>
          <div className="nav-menu-item">
            <div className="h-[80px] flex justify-center items-center text-[white] ">
              <a href="#contact">
                <div className="cursor-pointer">Contact me</div>
              </a>
            </div>
          </div>
        </div>
      }
    </>
  );
}
