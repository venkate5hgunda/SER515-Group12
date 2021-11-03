import React from 'react';
import './Navbar.css';
import {GiSoccerBall} from "react-icons/gi";
import {
  Navbar as BootstrapNavbar,
  Container,
  Nav,
  Button
} from 'react-bootstrap';
import TokenGenerator from '../../components/token-generator/token-generator';
import { IconContext } from 'react-icons/lib';

function Navbar() {


  // const [click, setClick] = useState(false);
  // // const handleClick = () => setClick(!click);
  // // const closeMobileMenu = () => setClick(false);
  // const [button] = useState(true);


  return (
    <ReactNavbar />
  )
}

function ReactNavbar() {
  return (
    <>
      <style type="text/css">
          {`
          .btn-info {
              margin: 5px;
          }
          `}
      </style>
      <BootstrapNavbar bg="dark" variant="dark" expand="lg" className="navbar">
        <Container>
        <BootstrapNavbar.Brand href="/">
            <IconContext.Provider value={{ }}>
              < GiSoccerBall color = "white" size = '4rem' />
            </IconContext.Provider>
          </BootstrapNavbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/"> Home </Nav.Link>
            <Nav.Link href="/about"> About </Nav.Link>
            <Nav.Link href="/teams"> Teams </Nav.Link>
            <Nav.Link href="/schedule"> Schedule </Nav.Link>
            <Nav.Link href="/hotels"> Hotels </Nav.Link>
            <Nav.Link href="/maps"> Maps </Nav.Link>
            <Nav.Link href="/Rules and Regulations"> Rules </Nav.Link>
            <Nav.Link href="/sponsors"> Sponsors </Nav.Link>
            <Nav.Link href="/FAQ"> FAQ </Nav.Link>{'   '}
            
          <TokenGenerator />
          <Button variant='primary'>Sign Up</Button>

            
            
            
            
            {/* <TokenGenerator />{' '}
            <Button variant='info'>Sign Up</Button> */}

          </Nav>
        </Container>
      </BootstrapNavbar>
    </>
  )
}

export default Navbar;