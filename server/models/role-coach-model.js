const mongoose = require('mongoose');
const {
    v4: uuidv4
} = require('uuid');

const roleCoachSchema = new mongoose.Schema({
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
    age: {
        type: Number,
        default: 0,
        required: true
    },
    teams: {
        type: [String], // Team UUIDs
        default: [],
        required: false
    }
});

module.exports = mongoose.model('role-coach', roleCoachSchema);