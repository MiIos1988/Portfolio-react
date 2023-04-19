import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoImg from "../../assets/img/logo-portfolio.png";
import DayNightComponent from "./component/DayNightcomponent";

const NavbarComponent = () => {
  return (
    <Navbar expand="md" className="navbarAll">
      <Container>
        <Navbar.Brand className="logo " href="#home">
          <img src={logoImg} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto justify-content-center navLink">
            <Nav.Link className="mx-2 px-3 " href="#home">
              HOME
            </Nav.Link>
            <Nav.Link className="mx-2 px-3" href="#link">
              ABOUT
            </Nav.Link>
            <Nav.Link className="mx-2 px-3" href="#link">
              SKILLS
            </Nav.Link>
            <Nav.Link className="mx-2 px-3" href="#link">
              PORTFOLIO
            </Nav.Link>
            <Nav.Link className="mx-2 px-3" href="#link">
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <DayNightComponent/>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
