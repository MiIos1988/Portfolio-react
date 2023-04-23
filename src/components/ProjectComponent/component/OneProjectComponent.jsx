import git from "../../../assets/img/icon/githubProject.webp";
import Tilt from "react-parallax-tilt";

const OneProjectComponent = ({ data }) => {
  const { image, title, desc, tags, github, live } = data;

  return (
    
      <Tilt className="product p-5 mt-5 d-flex flex-column">
        <a href={live} target="_blank">
          <img className="prImg" src={image} alt="" />
        </a>

        <h2 className="title">{title}</h2>

        <p className="desc">{desc}</p>
        <div className="blockTags mt-auto">
          <div className=" d-flex flex-wrap gap-3">
            {tags.map((el, index) => {
              return (
                <div key={index} className="tags p-2">
                  {el}
                </div>
              );
            })}
          </div>
        </div>
        <a href={github} target="_blank" className="git">
          <img src={git} />
        </a>
      </Tilt>
    
  );
};

export default OneProjectComponent;
