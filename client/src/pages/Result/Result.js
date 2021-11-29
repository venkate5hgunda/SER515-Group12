import React, {useEffect, useState} from "react";
import {ButtonGroup, Table, ToggleButton} from 'react-bootstrap';
import './Result.css';
import Pagination from "./Pagination";
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { useCookies } from 'react-cookie';


const Schedule = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    console.log(cookies["username"]);
    console.log(cookies["rolename"] === "coach");
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [data, setData] = useState([]);


    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
    
    async function handleLogout() {
        setError("")
    
        try {
          await logout()
          history.push("/login")
        } catch {
          setError("Failed to log out")
        }
      }



    useEffect(() => {
        fetch(process.env.REACT_APP_API_ENDPOINT + '/get-tournament-schedule?groupSize=4')
            .then(response => response.json())
            .then(data => setData(data))
    }, []);

    console.log(data)
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    let randomBackground = ["schedule-bg-1", "schedule-bg-2"][Math.floor(Math.random() * 2)];

    return (
        <div className={"main-schedule "+randomBackground}>
            <div className={"schedule-header"}>
                <h2 className={"align-self-start table-heading"}>TOURNAMENT RESULTS TABLE</h2>
                {/* {cookies["rolename"] === "tournament-director" ? <button className={"btn btn-primary schedule-edit"}>Edit Schedule</button> : '' } */}
            </div>
            <Table className={"table-schedule"} striped bordered hover variant="dark" size="lg">
                <thead>
                <tr>
                    <th>Home Team</th>
                    <th>Visiting Team</th>
                    {(cookies["rolename"] == "tournament-director" || cookies["rolename"] == "field-director") ?
                        <th>Who Won?</th> : ''
                    }
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Results</th>
                </tr>
                </thead>
                <tbody>
                    {
                        data ? currentPosts.map(e =>{
                            return(
                                <tr>
                                    <td>{e.homeTeam.name}</td>
                                    <td>{e.visitingTeam.name}</td>
                                    {(cookies["rolename"] == "tournament-director" || cookies["rolename"] == "field-director") ?
                                        <td>
                                            <ButtonGroup style={{"width": "200px"}}>
                                                <ToggleButton type="radio" style={{ "width": "100px" }} variant="outline-info" checked={cookies["game-" + e.homeTeam.name + e.visitingTeam.name] === e.homeTeam.name} onClick={() => { setCookie("game-" + e.homeTeam.name + e.visitingTeam.name, e.homeTeam.name); window.location.reload(false); }}>{e.homeTeam.name.split(' ')[1]}</ToggleButton>
                                                <ToggleButton type="radio" style={{ "width": "100px" }} variant="outline-info" checked={cookies["game-" + e.homeTeam.name + e.visitingTeam.name] === e.visitingTeam.name} onClick={() => { setCookie("game-" + e.homeTeam.name + e.visitingTeam.name, e.visitingTeam.name); window.location.reload(false); }}>{e.visitingTeam.name.split(' ')[1]}</ToggleButton>
                                            </ButtonGroup>
                                        </td> : ''
                                    }
                                    <td>{(e.schedule.start)}</td>
                                    <td>{(e.schedule.end)}</td>
                                    <td>{cookies["game-"+e.homeTeam.name+e.visitingTeam.name]==null ? "Unannounced" : cookies["game-"+e.homeTeam.name+e.visitingTeam.name].split(' ')[1]+" Won !!!"}</td>
                                </tr>
                            )
                            })

                       :'...Loading'
                    }
                </tbody>
            </Table>
            <div className={"align-self-center"}>
            {data ?
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={data.length}
                paginate={paginate}
            /> : ""
            }
            </div>
        </div>
    )
}

export default Schedule;