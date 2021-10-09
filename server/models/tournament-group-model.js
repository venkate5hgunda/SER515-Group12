const mongoose = require('mongoose');
const {
    v4: uuidv4
} = require('uuid');

const tournamentDivisionSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: function genUUID() {
            return uuidv4();
        },
        required: true,
        unique: true
    },
    name: {
        type: String,
        default: 'Not Provided',
        required: true
    },
    teams: {
        type: [String], // Team UUIDs
        default: [], // Maximum of 4
        required: false
    }
});

module.exports = mongoose.model('tournament-division', tournamentDivisionSchema);