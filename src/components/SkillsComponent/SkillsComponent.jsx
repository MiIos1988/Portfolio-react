import OneSkillComponent from "./components/OneSkillComponent";
import dataSkills from "../../constants/icon";

const SkillsComponent = () => {
  return (
    <div id="skills" className="container skills">
      <h2 className="skillTitle">Skills & Technologies</h2>
      <p className="mb-2">
        In extension, you can see the skills and technologies that I use every
        day. I am trying to keep up with the newest trends in the industry and
        to keep learning new skills and technologies as well as improving
        knowledge in existing ones.
      </p>
      <div className="iconSkills  d-flex justify-content-center gap-5 flex-wrap  mt-5">
        {dataSkills.map((el, index) => {
          return (
            <OneSkillComponent key={index} title={el.title} img={el.image} />
          );
        })}
      </div>
    </div>
  );
};

export default SkillsComponent;
