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
      <div className="flex gap-[3rem] text-[#fff] items-center">
        <a href="/">
          <div>Home</div>
        </a>
        <a href="#About">
          <div>About</div>
        </a>
        <a href="#portfolio">
          <div>Portfolio</div>
        </a>
        <a href="#contact">
          <button className="bg-primary w-[180px] h-[65px] rounded-full text-xl font-bold">
            Contact me
          </button>
        </a>
      </div>
    </div>
  );
}
