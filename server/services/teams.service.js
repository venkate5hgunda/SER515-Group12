const {
    teamsSchema
} = require('../models/tournament-team-model');

async function getAllTeams() {
    return allTeamsDummyInput;
}

async function getTeam(teamId) {

}

async function upsertTeam() {

}

async function deleteTeam() {

}

module.exports = {
    get: getTeam,
    getAll: getAllTeams,
    upsert: upsertTeam,
    delete: deleteTeam
}

allTeamsDummyInput = [{ // 1
        _id: "121241242151251251",
        name: "Alliance Cincinnati FC",
        coach: "2342424214124512",
        players: [{
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            }
        ],
        division: "536356346363",
        // We will assign groupID at the time of scheduling the tournament
        homeLocation: "Cincinnati"
    },
    { // 2
        _id: "121241242151251342",
        name: "Alliance Tempe FC",
        coach: "2342424214124512",
        players: [{
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            }
        ],
        division: "536356346363",
        // We will assign groupID at the time of scheduling the tournament
        homeLocation: "Tempe"
    },
    { // 3
        _id: "12124124215125122342",
        name: "Alliance Miami FC",
        coach: "2342424214124512",
        players: [{
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            }
        ],
        division: "536356346363",
        // We will assign groupID at the time of scheduling the tournament
        homeLocation: "Miami"
    },
    { // 4
        _id: "12124124215125122342342",
        name: "Alliance NYC FC",
        coach: "2342424214124512",
        players: [{
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            }
        ],
        division: "536356346363",
        // We will assign groupID at the time of scheduling the tournament
        homeLocation: "NYC"
    },
    { // 5
        _id: "121241242151251",
        name: "Alliance Michigan FC",
        coach: "2342424214124512",
        players: [{
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            }
        ],
        division: "536356346363",
        // We will assign groupID at the time of scheduling the tournament
        homeLocation: "Michigan"
    },
    { // 6
        _id: "121241242151252122342",
        name: "Alliance Scranton FC",
        coach: "2342424214124512",
        players: [{
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            }
        ],
        division: "536356346363",
        // We will assign groupID at the time of scheduling the tournament
        homeLocation: "Scranton"
    },
    { // 7
        _id: "12124124215125122342",
        name: "Alliance Dallas FC",
        coach: "2342424214124512",
        players: [{
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            }
        ],
        division: "536356346363",
        // We will assign groupID at the time of scheduling the tournament
        homeLocation: "Dallas"
    },
    { // 8
        _id: "12124124215125122342",
        name: "Alliance Houston FC",
        coach: "2342424214124512",
        players: [{
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            }
        ],
        division: "536356346363",
        // We will assign groupID at the time of scheduling the tournament
        homeLocation: "Houston"
    },
    { // 9
        _id: "12124124215125122342",
        name: "Alliance Tuscon FC",
        coach: "2342424214124512",
        players: [{
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            }
        ],
        division: "536356342354215",
        // We will assign groupID at the time of scheduling the tournament
        homeLocation: "Tuscon"
    },
    { // 10
        _id: "12124124215125122342",
        name: "Alliance LA FC",
        coach: "2342424214124512",
        players: [{
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            }
        ],
        division: "536356342354215",
        // We will assign groupID at the time of scheduling the tournament
        homeLocation: "LA"
    },
    { // 11
        _id: "12124124215125122342",
        name: "Alliance Toronto FC",
        coach: "2342424214124512",
        players: [{
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            }
        ],
        division: "536356342354215",
        // We will assign groupID at the time of scheduling the tournament
        homeLocation: "Toronto"
    },
    { // 12
        _id: "12124124215125122342",
        name: "Alliance Seattle FC",
        coach: "2342424214124512",
        players: [{
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            },
            {
                _id: "2342323421412",
                name: "John",
                age: 7
            }
        ],
        division: "536356342354215",
        // We will assign groupID at the time of scheduling the tournament
        homeLocation: "Seattle"
    }
]