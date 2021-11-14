import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import { Card } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
function News() {
  return (
    <div className='about-containers'>
     <Container>
      <h1>Featured News:</h1>
     <CardGroup>
     <Card>
     <Row>
     <Col>
      
       <Card.Body>
         <Card.Title><a href="https://www.cbssports.com/college-football/news/college-football-games-week-11-michigan-ohio-state-look-to-avoid-upsets-with-big-ten-up-for-grabs/">College football games, Week 11: Michigan, Ohio State look to avoid upsets with Big Ten up for grabs</a></Card.Title>
         <Card.Text>
           The Big Ten is the hottest contested conference down the stretch, and separation could continue Saturday
         </Card.Text>
       </Card.Body>
      </Col>
      <Col>
      
       <Card.Body>
         <Card.Title><a href="https://www.cbssports.com/college-football/news/despite-consistent-criticism-over-targeting-enforcement-college-football-has-limited-paths-forward/">Despite consistent criticism over targeting enforcement, college football has limited paths forward</a></Card.Title>
         <Card.Text>
            More than a decade later, there's still no consensus on how to legislate targeting
         </Card.Text>
       </Card.Body>
      </Col>
      <Col>
      
       <Card.Body>
         <Card.Title><a href="https://www.cbssports.com/college-basketball/news/watch-uc-riverside-stuns-arizona-state-on-70-foot-heave-at-the-buzzer-from-jp-moorman/">WATCH: UC-Riverside stuns Arizona State on 70-foot heave at the buzzer from JP Moorman</a></Card.Title>
         <Card.Text>
            The Sun Devils lost at the buzzer Thursday on a nearly impossible shot
         </Card.Text>
       </Card.Body>
      </Col>
    </Row>
    </Card>
    </CardGroup>
    </Container>
    <br></br>
    <Container>
    <CardGroup>
    <Card>
    <Row>
     <Col>
      
       <Card.Body>
         <Card.Title><a href="https://www.cbssports.com/nfl/news/nfl-insider-notebook-cam-newton-panthers-reunion-a-win-win-plus-rodgers-gets-off-easy-and-week-10-picks/">NFL notebook: Cam Newton-Panthers reunion a win-win, plus Rodgers gets off easy and week</a></Card.Title>
         <Card.Text>
            Jonathan Jones' weekly look inside the NFL Panthers general manager Scott Fitterer
         </Card.Text>
       </Card.Body>
     </Col>
     <Col>
      
       <Card.Body>
         <Card.Title><a href="https://www.sportingnews.com/us/ncaa-football/news/college-gameday-location-schedule-guest-picker-week-11/1n8e1fnkz3t4v1i80nzn7jelpg">Where is ‘College GameDay’ this week? Location, schedule, guest picker for Week 11 on ESPNd</a></Card.Title>
         <Card.Text>
            Break out the Hotty Toddies, Ole Miss fans: "College GameDay" is heading to Oxford, Miss. to preview the Week 11 meeting between No. 15 Ole Miss and No. 11 Texas A&M.
         </Card.Text>
       </Card.Body>
     </Col>
     <Col>
      
       <Card.Body>
         <Card.Title><a href="https://www.detroitnews.com/story/sports/college/university-michigan/2021/11/12/detroit-news-scouting-report-michigan-football-penn-state/6392066001/">Detroit News scouting report: Michigan football at Penn State</a></Card.Title>
         <Card.Text>
            Detroit News Big Ten Football Power Rankings 

         </Card.Text>
       </Card.Body>
     </Col>
    </Row>
    </Card>
    </CardGroup>
    </Container>
    
    
    
   </div>
    )
    }
export default News;