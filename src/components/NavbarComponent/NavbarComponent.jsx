import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = () => {
    return (
        <Navbar expand="md" className="navbarAll">
            <Container>
                <Navbar.Brand className="logo active" href="#home">Sudimac Milos</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav ">
                    <Nav className="ms-auto justify-content-center navLink">
                        <Nav.Link className="mx-2 px-3 active" href="#home" >HOME</Nav.Link>
                        <Nav.Link className="mx-2 px-3" href="#link">ABOUT</Nav.Link>
                        <Nav.Link className="mx-2 px-3" href="#link">SKILLS</Nav.Link>
                        <Nav.Link className="mx-2 px-3" href="#link">PORTFOLIO</Nav.Link>
                        <Nav.Link className="mx-2 px-3" href="#link">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent