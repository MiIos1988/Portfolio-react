import imgHtml from "../../assets/img/icon/html.png"
import imgCss from "../../assets/img/icon/css.png"
import imgGit from "../../assets/img/icon/git.png"
import imgJavascript from "../../assets/img/icon/javascript.png"
import imgReact from "../../assets/img/icon/react.png"
import imgSass from "../../assets/img/icon/sass.png"
import imgNode from "../../assets/img/icon/node.png"
import imgExpress from "../../assets/img/icon/express.png"
import imgMongo from "../../assets/img/icon/mongoDb.png"
import imgStripe from "../../assets/img/icon/stripe.png"
import imgRedux from "../../assets/img/icon/redux.png"
import imgBootstrap from "../../assets/img/icon/bootstrap.png"
import imgPostman from "../../assets/img/icon/postman.webp"
import imgGitHub from "../../assets/img/icon/gitHub.png"

const SkillsComponent = () => {
  return (
    <div className="container skills">
      <h2 className="skillTitle">Skills & Technologies</h2>
      <p>
        Below you can see my skills and technologies that I use every day. I am
        trying to keep up with the newest trends in the industry and to keep
        learning new skills and technologies as well as improving knowledge in
        existing ones.
      </p>
      <div className="iconSkills  d-flex justify-content-center gap-5 flex-wrap  mt-5">
        <div className="skillSection">
          <div className="icon">
            <img src={imgHtml} alt="" />
          </div>
          <div className="title">
            <p>HTML5</p>
          </div>
        </div>
        <div className="iconSkills">
          <div className="skillSection">
            <div className="icon">
              <img src={imgCss} alt="" />
            </div>
            <div className="title">
              <p>CSS3</p>
            </div>
          </div>
        </div>
        <div className="iconSkills">
          <div className="skillSection">
            <div className="icon">
              <img src={imgJavascript} alt="" />
            </div>
            <div className="title">
              <p>JavaScript</p>
            </div>
          </div>
        </div>
        <div className="iconSkills">
          <div className="skillSection">
            <div className="icon">
              <img src={imgGit} alt="" />
            </div>
            <div className="title">
              <p>Git</p>
            </div>
          </div>
        </div>
        <div className="iconSkills">
          <div className="skillSection">
            <div className="icon">
              <img src={imgGitHub} alt="" />
            </div>
            <div className="title">
              <p>GitHub</p>
            </div>
          </div>
        </div>
        <div className="iconSkills">
          <div className="skillSection">
            <div className="icon">
              <img src={imgReact} alt="" />
            </div>
            <div className="title">
              <p>React JS</p>
            </div>
          </div>
        </div>
        <div className="iconSkills">
          <div className="skillSection">
            <div className="icon">
              <img src={imgRedux} alt="" />
            </div>
            <div className="title">
              <p>Redux</p>
            </div>
          </div>
        </div>
        <div className="iconSkills">
          <div className="skillSection">
            <div className="icon">
              <img src={imgSass} alt="" />
            </div>
            <div className="title">
              <p>SASS</p>
            </div>
          </div>
        </div>
        <div className="iconSkills">
          <div className="skillSection">
            <div className="icon">
              <img src={imgBootstrap} alt="" />
            </div>
            <div className="title">
              <p>Bootstrap</p>
            </div>
          </div>
        </div>
        <div className="iconSkills">
          <div className="skillSection">
            <div className="icon">
              <img src={imgStripe} alt="" />
            </div>
            <div className="title">
              <p>Stripe</p>
            </div>
          </div>
        </div>
        <div className="iconSkills">
          <div className="skillSection">
            <div className="icon">
              <img src={imgNode} alt="" />
            </div>
            <div className="title">
              <p>Node JS</p>
            </div>
          </div>
        </div>
        <div className="iconSkills">
          <div className="skillSection">
            <div className="icon">
              <img src={imgPostman} alt="" />
            </div>
            <div className="title">
              <p>Postman</p>
            </div>
          </div>
        </div>
        <div className="iconSkills">
          <div className="skillSection">
            <div className="icon">
              <img src={imgExpress} alt="" />
            </div>
            <div className="title">
              <p>Express JS</p>
            </div>
          </div>
        </div>
        <div className="iconSkills">
          <div className="skillSection">
            <div className="icon">
              <img src={imgMongo} alt="" />
            </div>
            <div className="title">
              <p>Mongo DB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;
