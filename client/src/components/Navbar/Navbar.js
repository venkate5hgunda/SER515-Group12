import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button';
import './Navbar.css'
import { FaAdobe } from "react-icons/fa";
import {GiSoccerBall} from "react-icons/gi";
import {
  ButtonGroup,
  Navbar as BootstrapNavbar,
  Container,
  Nav
} from 'react-bootstrap';
import TokenGenerator from '../../components/token-generator/token-generator';

function Navbar() {

 const [click, setClick] = useState(false);
 const handleClick = () => setClick(!click);
 const closeMobileMenu = () => setClick(false);
 const [button] = useState(true) ;

  return (
    // <>
    //   <nav className='navbar'>
    //     <div className='navbar-container'>
    //       <Link to="/" className="navbar-logo">
    //         STW
    //         {<FaAdobe color='red' size='3rem'/>}
    //       </Link>
    //       <div className="menu-icon" onClick={handleClick}>
    //         <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
    //       </div>
    //       <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
    //         <li className='nav-item'>
    //           <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
    //         </li>
    //         <li className='nav-item'>
    //           <Link to='/about' className='nav-links' onClick={closeMobileMenu}>About Us</Link>
    //         </li>
    //         <li className='nav-item'>
    //           <Link to='/teams' className='nav-links' onClick={closeMobileMenu}>Teams</Link>
    //         </li>
    //         <li className='nav-item'>
    //           <Link to='/hotels' className='nav-links' onClick={closeMobileMenu}>Hotels</Link>
    //         </li>
    //         <li className='nav-item'>
    //           <Link to='/sponsers' className='nav-links' onClick={closeMobileMenu}>Sponsors</Link>
    //         </li>
    //         <li className='nav-item'>
    //           <Link to='/Rules and Regulations' className='nav-links' onClick={closeMobileMenu}>Rules</Link>
    //         </li>
    //         <li className='nav-item'>
    //           <Link to='/FAQ' className='nav-links' onClick={closeMobileMenu}>FAQ</Link>
    //         </li>
    //       </ul>
    //       {/* <ButtonGroup className="me-2" aria-label="Invite Generation Button Group">
    //         <TokenGenerator />
    //       </ButtonGroup> */}
    //       {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
    //     </div>
    //   </nav>
    // </>
    <ReactNavbar />
  )
}

function ReactNavbar() {
  return (
      <BootstrapNavbar bg="dark" variant="dark" expand="lg" className="navbar">
        <Container>
          <BootstrapNavbar.Brand href = "#" >
            <GiSoccerBall color='red' size='3rem'/>
          </BootstrapNavbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/"> Home </Nav.Link>
            <Nav.Link href="/about"> About </Nav.Link>
            <Nav.Link href="/teams"> Teams </Nav.Link>
            <Nav.Link href="/hotels"> Hotels </Nav.Link>
            <Nav.Link href="/sponsers"> Sponsors </Nav.Link>
            <Nav.Link href="/Rules and Regulations"> Rules </Nav.Link>
            <Nav.Link href="/FAQ"> FAQ </Nav.Link>
            <TokenGenerator />
          </Nav>
        </Container>
      </BootstrapNavbar>
  )
}

export default Navbar
