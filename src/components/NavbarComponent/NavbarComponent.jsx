import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoImg from "../../assets/img/logo-portfolio.png";
import DayNightComponent from "./component/DayNightcomponent";
import { Link } from "react-scroll";

const NavbarComponent = () => {
  const offset = -100;

  return (
    <Navbar expand="md" className="navbarAll">
      <Container className="p-0 contNav">
        <Navbar.Brand className="logo ">
          <img src={logoImg} alt="" />
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto justify-content-center navLink">
            <Link
              className="mx-2 px-3"
              to="home"
              smooth={true}
              duration={500}
              offset={offset}
            >
              HOME
            </Link>
            <Link
              className="mx-2 px-3"
              to="skills"
              smooth={true}
              duration={500}
              offset={offset}
            >
              SKILLS
            </Link>
            <Link
              className="mx-2 px-3"
              to="portfolio"
              smooth={true}
              duration={500}
              offset={offset}
            >
              PORTFOLIO
            </Link>
            <Link
              className="mx-2 px-3"
              to="contact"
              smooth={true}
              duration={500}
              offset={offset}
            >
              CONTACT
            </Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex align-items-center btnNav">
          <DayNightComponent />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
