import Navbar from "../components/Navbar";
import sarawut from "../assets/sarawut.png";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="flex h-[580px] m-[105px]">
        <div className="w-[50%] flex justify-center items-center p-[5rem]">
          <div>
            <h1 className="text-5xl font-bold py-3 text-[#fff]">
              Hi!, I'm Sarawut Nangyam
            </h1>
            <h2 className="text-[#5e6eff] text-3xl font-bold py-3 bg-gradient-to-r from-[blue] to-[pink] text-transparent bg-clip-text">
              Full Stack Developer
            </h2>
            <h3 className="text-xl py-3 text-[#EA1179]">
              Newbie web developer with a hunger to learn and grow
            </h3>
            <div className="flex gap-5 mt-8">
              <a href="#contact">
                <button className="btn">Hire me!</button>
              </a>
              <button className="bg-primary w-[180px] h-[65px] rounded-full text-xl font-bold text-[#fff]">
                Download CV
              </button>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex items-center justify-center">
          <div className="w-[600px] h-[600px] rounded-full ring-[6px] ring-[#EA1179]">
            <img
              src={sarawut}
              alt="sarawut-pic"
              className="w-[600px]  h-[600px] rounded-full overflow-hidden pointer-events-none"></img>
          </div>
        </div>
      </div>
    </>
  );
}
