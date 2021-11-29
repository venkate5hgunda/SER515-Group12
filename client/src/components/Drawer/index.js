import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useEffect } from "react";
import { Image, Modal } from 'react-bootstrap';

var data = {
    "About the Tournament": "about",
    "Frequently Asked Questions": "Rules and Regulations",
    "Apply to the Tournament": "application-forms",
    "Find a Hotel": "hotels",
    "Field Maps/Area Maps": "maps",
    "Tournament Rules": "Rules and Regulations",
    "Sponsors": "sponsors"
};

export default function TemporaryDrawer({ open, close }) {
  const [games, setGames] = useState([]);
  const [showUnderConstruction, setShowUnderConstruction] = useState(!open);

    useEffect(() => {
        fetch(
            process.env.REACT_APP_API_ENDPOINT +
                "/get-tournament-schedule?groupSize=4"
        )
            .then((response) => response.json())
            .then((data) => setGames(data));
    }, []);

    const handlePopUpOpen = () => {
        setShowUnderConstruction(true);
    }

    const handlePopUpClose = () => {
        setShowUnderConstruction(false);
    }

    const list = (anchor) => (
        <Box role="presentation">
            <List>
                <ListItem key={1}>
                    <ListItemText primary={"2021 SOCCER TOURNAMENT"} />
                </ListItem>
                <Divider />
                <Box sx={{ minWidth: 120, margin: 2 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                            2021 Games
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                        >
                            {games.map((game) => (
                                <MenuItem
                                    value={
                                        "game-" +
                                        game.homeTeam.name +
                                        game.visitingTeam.name
                                    }
                                >
                                    {game.homeTeam.name.split(" ")[1] +
                                        " vs " +
                                        game.visitingTeam.name.split(" ")[1]}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <ListItem style={{ display: "flex", justifyContent: "center" }}>
                    <Button variant="outlined" onClick={handlePopUpOpen}>See Games</Button>
                </ListItem>
                <Divider />
                <Box sx={{ minWidth: 120, margin: 2 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                            2021 Teams
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                        >
                            {allTeamsDummyInput.map((item) => (
                                <MenuItem value={item._id}>
                                    {item.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <ListItem style={{ display: "flex", justifyContent: "center" }}>
                    <Button variant="outlined" onClick={handlePopUpOpen}>See Teams</Button>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary={"FAST FIND"} />
                </ListItem>
                <Divider />
                <List>
                    {Object.keys(data).map((item) => (
                      <ListItem button style={{ paddingLeft: 50 }} onClick={() => { handlePopUpClose(); window.location.href = "/" + data[item]; }}>
                            <ListItemText primary={item} />
                        </ListItem>
                    ))}
                </List>
            </List>
            <Modal
                show={showUnderConstruction}
                onHide={handlePopUpClose}
                backdrop="static"
                keyboard={false}
            >
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
                    <Modal.Title>
                        This feature is under construction...
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image
                        src="https://cdn.pixabay.com/photo/2017/06/16/07/26/under-construction-2408062_960_720.png"
                        fluid
                    />
                    <p> </p>
                    <p> </p>
                    <h5 className="coming-soon-popup-text">Coming Soon !!!</h5>
                </Modal.Body>
            </Modal>
        </Box>
    );

    return (
        <div>
        <Drawer open={open} onClose={() => { close(false); handlePopUpClose(); }}>
                {list()}
            </Drawer>
        </div>
    );
}

var allTeamsDummyInput = [
    {
        // 1
        _id: "121241242151251251",
        name: "Alliance Cincinnati FC",
        coach: "2342424214124512",
        players: [
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
        ],
        division: "536356346363",
        // We will assign groupID at the time of scheduling the tournament
        homeLocation: "Cincinnati",
    },
    {
        // 2
        _id: "121241242151251342",
        name: "Alliance Tempe FC",
        coach: "2342424214124512",
        players: [
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
        ],
        division: "536356346363",
        // We will assign groupID at the time of scheduling the tournament
        homeLocation: "Tempe",
    },
    {
        // 3
        _id: "12124124215125122342",
        name: "Alliance Miami FC",
        coach: "2342424214124512",
        players: [
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
        ],
        division: "536356346363",
        // We will assign groupID at the time of scheduling the tournament
        homeLocation: "Miami",
    },
    {
        // 4
        _id: "12124124215125122342342",
        name: "Alliance NYC FC",
        coach: "2342424214124512",
        players: [
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
        ],
        division: "536356346363",
        // We will assign groupID at the time of scheduling the tournament
        homeLocation: "NYC",
    },
    {
        // 5
        _id: "121241242151251",
        name: "Alliance Michigan FC",
        coach: "2342424214124512",
        players: [
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
        ],
        division: "536356346363",
        // We will assign groupID at the time of scheduling the tournament
        homeLocation: "Michigan",
    },
    {
        // 6
        _id: "121241242151252122342",
        name: "Alliance Scranton FC",
        coach: "2342424214124512",
        players: [
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
        ],
        division: "536356346363",
        // We will assign groupID at the time of scheduling the tournament
        homeLocation: "Scranton",
    },
    {
        // 7
        _id: "12124124215125122342",
        name: "Alliance Dallas FC",
        coach: "2342424214124512",
        players: [
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
        ],
        division: "536356346363",
        // We will assign groupID at the time of scheduling the tournament
        homeLocation: "Dallas",
    },
    {
        // 8
        _id: "12124124215125122342",
        name: "Alliance Houston FC",
        coach: "2342424214124512",
        players: [
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
        ],
        division: "536356346363",
        // We will assign groupID at the time of scheduling the tournament
        homeLocation: "Houston",
    },
    {
        // 9
        _id: "12124124215125122342",
        name: "Alliance Tuscon FC",
        coach: "2342424214124512",
        players: [
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
        ],
        division: "536356342354215",
        // We will assign groupID at the time of scheduling the tournament
        homeLocation: "Tuscon",
    },
    {
        // 10
        _id: "12124124215125122342",
        name: "Alliance LA FC",
        coach: "2342424214124512",
        players: [
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
        ],
        division: "536356342354215",
        // We will assign groupID at the time of scheduling the tournament
        homeLocation: "LA",
    },
    {
        // 11
        _id: "12124124215125122342",
        name: "Alliance Toronto FC",
        coach: "2342424214124512",
        players: [
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
        ],
        division: "536356342354215",
        // We will assign groupID at the time of scheduling the tournament
        homeLocation: "Toronto",
    },
    {
        // 12
        _id: "12124124215125122342",
        name: "Alliance Seattle FC",
        coach: "2342424214124512",
        players: [
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7,
            },
        ],
        division: "536356342354215",
        // We will assign groupID at the time of scheduling the tournament
        homeLocation: "Seattle",
    },
];
