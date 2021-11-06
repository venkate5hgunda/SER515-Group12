import React, { useState } from 'react';
import { Form, Col, Row, OverlayTrigger, Button, Tooltip, Card } from 'react-bootstrap';
import { GrInfo } from 'react-icons/gr';
import './team-registration.css';

// DIVISION [DONE]
// TEAM NAME [DONE]
// GENDER AND AGE GROUP [DONE]
// COACH NAME [DONE]
// HOME LOCATION [DONE]
// PLAYERS NAME AND AGE [NOT NEEDED]
// REF: http://warriorclassic.com/cgi-bin/apply.pl#
// TODO :: From -> (Verification, Submission and Payment) to the END

export default class TeamRegistration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            divisions: {}
        }
    }

    async componentDidMount() {
        let divisionsData = await getDivisions();
        this.setState({ divisions: divisionsData });
    }

    render() {
        return (
            <div>
                <RegistrationForm divisions={this.state.divisions} />
            </div>
        )
    }
}

// Root Function for Form
function RegistrationForm(divisionsData) {

    return (
        <Form>
            <Card className="tr-form-card">
                <Card.Header>
                    <Card.Title className="tr-form-card-header-title">
                        <h3>TEAM REGISTRATION APPLICATION</h3>
                    </Card.Title>
                </Card.Header>
                <Card.Body className="tr-form-card-body">
                    <Row className="tr-form-row">
                        <Form.Group as={Col} controlId="formGridHowDidYouHear">
                            <Row>
                                <Col md={2}>
                                    <Form.Label>How did you find us?</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <Form.Select defaultValue="Choose Medium...">
                                        <option>Choose Medium...</option>
                                        <option>Facebook</option>
                                        <option>Instagram</option>
                                        <option>Twitter</option>
                                        <option>Other</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Row>
                    <Row className="tr-form-row">
                        <Col md={2}>
                            <Form.Label>Application Group (Division)</Form.Label>
                        </Col>
                        <Col md={9}>
                            <Form.Group as={Col} controlId="formGridDivision">
                                <DivisionSection divisions={divisionsData} />
                            </Form.Group>
                        </Col>
                        <Col md={1}>
                            <OverlayTrigger key="division-age-information" placement="left"
                                overlay={
                                    <Tooltip id="tooltip-division-age-information">
                                        <div style={{ display: "inline-block", width: "180px", "font-size": "x-small" }} dangerouslySetInnerHTML={{ __html: ageChartForPopup }} />
                                    </Tooltip>
                                }>
                                <Button variant="info"><GrInfo color="grey" size="1rem" />{"   Age"}</Button>
                            </OverlayTrigger>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Card className="tr-form-card">
                <Card.Header>
                    <Card.Title className="tr-form-card-header-title">
                        <h3>Team Information</h3>
                    </Card.Title>
                </Card.Header>
                <Card.Body className="tr-form-card-body">
                    <Row className="tr-form-row">
                        <Form.Group as={Col} controlId="formGridTeamName">
                            <Row>
                                <Col md={2}>
                                    <Form.Label>Give your Team a Name</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <Form.Control type="text" placeholder="Team Name" />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Row>
                    <Row className="tr-form-row">
                        <Form.Group as={Col} controlId="formGridTeamGenderGroup">
                            <Row>
                                <Col md={2}>
                                    <Form.Label>Choose Gender & Group</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Select defaultValue="Choose Gender...">
                                                <option>Choose Gender...</option>
                                                <option>Boys</option>
                                                <option>Girls</option>
                                                <option>Men</option>
                                                <option>Women</option>
                                            </Form.Select> 
                                        </Col>
                                        <Col md={6}>
                                            <Form.Select defaultValue="Choose Group...">
                                                <option>Choose Group...</option>
                                                <option>U8</option>
                                                <option>U9</option>
                                                <option>U10</option>
                                                <option>U11</option>
                                                <option>U12</option>
                                                <option>U13</option>
                                                <option>U14</option>
                                                <option>U15</option>
                                                <option>U16</option>
                                                <option>U17</option>
                                                <option>U18</option>
                                                <option>U19</option>
                                            </Form.Select>  
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Row>
                    <Row className="tr-form-row">
                        <Form.Group as={Col} controlId="formGridOldestPlayerDOB">
                            <Row>
                                <Col md={2}>
                                    <Form.Label>Select DOB of Oldest Player</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <Form.Control type="date" placeholder="Oldest Player DOB" />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Row>
                    <Row className="tr-form-row">
                        <Form.Group as={Col} controlId="formGridCoachName">
                            <Row>
                                <Col md={2}>
                                    <Form.Label>Who's the Coach !!!</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <Form.Control type="text" placeholder="Coach Name" />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Row>
                    <Row className="tr-form-row">
                        <Form.Group as={Col} controlId="formGridTeamCityState">
                            <Row>
                                <Col md={2}>
                                    <Form.Label>Where is the Team From?</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Control type="text" placeholder="City" />
                                        </Col>
                                        <Col md={6}>
                                            <Form.Control type="text" placeholder="State" />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Row>
                    <Row className="tr-form-row">
                        <Form.Group as={Col} controlId="formGridClubName">
                            <Row>
                                <Col md={2}>
                                    <Form.Label>Which Club are you from?</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <Form.Control type="text" placeholder="Club Name" />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Row>
                    <Row className="tr-form-row">
                        <Form.Group as={Col} controlId="formGridAssociationName">
                            <Row>
                                <Col md={2}>
                                    <Form.Label>Which Association?</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <Form.Control type="text" placeholder="Association Name" />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Row>
                    <Row className="tr-form-row">
                        <Form.Group as={Col} controlId="formGridAssociationName">
                            <Row>
                                <Col md={2}>
                                    <Form.Label>Which League?</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <Form.Control type="text" placeholder="League Name" />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Row>
                    <Row className="tr-form-row">
                        <Form.Group as={Col} controlId="formGridPlayLevel">
                            <Row>
                                <Col md={2}>
                                    <Form.Label>Choose Play Level?</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <Form.Select defaultValue="Choose Play Level...">
                                        <option>Choose Play Level...</option>
                                        <option>Upper (GOLD)</option>
                                        <option>Lower (RED)</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Row>
                    <Row className="tr-form-row">
                        <Form.Group as={Col} controlId="formGridPrimaryJerseyColour">
                            <Row>
                                <Col md={2}>
                                    <Form.Label>Primary Jersey Colour?</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <Form.Control type="text" placeholder="Primary Colour" />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Row>
                    <Row className="tr-form-row">
                        <Form.Group as={Col} controlId="formGridAltJerseyColour">
                            <Row>
                                <Col md={2}>
                                    <Form.Label>Alternate Jersey Colour?</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <Form.Control type="text" placeholder="Alternate Colour" />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Row>
                </Card.Body>
            </Card>
            <Card className="tr-form-card">
                <Card.Header>
                    <Card.Title className="tr-form-card-header-title">
                        <h3>Primary Contact Information</h3>
                    </Card.Title>
                </Card.Header>
                <Card.Body className="tr-form-card-body">
                    <Row className="tr-form-row">
                        <Form.Group as={Col} controlId="formGridPrimaryContactName">
                            <Row>
                                <Col md={2}>
                                    <Form.Label>Contact Name</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Control type="text" placeholder="First Name" />
                                        </Col>
                                        <Col md={6}>
                                            <Form.Control type="text" placeholder="Last Name" />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Row>
                    <Row className="tr-form-row">
                        <Form.Group as={Col} controlId="formGridPimaryContactRole">
                            <Row>
                                <Col md={2}>
                                    <Form.Label>Contact is?</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <Form.Select defaultValue="Choose Role...">
                                        <option>Choose Role...</option>
                                        <option>Head Coach</option>
                                        <option>Assistant Coach</option>
                                        <option>Team Representative</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Row>
                    <Row className="tr-form-row">
                        <Form.Group as={Col} controlId="formGridPrimaryContactAddress">
                            <Row>
                                <Col md={2}>
                                    <Form.Label>Where does he/she Live?</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <Form.Control as="textarea" rows={3} placeholder="Address" />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Row>
                    <Row className="tr-form-row">
                        <Form.Group as={Col} controlId="formGridPrimaryContactLocation">
                            <Row>
                                <Col md={2}>
                                    <Form.Label>Which City/State/ZIP?</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <Row>
                                        <Col md={4}>
                                            <Form.Control type="text" placeholder="City" />
                                        </Col>
                                        <Col md={4}>
                                            <Form.Control type="text" placeholder="State" />
                                        </Col>
                                        <Col md={4}>
                                            <Form.Control type="text" placeholder="ZIP" />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Row>
                    <Row className="tr-form-row">
                        <Form.Group as={Col} controlId="formGridPrimaryContactEmail">
                            <Row>
                                <Col md={2}>
                                    <Form.Label>Enter their Email Address</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <Form.Control type="email" placeholder="primary-contact@soccer-club.com" />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Row>
                    <Row className="tr-form-row">
                        <Form.Group as={Col} controlId="formGridPrimaryContactNumber">
                            <Row>
                                <Col md={2}>
                                    <Form.Label>Enter their Contact Number</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <Form.Control type="number" placeholder="(000)000-0000" />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Row>
                    <Row className="tr-form-row">
                        <Form.Group as={Col} controlId="formGridPrimaryContactNumber">
                        <Form.Check type="checkbox" id="formGridPrimaryContactCommunicationPreference" label="Send application confirmation to the phone. You must also select the service provider to receive a text" />
                        </Form.Group>
                    </Row>
                </Card.Body>
            </Card>
        </Form>
    )
}

