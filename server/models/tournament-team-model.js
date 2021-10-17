const mongoose = require('mongoose');
const {
    v4: uuidv4
} = require('uuid');
const {
    coachSchema
} = require('../models/role-coach-model');
const {
    divisionSchema
} = require('../models/tournament-divison-model');
const {
    groupSchema
} = require('../models/tournament-group-model');

const teamPlayerSchema = new mongoose.Schema({ // This is a Sub-Document of TournamentTeam Model
    // _id: {
    //     type: String,
    //     default: function genUUID() {
    //         return uuidv4();
    //     },
    //     required: true,
    //     unique: true
    // },
    name: {
        type: String,
        default: "Not Provided",
        required: true
    },
    age: {
        type: Number,
        default: 0,
        required: true
    }
});

const tournamentTeamSchema = new mongoose.Schema({
    // _id: {
    //     type: String,
    //     default: function genUUID() {
    //         return uuidv4();
    //     },
    //     required: true,
    //     unique: true
    // },
    name: {
        type: String,
        default: 'Not Provided',
        required: true
    },
    coach: {
        type: coachSchema, // Coach UUID
        default: () => ({}),
        required: true
    },
    players: {
        type: [teamPlayerSchema], // Team UUIDs
        default: () => ([{}]), // Maximum of 4
        required: false
    },
    division: {
        type: divisionSchema, // Provide the Division UUID in which the team is being registered
        default: new divisionModel(),
        required: true
    },
    group: {
        type: groupSchema, // Provide the Group UUID in which the team is assigned after tournament is scheduled
        default: () => ({}),
        required: true
    },
    homeLocation: {
        type: String, // Give: 'City, State' as String
        default: 'Not Provided',
        required: true
    }
});

module.exports = {
    teamModel: mongoose.model('tournament-team', tournamentTeamSchema),
    teamSchema: tournamentTeamSchema
}