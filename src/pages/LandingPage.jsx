import Navbar from "../components/Navbar";
import sarawut from "../assets/sarawut.png";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="flex h-[650px]">
        <div className="w-[50%] flex justify-center items-center p-[5rem]">
          <div>
            <h1 className="text-5xl font-bold py-3">
              Hi!, I'm Sarawut Nangyam
            </h1>
            <h2 className="text-3xl font-bold py-3 text-[#ffd035] bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
              Full Stack Developer
            </h2>
            <h3 className="text-xl py-3 text-[#EA1179]">
              Newbie web developer with a hunger to learn and grow
            </h3>
            <div className="flex gap-5 mt-8">
              <button className="btn">Hire me!</button>
              <button className="bg-[#b11560] w-[180px] h-[65px] rounded-full text-xl font-bold">
                Download CV
              </button>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex items-center justify-center">
          <div className="w-[500px] h-[500px] rounded-full ring-[5px] ring-[#EA1179]">
            <img
              src={sarawut}
              alt="sarawut-pic"
              className="w-[500px]  h-[500px] rounded-full overflow-hidden"></img>
          </div>
        </div>
      </div>
    </>
  );
}
