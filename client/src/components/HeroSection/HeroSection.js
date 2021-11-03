import React from 'react';
import './HeroSection.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../assets/images/img-home.jpg'
import img2 from '../../assets/images/img-home2.jpg'
import img3 from '../../assets/images/img-home3.jpg'
import img4 from '../../assets/images/img-home4.jpg'
import { IconButton } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
   <IconButton
      style={{ zIndex:1,background: "white",position:'absolute',top:'50%',left:'5px'}}
      onClick={onClick}>
       <KeyboardArrowLeftIcon style={{color:"black",fontSize:"30px",fontWeight:"700"}}/>
   </IconButton>
  );
}
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
      <IconButton
      style={{zIndex:1, background: "white",position:'absolute',top:'50%',right:'5px'}}
      onClick={onClick}>
      <KeyboardArrowRightIcon style={{color:"black",fontSize:"30px",fontWeight:"700"}}/>
  </IconButton>
  );
}

function HeroSection() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
  };
  return (
    <div className='hero-container'>
      <p>ARE YOU READY FOR THE BIGGEST TOURNAMENT EVER!!</p>
      <Slider {...settings}>
          <div>
            <img alt="Carousel" src={img1} style={{height:"100vh", width:"100%"}}/>
          </div>
          <div>
            <img alt="Carousel 1" src={img2} style={{height:"100vh", width:"100%"}}/>
          </div>
          <div>
            <img alt="Carousel 2" src={img3} style={{height:"100vh", width:"100%"}}/>
          </div>  <div>
            <img alt="Carousel 3" src={img4} style={{height:"100vh", width:"100%"}}/>
          </div>
      
        </Slider>
    </div>
  );
}

export default HeroSection