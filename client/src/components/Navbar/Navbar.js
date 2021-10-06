import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Button } from '../Button/Button';
import './Navbar.css';
import {FaAdobe} from "react-icons/fa";
import TokenGenerator from '../token-generator/token-generator';

function Navbar() {
 const [click, setClick] = useState(false);
 const handleClick = () => setClick(!click);
 const closeMobileMenu = () => setClick(false);
 const [button] = useState(true) ;
 
//  const showButton = () => {
//   if (window.innerWidth <= 960){
//     setButton(false);
//   } else{
//     setButton(true);
//   }
//  };

 
 
 return (
  <>
    <nav className='navbar'>
     <div className='navbar-container'>
      
      <Link to="/" className="navbar-logo">
       STW <FaAdobe color='red' size='3rem'/>
      </Link>
      <div className="menu-icon" onClick={handleClick}>
       <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
       <li className='nav-item'>
        <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
       </li>
       <li className='nav-item'>
        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>About Us</Link>
       </li>
       <li className='nav-item'>
        <Link to='/teams' className='nav-links' onClick={closeMobileMenu}>Teams</Link>
       </li>
        <li className='nav-item'>
        <Link to='/players' className='nav-links' onClick={closeMobileMenu}>Players</Link>
       </li>
      </ul>
      <TokenGenerator />
      {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
     </div>
    </nav>
  </>
 )
}

export default Navbar