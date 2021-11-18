import React from "react";
import "../../App.css";
import { Card, Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Image } from "react-bootstrap";
import Adi from "../../../src/assets/images/adidas.png";
import gat from "../../../src/assets/images/gatorade.png";
import under from "../../../src/assets/images/new.png";
import chips from "../../../src/assets/images/frito.png";
import airline from "../../../src/assets/images/american.png";
import network from "../../../src/assets/images/tsn.png";
import "./Sponsors.css";
function Sponsors() {
    return (
        <div className="spo">
            <h1 className="head">Here are our proud sponsors</h1>

            <Container>
                <Row>
                    <Col xs={4} md={4}>
                        {/* <a href="https://www.adidas.com/us">
       <Image className='image'src={Adi} rounded />
       <p className='text'>Adidas</p>
      </a> */}
              <Card className="sponsor-card golden-sponsor-card">
                <Card.Header className="sponsor-card-header">Golden Sponsor</Card.Header>
                            <div className="sponsor-card-image-wrapper">
                                <Card.Img
                                    className="sponsor-card-image"
                                    variant="top"
                                    src={Adi}
                                    rounded
                                />
                            </div>
                            <Card.Body className="sponsor-card-body">
                                <Card.Title>Adidas</Card.Title>
                                <Card.Link href="https://www.adidas.com/us">
                                    Visit Site
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={4} md={4}>
                        <Card className="sponsor-card">
                            <div className="sponsor-card-image-wrapper">
                                <Card.Img
                                    className="sponsor-card-image"
                                    variant="top"
                                    src={gat}
                                    rounded
                                />
                            </div>
                            <Card.Body className="sponsor-card-body">
                                <Card.Title>The Gatorade Company</Card.Title>
                                <Card.Link href="https://www.gatorade.com/">
                                    Visit Site
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={4} md={4}>
                        <Card className="sponsor-card">
                            <div className="sponsor-card-image-wrapper">
                                <Card.Img
                                    className="sponsor-card-image"
                                    variant="top"
                                    src={under}
                                    rounded
                                />
                            </div>
                            <Card.Body className="sponsor-card-body">
                                <Card.Title>Under Armour</Card.Title>
                                <Card.Link href="https://www.underarmour.com/en-us/">
                                    Visit Site
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4} md={4}>
                        <Card className="sponsor-card">
                            <div className="sponsor-card-image-wrapper">
                                <Card.Img
                                    className="sponsor-card-image"
                                    variant="top"
                                    src={chips}
                                    rounded
                                />
                            </div>
                            <Card.Body className="sponsor-card-body">
                                <Card.Title>FritoLay</Card.Title>
                                <Card.Link href="https://www.fritolay.com/">
                                    Visit Site
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={4} md={4}>
                        <Card className="sponsor-card">
                            <div className="sponsor-card-image-wrapper">
                                <Card.Img
                                    className="sponsor-card-image"
                                    variant="top"
                                    src={airline}
                                    rounded
                                />
                            </div>

                            <Card.Body className="sponsor-card-body">
                                <Card.Title>American Airlines</Card.Title>
                                <Card.Link href="https://www.aa.com/homePage.do">
                                    Visit Site
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={4} md={4}>
                        <Card className="sponsor-card">
                            <div className="sponsor-card-image-wrapper">
                                <Card.Img
                                    className="sponsor-card-image"
                                    variant="top"
                                    src={network}
                                    rounded
                                />
                            </div>
                            <Card.Body className="sponsor-card-body">
                                <Card.Title>TSN Network</Card.Title>
                                <Card.Link href="tsn.ca/">Visit Site</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Sponsors;
