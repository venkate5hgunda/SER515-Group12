const mongoose = require('mongoose');
const {
    v4: uuidv4
} = require('uuid');
const {
    teamSchema
} = require('../models/tournament-team-model');

const roleCoachSchema = new mongoose.Schema({
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
    age: {
        type: Number,
        default: 0,
        required: true
    },
    teams: {
        type: [teamSchema], // Team UUIDs
        default: () => ([{}]),
        required: false
    }
});

module.exports = {
    coachModel: mongoose.model('role-coach', roleCoachSchema),
    coachSchema: roleCoachSchema
}