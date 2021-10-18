const mongoose = require('mongoose');
const {
    v4: uuidv4
} = require('uuid');
const {
    teamSchema
} = require('../models/tournament-team-model');

const tournamentGroupchema = new mongoose.Schema({
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
    teams: {
        type: [teamSchema], // Team UUIDs
        default: [], // Maximum of 4
        required: false
    }
});

// module.exports = mongoose.model('tournament-division', tournamentDivisionSchema);
module.exports = {
    groupModel: mongoose.model('tournament-group', tournamentGroupchema),
    groupSchema: tournamentGroupchema
}