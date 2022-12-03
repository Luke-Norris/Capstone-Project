import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Grid } from '@mui/material';

const NewNavbar = () => {
  return (
    <Navbar variant="light" expand="lg" fixed="top" style={{backgroundColor:'blue'}}>
      <Container>
        <Navbar.Brand href="#home" style={{color:'white'}}>Sm4rt Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/floorplan" style={{color:'white'}}>Floorplan</Nav.Link>
            {/* <Nav.Link href="/metrics" style={{color:'white'}}>Metrics</Nav.Link> */}
            <Grid style={{backgroundColor:'white'}}>
              <NavDropdown title="Metrics" id="basic-nav-dropdown">
                <NavDropdown.Item href="/about">Electric</NavDropdown.Item>
                <NavDropdown.Item href="/">
                  HVAC
                </NavDropdown.Item>
                <NavDropdown.Item href="/entry">Water</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://github.com/Luke-Norris/Capstone-Project">
                  Github
                </NavDropdown.Item>
              </NavDropdown>
            </Grid>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NewNavbar;