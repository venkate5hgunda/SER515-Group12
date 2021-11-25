import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Images from '../../assets/images/image.jpg';
import cbss from '../../assets/images/cbs.jpg';
import Michi from '../../assets/images/Michigan.jpg';
import Det from '../../assets/images/detroit.jpg';
import Ari from '../../assets/images/arizona.jpg';
import cats from '../../assets/images/cam.jpg';
import { Card } from 'react-bootstrap';
import './News.css';
function News() { 
  return (
    <div className='spo'>
   <h1 className='heads'>Featured News:</h1>
            <Container>
              <Row>
                <Col xs={4} md={4}>
                  <Card className="sponsor-card">
                    <Card.Body className="sponsor-card-body">
                      <Card.Img variant="top" src={Images} />
                        <Card.Title><a style={{ textDecoration: 'none',  color: 'black'}} href="https://www.cbssports.com/college-football/news/college-football-games-week-11-michigan-ohio-state-look-to-avoid-upsets-with-big-ten-up-for-grabs/">College football games, Week 11: Michigan, Ohio State look to avoid upsets with Big Ten up for grabs</a></Card.Title>
                        <Card.Text>The Big Ten is the hottest contested conference down the stretch</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={4} md={4}>
                  <Card className="sponsor-card">
                    <Card.Body className="sponsor-card-body">
                      <Card.Img variant="top" src={cbss} />
                        <Card.Title><a style={{ textDecoration: 'none', color: 'black' }} href="https://www.cbssports.com/college-football/news/despite-consistent-criticism-over-targeting-enforcement-college-football-has-limited-paths-forward/">Despite consistent criticism over targeting enforcement, college football has limited paths forward</a></Card.Title>
                        <Card.Text>More than a decade later, there's still no consensus on how to legislate targeting</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={4} md={4}>
                  <Card className="sponsor-card">
                    <Card.Body className="sponsor-card-body">
                      <Card.Img variant="top" src={Ari} />
                        <Card.Title><a style={{ textDecoration: 'none', color: 'black' }} href="https://www.cbssports.com/college-basketball/news/watch-uc-riverside-stuns-arizona-state-on-70-foot-heave-at-the-buzzer-from-jp-moorman/">WATCH: UC-Riverside stuns Arizona State on 70-foot heave at the buzzer from JP Moorman</a></Card.Title>
                        <Card.Text>The Sun Devils lost at the buzzer Thursday on a nearly impossible shot.UC-Riverside was picked to finish third in the Big West</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={4} md={4}>
                  <Card className="sponsor-card">
                    <Card.Body className="sponsor-card-body">
                      <Card.Img variant="top" src={cats} />
                        <Card.Title><a style={{ textDecoration: 'none', color: 'black' }} href="https://www.cbssports.com/nfl/news/nfl-insider-notebook-cam-newton-panthers-reunion-a-win-win-plus-rodgers-gets-off-easy-and-week-10-picks/">NFL notebook: Cam Newton-Panthers reunion a win-win, plus Rodgers gets off easy and week</a></Card.Title>
                        <Card.Text>Jonathan Jones' weekly look inside the NFL Panthers general manager Scott Fitterer</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={4} md={4}>
                  <Card className="sponsor-card">
                    <Card.Body className="sponsor-card-body">
                      <Card.Img variant="top" src={Det} />
                        <Card.Title><a style={{ textDecoration: 'none', color: 'black' }} href="https://www.detroitnews.com/story/sports/college/university-michigan/2021/11/12/detroit-news-scouting-report-michigan-football-penn-state/6392066001/">Detroit News scouting report: Michigan football at Penn State</a></Card.Title>
                        <Card.Text>Detroit News Big Ten Football Power Rankings </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={4} md={4}>
                  <Card className="sponsor-card">
                    <Card.Body className="sponsor-card-body">
                      <Card.Img variant="top" src={Michi} />
                        <Card.Title><a style={{ textDecoration: 'none', color: 'black' }} href="https://www.detroitnews.com/story/sports/college/university-michigan/2021/11/12/detroit-news-scouting-report-michigan-football-penn-state/6392066001/">Where is ‘College GameDay’ this week? Location, schedule, guest picker for Week 11 on ESPN</a></Card.Title>
                        <Card.Text>Break out the Ole Miss fans:"College GameDay" is heading to Oxford</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

              </Row>
            </Container>
    
    
    
   </div>
    )
    }
export default News;