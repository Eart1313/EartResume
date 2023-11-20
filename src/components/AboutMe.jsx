import SkillCard from "./SkillCard";
import skills from "../data/skills";

export default function AboutMe() {
  return (
    <div className="">
      <div
        id="About"
        className="flex items-center justify-center text-[2rem] 2xl:text-3xl  font-bold my-[50px] p-[50px] text-secondary">
        About Me
      </div>
      <div className="flex flex-wrap justify-center items-center gap-[100px]">
        <img
          src="https://scontent.fbkk30-1.fna.fbcdn.net/v/t1.6435-9/36063028_1485465868224427_4313586619178287104_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeHmM17YLiRNqjxBqfrcTx1LE5DA4EAYc_8TkMDgQBhz_zfMFnTJ_q7F3n9sg_ymac8FLRhT8T281OqY60gPLKFP&_nc_ohc=OIQmB6IJaR4AX_q0hRa&_nc_ht=scontent.fbkk30-1.fna&oh=00_AfALsVpgSHuq7EIdX9jeyXIilARGDahIEXfeKGNKMqkuFw&oe=65817420"
          alt="eart was playing guitar"
          className="h-[200px] rounded-full"
        />
        <div className="text-[white] 2xl:text-[1.2rem] w-[800px]">
          <div className="">
            <p>
              Hello, my name is Eart.
              <span className=" text-[#EA1179] font-bold mx-[10px]">
                I have 7 months of software development experience
              </span>
              after transitioning from a background in mass communication.
            </p>
            <br></br>
            <p>
              I understand that
              <span className=" text-[#EA1179] font-bold mx-[10px]">
                it's risky to hire someone
              </span>
              who didn't graduate from a computer science program as a
              developer,{" "}
              <span className=" text-[#EA1179] font-bold mx-[10px]">
                but I am confident that I can learn quickly and adapt.
              </span>
              I've applied my communication skills, which I have honed within a
              team environment, to contribute effectively to software
              development projects.
            </p>
            <br></br>
            <p>
              I'm passionate about software development and constantly seek
              opportunities to
              <span className=" text-[#EA1179] font-bold mx-[10px]">
                learn and grow
              </span>
              within a trusted organization. Currently, I focus on React for
              frontend development and Node.js for backend work, but
              <span className=" text-[#EA1179] font-bold mx-[10px]">
                I'm always eager to explore new technology stacks.
              </span>
            </p>
            <br></br>
            <p>
              In my free time, I enjoy playing music and singing as well. If
              you're interested in hiring me, I hope we can play music together
              someday. Best regards to the team for the future 💌.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="my-[50px] text-[1.5rem] font-bold  text-[#EA1179]">
          My Skills
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-[20px]">
          {skills.map((item, index) => (
            <SkillCard pic={item.pic} name={item.name} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
