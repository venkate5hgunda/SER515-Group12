import React from "react";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

import './Schedule.css'


const Schedule = () => {
    const data = [
        {
            division: 'Not Provided',
            group: 'Not Provided',
            homeTeam: '121241242151251251',
            visitingTeam: '12124124215125122342',
            referee: 'Not Provided',
            field: 'Not Provided',
            _id: "11"
        },
        {
            division: 'Not Provided',
            group: 'Not Provided',
            homeTeam: '12124124215125122342',
            visitingTeam: '121241242151252122342',
            referee: 'Not Provided',
            field: 'Not Provided',
            _id: "12"
        },
        {
            division: 'Not Provided',
            group: 'Not Provided',
            homeTeam: '121241242151251251',
            visitingTeam: '121241242151252122342',
            referee: 'Not Provided',
            field: 'Not Provided',
            _id: "13"
        },
        {
            division: 'Not Provided',
            group: 'Not Provided',
            homeTeam: '12124124215125122342',
            visitingTeam: '12124124215125122342',
            referee: 'Not Provided',
            field: 'Not Provided',
            _id: "14"
        },
        {
            division: 'Not Provided',
            group: 'Not Provided',
            homeTeam: '121241242151251251',
            visitingTeam: '12124124215125122342',
            referee: 'Not Provided',
            field: 'Not Provided',
            _id: "15"
        },
        {
            division: 'Not Provided',
            group: 'Not Provided',
            homeTeam: '121241242151252122342',
            visitingTeam: '12124124215125122342',
            referee: 'Not Provided',
            field: 'Not Provided',
            _id: "16"
        },
        {
            division: 'Not Provided',
            group: 'Not Provided',
            homeTeam: '121241242151251342',
            visitingTeam: '12124124215125122342',
            referee: 'Not Provided',
            field: 'Not Provided',
            _id: "17"
        },
        {
            division: 'Not Provided',
            group: 'Not Provided',
            homeTeam: '12124124215125122342342',
            visitingTeam: '121241242151251',
            referee: 'Not Provided',
            field: 'Not Provided',
            _id: "18"
        },
        {
            division: 'Not Provided',
            group: 'Not Provided',
            homeTeam: '121241242151251342',
            visitingTeam: '121241242151251',
            referee: 'Not Provided',
            field: 'Not Provided',
            _id: "19"
        },
        {
            division: 'Not Provided',
            group: 'Not Provided',
            homeTeam: '12124124215125122342',
            visitingTeam: '12124124215125122342342',
            referee: 'Not Provided',
            field: 'Not Provided',
            _id: "20"
        },
        {
            division: 'Not Provided',
            group: 'Not Provided',
            homeTeam: '121241242151251342',
            visitingTeam: '12124124215125122342342',
            referee: 'Not Provided',
            field: 'Not Provided',
            _id: "21"
        },
        {
            division: 'Not Provided',
            group: 'Not Provided',
            homeTeam: '121241242151251',
            visitingTeam: '12124124215125122342',
            referee: 'Not Provided',
            field: 'Not Provided',
            _id: "22"
        }
    ]

    const columns = [
        {
            dataField: "_id",
            text: "Match ID",
            sort: true
        },
        {
            dataField: "homeTeam",
            text: "HomeTeam",
        },
        {
            dataField: "visitingTeam",
            text: "VisitingTeam",
        },
        {
            dataField: "division",
            text: "Division",
        },
        {
            dataField: "referee",
            text: "Referee",
        }

    ];
    return (
        <div className={"main-schedule"}>
            <div className={"schedule-table"}>
                <BootstrapTable
                    keyField="_id"
                    data={data}
                    columns={columns}
                    pagination={paginationFactory({ sizePerPage: 5 })}
                />
            </div>
        </div>
    )
}

export default Schedule;