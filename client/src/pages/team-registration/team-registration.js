import React, { useState } from 'react';
import { Form, Col, Row, OverlayTrigger, Button, Tooltip, Card, ListGroup, Modal } from 'react-bootstrap';
import { GrInfo } from 'react-icons/gr';
import './team-registration.css';

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
            <div style={{"margin": "20px"}}>
                <RegistrationForm divisions={this.state.divisions} />
            </div>
        )
    }
}

// Root Function for Form
function RegistrationForm(divisionsData) {
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleConfirmationOpen = () => {
        setShowConfirmation(true);
    }

    const handleConfirmationClose = () => {
        setShowConfirmation(false);
    }

    return (
        <>
            <Form>
                <Card className="tr-form-card">
                    <Card.Header>
                        <Card.Title className="tr-form-card-header-title">
                            <h2>Apply to the 2022 Tempe Soccer Tournament</h2>
                        </Card.Title>
                    </Card.Header>
                    <Card.Body className="tr-form-card-body">
                        <Row className="tr-form-row">
                            <Form.Group as={Col} controlId="formGridPreText">
                                <Row>
                                <div style={{ display: "inline-block", "font-size": "small" }} dangerouslySetInnerHTML={{ __html: applicationPreText }}></div>
                                </Row>
                            </Form.Group>
                        </Row>
                    </Card.Body>
                </Card>
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
                            <Form.Group as={Col} controlId="formGridPrimaryContactRole">
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
                                        <Form.Control type="number" placeholder="(000) 000-0000" />
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
                <Card className="tr-form-card">
                    <Card.Header>
                        <Card.Title className="tr-form-card-header-title">
                            <h3>Verification, Submission and Payment</h3>
                        </Card.Title>
                    </Card.Header>
                    <Card.Body className="tr-form-card-body">
                        <ListGroup className="tr-form-row" variant="flush">
                            <ListGroup.Item><b>STOP AND READ THIS!!!</b></ListGroup.Item>
                            <ListGroup.Item>
                                Please take this opportunity to check over your application to ensure that all the Fields have been completed. You MUST submit the application by clicking on the "Submit Application" button below for it to be received by the tournament. <b>DO NOT SEND A PRINT OUT of this form as your application!!</b>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <b>By submitting this application, you are indicating your acceptance of the terms below. Please read carefully.</b>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div style={{ display: "inline-block", "font-size": "x-small" }} dangerouslySetInnerHTML={{ __html: formSubmissionConfirmation }}></div>
                                <Form.Check type="checkbox" id="formSubmissionConfirmation" label="I understand and accept the terms and conditions"></Form.Check>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
                <div className="d-grid gap-2">
                    {/*removed type="submit" as I want to open a popup */}
                    <Button variant="success" size="lg" className="tr-form-submit-button" onClick={handleConfirmationOpen}>
                        Submit Application
                    </Button>
                </div>
            </Form>
            <Modal show={showConfirmation} onHide={handleConfirmationClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Team Registration Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    Submission Confirmed !!!
                </Modal.Body>
            </Modal>
        </>
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

let applicationPreText = `
<table cellspacing="10px" cellpadding="5px" border="0">
<tbody><tr><td class="body" colspan="2" valign="top"><b>WHEN: </b></td><td class="body" valign="top">March Madness Tournament. (Starts 4th of March, 2022)</td></tr>
<tr><td class="body" colspan="2" valign="top"><b>WHERE: </b></td><td class="body" valign="top">Tempe, Arizona</td></tr>
<tr><td class="body" colspan="2" valign="top"><b>FEES: </b></td><td class="body" valign="top">We have a promotional flat fee of $600 for any division this season !!!</td></tr>
<tr><td class="body" colspan="2" valign="top"><b>APPLICATION DEADLINE: </b></td><td>January 4th, 2022</td></tr>
<tr><td class="body" colspan="2" valign="top" nowrap=""><b>PAY TO:&nbsp;</b></td><td class="body" valign="top">Arizona State Soccer Federation; ASU March Madness Tournament, Attn: Selection Committee, P.O. Box 24232, Tempe, Arizona 85281 <br>
Credit Cards Accepted for Application Fees  <br><i class="fab fa-cc-paypal fa-2x"></i> <i class="fab fa-cc-visa fa-2x"></i> <i class="fab fa-cc-mastercard fa-2x"></i></td></tr>
</tbody></table>
<hr>
When completing this application, PLEASE use proper form (Upper and lower case. Example: "Cleveland Tigers" instead of "cleveland tigers" or "CLEVELAND TIGERS".). 
Also, do not use punctuation (',.&amp;;:() etc). Thank you.
<p>Fields marked with a (*) are required. The form will NOT be accepted on-line with these blank.</p>
<p>You are <b>strongly</b> encouraged to click on the HELP icons (<img src="https://tourneycentral.com/common/images/help.gif" width="17" height="15" alt="See the help for this" border="0">) next to the fields for additional information as well as guidance on completing the application correctly.</p>
`

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
let formSubmissionConfirmation = `My team meets all the requirements as outlined in the tournament invitation.
<br />I understand that the tournament reserves the right to accept or reject
any team at its discretion. Applications are not considered on a first come
basis. If my team is not accepted into the tournament that I will receive a
refund in full. Cashing of the check by the tournament submitted with
application DOES NOT indicate acceptance.
<br />The application above is a COMPLETE and ACCURATE representation of my
team's accomplishments and abilities.
<br />If my team is accepted, I understand that registration is held on the
Friday night before the tournament weekend, that I will have planned for a
qualified representative to register at that time.
<br />I understand that once a team is accepted and later withdraws, the entry
fee is forfeited.
<br />I understand that photography may be taken at the site and the
participants, parents/guardians of the participants and/or the spectators have
no recourse to compensation or discretion regarding the use of the photos.
<br />I understand that inclement weather is a possibility and that such weather
may result in the abbreviation or cancellation of tournament games. In the event
this may occur, no refunds, full or partial, will be given.
<br />I understand that I will receive information regarding my team's
participation in this tournament via email and that I am responsible for
informing the tournament of changes to the account provided on this application.
<br />Please include my email in soccer tournament-related announcements.
<br /><b>Your team is required to book hotel rooms using the hotels only listed below to participate in the tournament. Teams not staying at one or more of these properties, will not be considered for acceptance to the tournament.
While you are free to select any hotel property you wish, you will be asked to VERIFY your rooming arrangements upon acceptance AND when you register your team on Friday night. The Soccer Classic organization assumes no liability by its endorsement of a particular hotel.</b>
<br /><br /> `