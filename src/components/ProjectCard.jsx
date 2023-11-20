import parse from "html-react-parser";

const ProjectCard = (props) => {
  return (
    <div className="flex flex-wrap justify-center xl:flex-nowrap xl:gap-[100px] text-[white]">
      <a href={props.link} target="_blank" className="bigger">
        <img
          src={props.img}
          className="p-[10px] h-[200px] sm:h-[320px] object-cover"
        />
      </a>
      <div className="flex flex-col justify-between">
        <div className="w-[320px] sm:w-[700px] p-[10px]">
          <a href={props.link} target="_blank" className="w-[100%] ">
            <div className="text-[1.5rem] font-bold  text-[#EA1179]">
              {props.name}
            </div>
          </a>
          <div>{parse(props.desc)}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
