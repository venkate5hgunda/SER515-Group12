const mongoose = require('mongoose');
const {
    v4: uuidv4
} = require('uuid');
const {
    tournamentGameSchema
} = require('./tournament-game-model');

const tournamentScheduleSchema = new mongoose.Schema({
    // _id: {
    //     type: String,
    //     default: function genUUID() {
    //         return uuidv4();
    //     },
    //     required: true,
    //     unique: true
    // },
    games: {
        type: [tournamentGameSchema],
        default: [],
        required: false
    }
}, {
    timestamps: true // To get the latest schedule if there are multiple ones generated
});

// module.exports = mongoose.model('tournament-schedule', tournamentScheduleSchema);
module.exports = {
    scheduleModel: mongoose.model('tournament-schedule', tournamentScheduleSchema),
    scheduleSchema: tournamentScheduleSchema
}