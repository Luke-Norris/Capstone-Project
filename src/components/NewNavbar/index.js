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
            <Nav.Link href="/metrics" style={{color:'white'}}>Metrics</Nav.Link>
            <Grid style={{backgroundColor:'white'}}>
              <NavDropdown title="Learn More" id="basic-nav-dropdown">
                <NavDropdown.Item href="/about">About the creators</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
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