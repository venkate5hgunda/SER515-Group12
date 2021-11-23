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
// const {
//     divisionSchema
// } = require('../models/tournament-divison-model');
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
        type: String,
        default: null,
        required: true
    },
    end: {
        type: String,
        default: null,
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
        type: divisionSchema, // divisionSchema,
        default: null,
        required: true
    },
    group: {
        type: groupSchema, // String, 
        default: null,
        required: true
    },
    homeTeam: { // To simplify the query for UI homeTeam|visitingTeam instead of []
        type: teamSchema,
        default: null,
        required: true
    },
    visitingTeam: {
        type: teamSchema,
        default: null,
        required: true
    },
    referee: {
        type: refereeSchema,
        default: null,
        required: true
    },
    field: {
        type: fieldSchema,
        default: null,
        required: true
    },
    schedule: {
        type: gameScheduleSchema,
        default: () => ({}),
        required: true
    }
});

const gameModel = mongoose.model('tournament-game', tournamentGameSchema);
const scheduleModel = mongoose.model('tournament-game-schedule', gameScheduleSchema);
// module.exports = {
//     gameModel,
//     scheduleModel
// };
module.exports = {
    gameModel: gameModel,
    scheduleModel: scheduleModel,
    gameSchema: tournamentGameSchema,
    scheduleSchema: gameScheduleSchema
}