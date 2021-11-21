import React, { useRef, useState } from "react"
import '../../App.css';
import { Card, Container } from "react-bootstrap";
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import Adi from '../../../src/assets/images/adidas.png';
import gat from '../../../src/assets/images/gatorade.png';
import under from '../../../src/assets/images/new.png';
import chips from '../../../src/assets/images/frito.png';
import airline from '../../../src/assets/images/american.png';
import network from '../../../src/assets/images/tsn.png';
import './Sponsors.css';
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

function Sponsors() {

  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()
    
  async function handleLogout() {
      setError("")
    
      try {
        await logout()
        history.push("/login")
      } catch {
        setError("Failed to log out")
      }
    }


 return (
  <div className='spo'>
   <h1 className='head'>Here are our proud sponsors</h1>



  <Container>
   <Row>
    <Col xs={4} md={4}>
      <a href="https://www.adidas.com/us">
       <Image className='image'src={Adi} rounded />
       <p className='text'>Adidas</p>
      </a>
      
    </Col>
    <Col xs={4} md={4}>
      <a href="https://www.gatorade.com/">
       <Image className='image'src={gat} rounded />
       <p className='text'>The Gatorade Company</p>
      </a>
    </Col>
    <Col xs={4} md={4}>
      <a href="https://www.underarmour.com/en-us/">
       <Image className='image'src={under} rounded />
       <p className='text'>Under Armour</p>
      </a>
      
    </Col>
   </Row>
   <Row>
    <Col xs={4} md={4}>
      <a href="https://www.fritolay.com/">
       <Image className='image'src={chips} rounded />
       <p className='text'>Frito-Lays</p>
      </a>
     
    </Col>
    <Col xs={4} md={4}>
      <a href="https://www.aa.com/homePage.do">
       <Image className='image'src={airline} rounded /> 
       <p className='text'>American Airlines</p>
      </a>
      
    </Col>
    <Col xs={4} md={4}>
      <a href="tsn.ca/">
       <Image className='image'src={network} rounded />
       <p className='text'>TSN Network</p>
      </a>
      
    </Col>
   </Row>
   
  </Container>
  </div>
 )
}

export default Sponsors;