import React from 'react';
import ReactPlayer from 'react-player/youtube'
import './Videos.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
function Videos () {
 return (
  <div className='spo'>
   <h1 className='heads'>Featured Videos:</h1>
            <Container>
              <Row>
                <Col xs={6} md={6}>
                  <Card className="sponsor-card">
                    <Card.Body className="sponsor-card-body">
                      <ReactPlayer
                       url='https://www.youtube.com/watch?v=dg3EB-nRGzc'
                       width="170%"
                       controls={true}
                       muted={true}
                       config={{
                         youtube: {
                           playerVars: { showinfo: 1 }
                         },
                         
                       }}
                      />
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6} md={6}>
                  <Card className="sponsor-card">
                    <Card.Body className="sponsor-card-body">
                      <ReactPlayer
                       url='https://www.youtube.com/watch?v=dcr9sCyu7jw'
                       width="170%"
                       controls={true}
                       muted={true}
                       config={{
                         youtube: {
                           playerVars: { showinfo: 1 }
                         },
                       }}
                      />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col xs={6} md={6}>
                  <Card className="sponsor-card">
                    <Card.Body className="sponsor-card-body">
                      <ReactPlayer
                       url='https://www.youtube.com/watch?v=n239vyFURoI'
                       width="170%"
                       controls={true}
                       muted={true}
                       config={{
                         youtube: {
                           playerVars: { showinfo: 1 }
                         },
                         
                       }}
                      />
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6} md={6}>
                  <Card className="sponsor-card">
                    <Card.Body className="sponsor-card-body">
                      <ReactPlayer
                       url='https://www.youtube.com/watch?v=BUHlZq4vgyM'
                       width="170%"
                       controls={true}
                       muted={true}
                       config={{
                         youtube: {
                           playerVars: { showinfo: 1 }
                         },
                       }}
                      />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
         </div>
 )
}
export default Videos;