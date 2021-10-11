const mongoose = require('mongoose');
const {
    v4: uuidv4
} = require('uuid');

const gameScheduleSchema = new mongoose.Schema({
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    }
})

const tournamentGameSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: function genUUID() {
            return uuidv4();
        },
        required: true,
        unique: true
    },
    division: {
        type: String,
        default: 'Not Provided',
        required: true
    },
    group: {
        type: String,
        default: 'Not Provided',
        required: true
    },
    homeTeam: { // To simplify the query for UI homeTeam|visitingTeam instead of []
        type: String,
        default: 'Not Provided',
        required: true
    },
    visitingTeam: {
        type: String,
        default: 'Not Provided',
        required: true
    },
    referee: {
        type: String,
        default: 'Not Provided',
        required: true
    },
    field: {
        type: String,
        default: 'Not Provided',
        required: true
    },
    schedule: {
        type: gameScheduleSchema,
        required: true
    }
});

module.exports = mongoose.model('tournament-game', tournamentGameSchema);