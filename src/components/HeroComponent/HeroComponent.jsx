import heroImg from "../../assets/img/hero-img.png";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { BiDownload } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

import "animate.css";

const HeroComponent = () => {
  return (
    <div id="home" className="hero d-flex container justify-align-content-between gap-5">
      <div className=" heroTitle d-flex flex-column gap-3 justify-content-center">
        <h2>
          <span className="mb-5 hello">Hello,</span>
          <br />I Am Milos Sudimac
        </h2>
        <h3 className="animate__flipInX">Web Developer</h3>
        <p>
          To work in a challenging environment, which maintains high
          professional standards, fosters personal growth, provides an
          opportunity for continuous learning and expects quality results. And
          to utilize my knowledge and skills in the best possible way for the
          fulfillment of organizational goals.
        </p>
        <button className="downloadCv btnColor">
          DOWNLOAD CV{" "}
          <BiDownload className="animate__animated animate__flash animate__infinite animate__slow" />
        </button>
        <div className="iconSocial">
          <div>

          <a href="https://github.com/MiIos1988" target="_blank">
            <BsGithub />
          </a>
          <a href="https://github.com/MiIos1988" target="_blank">
            <BsLinkedin />
          </a>
          </div>
        </div>


      </div>
      <div className="d-flex justify-content-center">
        <div className="heroDiv d-flex align-items-center justify-content-center">
          <img src={heroImg} alt="" />
          <ul className="heroIcon">
            <li className="nodeJsIcon ">
              <FaNodeJs className="rotate" />
            </li>
            <li className="reactIcon ">
              <FaReact className="rotate" />
            </li>
            <li className="expressIcon ">
              <SiExpress className="rotate" />
            </li>
            <li className="mongoIcon ">
              <DiMongodb className="rotate" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
