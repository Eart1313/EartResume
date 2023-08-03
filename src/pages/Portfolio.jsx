import projectImg from "../assets/projectImg.png";

export default function Portfolio() {
  return (
    <>
      <div
        id="portfolio"
        className="flex items-center justify-center text-5xl font-bold my-[100px] p-[50px] text-secondary">
        Portfolio
      </div>
      <div className="flex justify-evenly ">
        <div>
          <div>
            <img
              src={projectImg}
              className="w-[350px] h-[350px]  rounded-[50px]"
            />
            <div className="text-2xl font-bold text-center py-3 text-[#EA1179] m-5">
              E-commerce website
            </div>
          </div>
        </div>
        <div>
          <div>
            <img
              src={projectImg}
              className="w-[350px] h-[350px] rounded-[50px]"
            />
            <div className="text-2xl font-bold text-center py-3 text-[#EA1179] m-5">
              To-do list app
            </div>
          </div>
        </div>
        <div>
          <div>
            <img
              src={projectImg}
              className="w-[350px] h-[350px] rounded-[50px]"
            />
            <div className="text-2xl font-bold text-center py-3 text-[#EA1179] m-5">
              Web game app
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-[60px]">
        <button className="bg-primary w-[180px] h-[65px] rounded-full text-xl font-bold text-[#fff]">
          View more...
        </button>
      </div>
    </>
  );
}
