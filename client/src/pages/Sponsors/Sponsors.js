import React from 'react'
import '../../App.css';
import { Container } from 'react-bootstrap';
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
function Sponsors() {
 return (
  <div className='spo'>
   <h1 className='head'>Here are our proud sponsors</h1>



  <Container>
   <Row>
    <Col xs={4} md={4}>
       <Image className='image'src={Adi} rounded />
       <p className='text'>Adidas</p>
      
    </Col>
    <Col xs={4} md={4}>
       <Image className='image'src={gat} rounded />
       <p className='text'>The Gatorade Company</p>
      
    </Col>
    <Col xs={4} md={4}>
       <Image className='image'src={under} rounded />
       <p className='text'>Under Armour</p>
      
    </Col>
   </Row>
   <Row>
    <Col xs={4} md={4}>
       <Image className='image'src={chips} rounded />
       <p className='text'>Frito-Lays</p>
     
    </Col>
    <Col xs={4} md={4}>
       <Image className='image'src={airline} rounded /> 
       <p className='text'>American Airlines</p>
      
    </Col>
    <Col xs={4} md={4}>
       <Image className='image'src={network} rounded />
       <p className='text'>TSN Network</p>
      
    </Col>
   </Row>
   
  </Container>
  </div>
 )
}

export default Sponsors;