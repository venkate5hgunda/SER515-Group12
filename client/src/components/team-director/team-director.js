import { Button, Card, Image, ListGroup, Row, Col, Modal } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { useState } from 'react';
import React from 'react';

export default function TeamDirectorProfile() {
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const randomImages = [
        "https://wallpaperaccess.com/full/266770.jpg",
        "https://www.gannett-cdn.com/presto/2020/03/17/USAT/c0eff9ec-e0e4-42db-b308-f748933229ee-XXX_ThinkstockPhotos-200460053-001.jpg?crop=1170%2C658%2Cx292%2Cy120&width=1200",
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/funny-dog-captions-1563456605.jpg",
        "https://images.wsj.net/im-140539?width=1280&size=1.33333333",
        "https://www.beano.com/wp-content/uploads/legacy/19310_iStock-680810342.jpg?quality=76&strip=all&w=887",
        "https://images.ctfassets.net/f60q1anpxzid/asset-a29997d1c9681bbee49490641bfbadb2/c654015aee54ea4b71959f31a0078671/cute-dog-names-1200.jpg?w=1800&q=50&fm=jpg&fl=progressive",
        "https://cdn-bkdmc.nitrocdn.com/RkjNGwpDZoBEGpthMfulQpXqdSVdHfAt/assets/static/optimized/blog/wp-content/uploads/2016/02/be96d2755474ada1ac340fa04d8f9d86.cute-dog-dogs-1024x768.jpg",
        "https://parade.com/wp-content/uploads/2021/02/cutest-dog-breeds.jpg"
    ]
    const listGroupButtonStyle = {
        "width": "100%"
    }

    const [showUnderConstruction, setShowUnderConstruction] = useState(false);

    const handlePopUpOpen = () => {
        setShowUnderConstruction(true);
    }

    const handlePopUpClose = () => {
        setShowUnderConstruction(false);
    }

    if(cookies["rolename"] === "team-director") {
        return (
            <>
                <style type="text/css">
                    {`
                        .profile-card {
                            margin: 20px;
                            align-items: center;
                        };
                        .profile-card-body {
                            padding: 10px;
                            align-items: center;
                        };
                        .profile-card-body-button {
                            margin: 5px;
                            width: 100%;
                        };
                        .profile-card-actions {
                            margin: 20px;
                            align-items: center;
                        };
                    `}
                </style>
                <Card className="profile-card">
                    <Card.Body className="profile-card-body">
                        <h3>Hello, Team Director </h3>
                    </Card.Body>
                </Card>
                <Card className="profile-card-actions" style={{ "margin": "20px" }}>
                    <Card.Header as="h5">Here's a list of things you can do: </Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Row>
                                <Col md={3}>
                                    <Button className="profile-card-body-button" variant="primary" style={listGroupButtonStyle} onClick={handlePopUpOpen}>Manage My Profile</Button>
                                </Col>
                                <Col md={9}>
                                    <label>Edit/change your Profile, update contact Information, register as a host coach</label>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col md={3}>
                                    <Button className="profile-card-body-button" variant="secondary" style={listGroupButtonStyle} onClick={handlePopUpOpen}>Manage Team/Players</Button>
                                </Col>
                                <Col md={9}>
                                    <label>Add/Edit the players of team, change the starting XI, manage bench warmers, maintain player stats</label>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col md={3}>
                                    <Button className="profile-card-body-button" variant="info" style={listGroupButtonStyle} onClick={handlePopUpOpen}>View/Manage Matches</Button>
                                </Col>
                                <Col md={9}>
                                    <label>You can view your past matches with their results, request a reshchedule of an upcoming match, and view the reschedule requests status</label>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col md={3}>
                                <Button className="profile-card-body-button" variant="warning" style={listGroupButtonStyle} onClick={handlePopUpOpen}>Raise/Appeal/View Game Decisions</Button>
                                </Col>
                                <Col md={9}>
                                    <label>Raise an Appeal if unsatisfied with a referee decision during the game, manage those appeals, and view the status of the appeals</label>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col md={3}>
                                <Button className="profile-card-body-button" variant="danger" style={listGroupButtonStyle} onClick={handlePopUpOpen}>Withdraw from Tournament</Button>
                                </Col>
                                <Col md={9}>
                                    <label>Due to unforeseen circumstances, if you need one of your teams to drop out of tournament, fill this form to initiate the process</label>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col md={3}>
                                <Button className="profile-card-body-button" variant="success" style={listGroupButtonStyle} onClick={handlePopUpOpen}>Contact Team/Tournament Director</Button>
                                </Col>
                                <Col md={9}>
                                    <label>For any misc. queries/questions, fill this query form which will be reviewed by Team Directior and can be escalated to Tournament Director</label>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
                <Modal show={showUnderConstruction} onHide={handlePopUpClose} backdrop="static" keyboard={false}>
                    <style type="text/css">
                        {`
                            .coming-soon-popup-text {
                                text-align: center;
                                background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);   -webkit-background-clip: text;
                                color: transparent;
                                font-size: 50px;
                            }
                        `}
                    </style>
                    <Modal.Header closeButton>
                        <Modal.Title>This feature is under construction...</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Image src="https://cdn.pixabay.com/photo/2017/06/16/07/26/under-construction-2408062_960_720.png" fluid />
                        <p> </p>
                        <p> </p>
                        <h5 className="coming-soon-popup-text">Coming Soon !!!</h5>
                    </Modal.Body>
                </Modal>
            </>
        )
    } else {
        return (
            <>
                <style type="text/css">
                    {`
                        .profile-card {
                            margin: 20px;
                            align-items: center;
                        };
                        .profile-card-body {
                            padding: 10px;
                        };
                        .profile-card-image {
                            max-width: 60%;
                            height: auto;
                        }
                    `}
                </style>
                <Card className="profile-card">
                    <Card.Body className="profile-card-body">
                        <h4>Hello, you're not logged in. Please login to view your profile. Go to <a href='/login'>Login Page</a> from here.</h4>
                    </Card.Body>
                </Card>
                <Card className="profile-card">
                    <Card.Body><h5>{"Here's a picture to make your day a tiny bit brighter !!!"}</h5></Card.Body>
                </Card>
                <Card className="profile-card">
                    <Card.Img variant="top" className="profile-card-image" src={randomImages[Math.floor(Math.random() * randomImages.length)]} />
                </Card>
            </>
        )
    }
    
}