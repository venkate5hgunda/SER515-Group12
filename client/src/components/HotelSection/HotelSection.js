import React from 'react';
import './HotelSection.css';
import { Button } from 'react-bootstrap';

function HotelSection() {
  return (
    <div className='category-container hotel-container'>
        <div className="faq-title category-title ">
             Requesting/Finding Hotels for the 2021 STW
        </div>
        <div className="hotel-text">
            <p> Your team is required to book hotel rooms using the hotels only listed below to participate in the Classic. Teams not staying at one or more of these properties, will not be considered for acceptance to the tournament.
            </p>
            <p>While you are free to select any hotel property you wish, you will be asked to VERIFY your rooming arrangements upon acceptance AND when you register your team on Friday night. The Warrior Soccer Club and the Warrior Soccer Classic organization assumes no liability by its endorsement of a particular hotel.    
            </p>
        </div> 
        <div className="hotel-button">
          <Button variant = 'primary' size = 'lg' href = "https://www.google.com/travel/hotels/Tempe" > Book Hotel </Button>
        </div>
        <div className="hotel-text">
            <p style={{fontWeight:"bold"}}>When you click on the Hotel Booking button above, you will be redirected to a third-party hotel booking service and will no longer be on the official adidas Warrior Fall Classic web site. Any transactions conducted on that site are between you and the hotel booking service.</p>
        </div>
    </div>
  );
}

export default HotelSection;