// Division Information
function DivisionSection(divisions) {
    let divisionsList = Object.keys(divisions.divisions.divisions);
    let costOfDivision = "($600.0)";
    return (
        <Form.Select defaultValue="Choose Division...">
            <option>Choose Division...</option>
            {divisionsList.map((key) => <option key={key} value={key}>{ divisions.divisions.divisions[key] + " "+costOfDivision}</option>)}
        </Form.Select>
    );
}

async function getDivisions() {
    let rawResponse = await fetch(process.env.REACT_APP_API_ENDPOINT + `/divisions`);
    let response = await rawResponse.json();
    return response;
}

// Team Information
function TeamInformation() {

}

// Other Information
// Primary Contact, Secondary Contact, Team Performance History etc.
function OtherInformation() {

}

// Pre-Form Text and Instructions
function PreFormText() {

}

// Post-Form Text and Instructions
function PostFormText() {

}


let ageChartForPopup = "<span><b>DOB Chart for the 2022 Soccer Tournament</b><hr>" +
    "<b>U08</b> - Born on or after <b>Jan 1, 2014</b><br>" +
    "<b>U09</b> - Born on or after <b>Jan 1, 2013</b><br>" +
    "<b>U10</b> - Born on or after <b>Jan 1, 2012</b><br>" +
    "<b>U11</b> - Born on or after <b>Jan 1, 2011</b><br>" +
    "<b>U12</b> - Born on or after <b>Jan 1, 2010</b><br>" +
    "<b>U13</b> - Born on or after <b>Jan 1, 2009</b><br>" +
    "<b>U14</b> - Born on or after <b>Jan 1, 2008</b><br>" +
    "<b>U15</b> - Born on or after <b>Jan 1, 2007</b><br>" +
    "<b>U16</b> - Born on or after <b>Jan 1, 2006</b><br>" +
    "<b>U17</b> - Born on or after <b>Jan 1, 2005</b><br>" +
    "<b>U18</b> - Born on or after <b>Jan 1, 2004</b><br>" +
    "<b>U19</b> - Born on or after <b>Jan 1, 2003</b><br>" +
    "<br><i>This is a reference guide. Not all ages listed may be offered for all genders. You may play up, but not down. This is a SPRING tournament.</i></span>"
