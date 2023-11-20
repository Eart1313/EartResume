import sarawut from "../assets/sarawut.png";
import resume from "../assets/resume.pdf";

export default function LandingPage() {
  return (
    <div className="flex  sm:justify-center lg:justify-between flex-wrap-reverse lg:flex-nowrap  mt-[100px]">
      <div className="flex flex-col  justify-center gap-[5px] sm:gap-[30px] p-[10px]">
        <h1 className="text-[1.4rem] xl:text-[2rem] font-bold text-[#fff]">
          {"Hi!, I'm Sarawut Nangyam"}
        </h1>
        <h2 className="text-[#5e6eff] xl:text-[1.5rem] font-bold bg-gradient-to-r from-[blue] to-[pink] text-transparent bg-clip-text">
          Junior Full Stack Developer
        </h2>
        <h3 className="xl:text-[1.2rem] text-[#EA1179]">
          Newbie web developer with a hunger to learn and grow
        </h3>
        <div className="flex justify-center lg:inline">
          <a href={resume} download>
            <button className="btn mt-[20px]">Download CV</button>
          </a>
        </div>
      </div>
      <div className="flex rounded-full ring-[6px]  ring-[#EA1179] mb-[20px] lg:mb-[0px]">
        <img
          src={sarawut}
          alt="sarawut-pic"
          className="text-center w-[320px] h-[320px] lg:h-[450px] lg:w-[450px] 2xl:h-[600px] 2xl:w-[600px] rounded-full pointer-events-none"></img>
      </div>
    </div>
  );
}
