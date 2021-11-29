import React from 'react';
// import './Navbar.css';
import { GiSoccerBall } from "react-icons/gi";
import { FaBars } from "react-icons/fa";
import {
  Navbar as BootstrapNavbar,
  Container,
  Nav,
  Button
} from 'react-bootstrap';
import TokenGenerator from '../../components/token-generator/token-generator';
import { IconContext } from 'react-icons/lib';
import Logout from '../../pages/Login/Logout';
import { useCookies } from 'react-cookie';

function Navbar({toggleDrawer}) {
  return (
    <ReactNavbar toggleDrawer={toggleDrawer} />
  )
}

function ReactNavbar({toggleDrawer}) {
  const [cookies] = useCookies(['user']);
  console.log(cookies["username"]);
  console.log(cookies["rolename"] === "tournament-director");
  return (
    <>
      <style type="text/css">
          {`
          .sign-up-btn {
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
            <Nav.Link href="/search-games"> Search </Nav.Link>
            <Nav.Link href="/schedule"> Schedule </Nav.Link>
            <Nav.Link href="/display-result"> Results </Nav.Link>
            <Nav.Link href="/hotels"> Hotels </Nav.Link>
            <Nav.Link href="/maps"> Maps </Nav.Link>
            <Nav.Link href="/Rules and Regulations"> Rules </Nav.Link>
            <Nav.Link href="/application-forms">Apply</Nav.Link>
            <Nav.Link href="/sponsors"> Sponsors </Nav.Link>
            {/* {cookies["rolename"] === "tournament-director" ? <Nav.Link href="/display-result">Edit Result</Nav.Link>: ""} */}
            <Nav.Link onClick={()=>toggleDrawer(true)}> Menu < FaBars style={{"color": "rgba(255,255,255,.55)"}} size = '1rem' /> </Nav.Link>
            <TokenGenerator />
            <Logout />
          </Nav>
        </Container>
      </BootstrapNavbar>
    </>
  )
}

export default Navbar;