import React, {useState} from 'react';
import { Button, Form, FormControl, InputGroup, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class TokenGenerator extends React.Component {
    constructor() {
        super();
        this.state = {
            currRole: "admin",
        }
    }
    render() {
        return (<TokenGenForm role={this.state.currRole} />)
    }
}

function TokenGenForm(role) {
    const [show, setShow] = useState(false);
    const [formValidated, setFormValidated] = useState(false);
    const [usernameInvalid, setUsernameInvalid] = useState(false);
    const [tokenGenText, setTokenGenText] = useState('');

    const handleOpen = () => {
        setShow(true);
    }

    const handleClose = () => {
        setShow(false);
        initialState();
    }

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if(form.checkValidity()===false) {
            setUsernameInvalid(true);
        }
        else {
            let username='', rolename='';
            for(let i=0;i<form.length;i++) {
                if(form[i].id==='form.username') username=form[i].value;
                else if(form[i].id==='form.rolename') rolename=form[i].value;
            }
            setFormValidated(true);
            setUsernameInvalid(false);
            setTokenGenText(await getToken(username, rolename));
        }
    }

    const getToken = async (username, rolename) => {
        let response = await fetch(process.env.APP_API_ENDPOINT+`/get-token?user=${username}&role=${rolename}`);
        let res = await response.json();
        console.log(res.token);
        return res.token;
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(tokenGenText);
    }

    const initialState = () => {
        setFormValidated(false);
        setUsernameInvalid(false);
        setTokenGenText('');        
    }

    return (
        <>
            <Button variant="info" onClick={handleOpen}>
                Generate Invite
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Generate Invitation Token</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={formValidated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="form.username">
                            <Form.Label>Username (eMail)</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control type="email" placeholder="abc@xyz.com" required isInvalid={usernameInvalid} />
                                <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Provide valid e-Mail Address</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="form.rolename">
                            <Form.Label>Role</Form.Label>
                            <GetRolesDropdown currRole={role.role} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Generate Token
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <InputGroup className="mb-3">
                        <FormControl type="text" placeholder="Generated Token appears here" aria-label="Generated Token appears here" disabled={true} value={tokenGenText} />
                        <Button variant="outline-dark" id="copy-to-clipboard" onClick={copyToClipboard}><img src="https://img.icons8.com/material-rounded/24/000000/copy.png" alt="copy to clipboard" /></Button>
                    </InputGroup>
                </Modal.Footer>
            </Modal>
        </>
    );
}

function GetRolesDropdown(currRole) { // TODO: Need to add logic to dynamically fetch the roles list that current user can invite
    // let validRoles = ["coach", "team-director", "referee", "referee-director", "field-manager", "field-director", "tournament-director", "admin"];
    switch(currRole.currRole) {
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
                <Form.Select aria-label="Choose a Role" defaultValue="coach" >
                    <option value="coach">Coach</option>
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
                <Form.Select aria-label="Choose a Role" defaultValue="NA">
                    <option value="NA" disabled hidden>Cannot Invite</option>
                </Form.Select>
            );
    }
}