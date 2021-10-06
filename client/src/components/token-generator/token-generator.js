import React from 'react';
import { Button, Form, FormControl, InputGroup, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class TokenGenerator extends React.Component {
    constructor() {
        super();
        this.state = {
            tokenGenApi: '/api/get-token',
            currRole: "admin",
            show: false
        }
    }

    handleOpen = () => {
        this.setState({show: true});
    }

    handleClose = () => {
        this.setState({show: false});
    }

    getToken(userName,roleName) {

    }

    getRolesDropdown() { // TODO: Need to add logic to dynamically fetch the roles list that current user can invite
        // let validRoles = ["coach", "team-director", "referee", "referee-director", "field-manager", "field-director", "tournament-director", "admin"];
        let currRole = this.state.currRole;
        switch(currRole) {
            case "team-director":
                return (
                    <Form.Select aria-label="Choose a Role">
                        <option value="coach" selected>Coach</option>
                    </Form.Select>
                );
            case "referee-director":
                return (
                    <Form.Select aria-label="Choose a Role">
                        <option value="referee" selected>Referee</option>
                    </Form.Select>
                );
            case "field-director":
                return (
                    <Form.Select aria-label="Choose a Role">
                        <option value="field-manager" selected>Field Manager</option>
                    </Form.Select>
                );   
            case "tournament-director":
                return (
                    <Form.Select aria-label="Choose a Role">
                        <option value="coach" selected>Coach</option>
                        <option value="referee">Referee</option>
                        <option value="field-manager">Field Manager</option>
                        <option value="team-director">Team Director</option>
                        <option value="referee-director">Referee Director</option>
                        <option value="field-director">Field Director</option>
                    </Form.Select>
                );     
            case "admin":
                return (
                    <Form.Select aria-label="Choose a Role">
                        <option value="coach" selected>Coach</option>
                        <option value="referee">Referee</option>
                        <option value="field-manager">Field Manager</option>
                        <option value="team-director">Team Director</option>
                        <option value="referee-director">Referee Director</option>
                        <option value="field-director">Field Director</option>
                        <option value="tournament-director">Tournament Director</option>
                    </Form.Select>
                );           
            default:
                return (
                    <Form.Select aria-label="Choose a Role">
                        <option value="NA" selected disabled hidden>Cannot Invite</option>
                    </Form.Select>
                );
        }
    }

    render() {
        console.log('TokenDropdown');
        console.log(this.getRolesDropdown());
        return (
            <>
                <Button variant="primary" onClick={this.handleOpen}>
                    Generate Invite
                </Button>
                <Modal
                show={this.state.show}
                onHide={this.handleClose}
                backdrop="static"
                keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Generate Invitation Token</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicUsername">
                                <Form.Label>Username (eMail)</Form.Label>
                                <Form.Control type="email" placeholder="abc@xyz.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicRole">
                                <Form.Label>Role</Form.Label>
                                {this.getRolesDropdown()}
                            </Form.Group>
                            <Button variant="primary" onClick={(data)=>{console.log(data)}}>
                                Generate Token
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <InputGroup className="mb-3">
                            <FormControl type="text" placeholder="Generated Token appears here" aria-label="Generated Token appears here" disabled={true} />
                            <Button variant="outline-secondary" id="copy-to-clipboard"><img src="https://img.icons8.com/material-rounded/24/000000/copy.png" alt="copy to clipboard" /></Button>
                        </InputGroup>
                        {/* Add a Disabled Text Box with a Copy To ClipBoard Button */}
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}