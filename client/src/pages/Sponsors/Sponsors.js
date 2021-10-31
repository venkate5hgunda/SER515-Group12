import React from 'react'
import '../../App.css';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import './Sponsors.css';
function Sponsors() {
 return (
  <div className='spo'>
   <h1 className='head'>Here are our proud sponsors</h1>



  <Container>
   <Row>
    <Col xs={4} md={4}>
      
       <p className='text'>Adidas</p>
      
    </Col>
    <Col xs={4} md={4}>
      
       <p className='text'>The Gatorade Company</p>
      
    </Col>
    <Col xs={4} md={4}>
      
       <p className='text'>Under Armour</p>
      
    </Col>
   </Row>
   <Row>
    <Col xs={4} md={4}>
      
       <p className='text'>Frito-Lays</p>
     
    </Col>
    <Col xs={4} md={4}>
      
       <p className='text'>American Airlines</p>
      
    </Col>
    <Col xs={4} md={4}>
      
       <p className='text'>TSN Network</p>
      
    </Col>
   </Row>
   
  </Container>
  </div>
 )
}

export default Sponsors;