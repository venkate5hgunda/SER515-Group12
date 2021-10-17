const mongoose = require('mongoose');
const {
    v4: uuidv4
} = require('uuid');
const {
    teamSchema
} = require('../models/tournament-team-model');
const {
    divisionSchema
} = require('../models/tournament-divison-model');
const {
    groupSchema
} = require('../models/tournament-group-model');
const {
    refereeSchema
} = require('../models/role-referee-model');
const {
    fieldSchema
} = require('../models/role-field-model');

const gameScheduleSchema = new mongoose.Schema({
    start: {
        type: Date,
        default: Date.now(),
        required: true
    },
    end: {
        type: Date,
        default: Date.now(),
        required: true
    }
});

const tournamentGameSchema = new mongoose.Schema({
    // _id: {
    //     type: String,
    //     default: function genUUID() {
    //         return uuidv4();
    //     },
    //     required: true,
    //     unique: true
    // },
    division: {
        type: divisionSchema,
        default: () => ({}),
        required: true
    },
    group: {
        type: groupSchema,
        default: () => ({}),
        required: true
    },
    homeTeam: { // To simplify the query for UI homeTeam|visitingTeam instead of []
        type: teamSchema,
        default: () => ({}),
        required: true
    },
    visitingTeam: {
        type: teamSchema,
        default: () => ({}),
        required: true
    },
    referee: {
        type: refereeSchema,
        default: () => ({}),
        required: true
    },
    field: {
        type: fieldSchema,
        default: () => ({}),
        required: true
    },
    schedule: {
        type: gameScheduleSchema,
        default: () => ({}),
        required: true
    }
});

module.exports = {
    teamModel: mongoose.model(
        'tournament-game', tournamentGameSchema,
        'tournament-game-schedule', gameScheduleSchema
    ),
    gameSchema: tournamentGameSchema,
    scheduleSchema: tournamentGameSchema
}