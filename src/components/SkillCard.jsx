import PropTypes from "prop-types";

const SkillCard = (props) => {
  SkillCard.propTypes = {
    pic: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };

  return (
    <div className="bigger flex text-[white] items-center justify-evenly p-[10px] bg-[#5e6eff] w-[150px] sm:w-[200px] 2xl:w-[250px] text-[0.8rem] sm:text-[1rem]  h-[90px] rounded-[30px] font-bold">
      <img src={props.pic} alt={props.pic} className="h-[30px] sm:h-[60px]" />
      {props.name}
    </div>
  );
};

export default SkillCard;
