import ProjectCard from "./ProjectCard";
import projects from "../data/projects.js";
import { useState } from "react";

export default function Portfolio() {
  const [viewall, setViewall] = useState(false);
  return (
    <>
      <div
        id="portfolio"
        className=" flex items-center justify-center  text-[2rem] 2xl:text-3xl font-bold my-[50px] p-[50px] text-secondary">
        My Projects
      </div>
      <div className="flex flex-wrap justify-center gap-[100px] items-center">
        {projects
          .map((item, index) => (
            <ProjectCard
              img={item.img}
              name={item.name}
              desc={item.desc}
              link={item.link}
              key={index}
            />
          ))
          .slice(0, viewall === false ? 3 : projects.length)}
        {viewall && (
          <>
            <div className="text-[white] text-[1.5rem] font-bold">
              {`What's next?`}
            </div>
            <div className="text-[white] text-[1rem] font-bold">
              My next goal is to develop an accessible e-commerce website with
              Vue.js, aiming to deepen my understanding of frontend frameworks.
              This project is expected to boost my expertise in Vue.js and offer
              valuable experience in e-commerce website development.
            </div>
            <img
              className="w-[100px]"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/555px-Vue.js_Logo_2.svg.png"
            />
          </>
        )}
      </div>
      <div className="flex items-center justify-center my-[100px]">
        <a href={viewall === false ? "#portfolio" : undefined}>
          <button
            onClick={() => setViewall(!viewall)}
            className="bg-primary w-[180px] hover:bg-[#c13791ff] h-[65px] rounded-full font-bold text-[white]">
            {viewall ? " Show less" : " View all"}
          </button>
        </a>
      </div>
    </>
  );
}
