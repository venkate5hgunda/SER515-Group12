import React, {useEffect, useState} from "react";
import {Table} from 'react-bootstrap';
import './Schedule.css';
import Pagination from "./Pagination";
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"


const Schedule = () => {
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

    return (
        <div className={"main-schedule "}>
            <div className={"schedule-header"}>
                <h2 className={"align-self-start table-heading"}>Schedule</h2>
            </div>
            <Table className={"table-schedule"} striped bordered hover variant="dark" size="lg">
                <thead>
                <tr>
                    <th>Home Team</th>
                    <th>Visiting Team</th>
                    <th>Referee</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th> Field</th>
                </tr>
                </thead>
                <tbody>
                    {
                        data ? currentPosts.map(e =>{
                            return(
                                <tr>
                                    <td>{e.homeTeam.name}</td>
                                    <td>{e.visitingTeam.name}</td>
                                    <td>{e.referee.name}</td>
                                    <td>{(e.schedule.start)}</td>
                                    <td>{(e.schedule.end)}</td>
                                    <td>{e.field.name}</td>
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
