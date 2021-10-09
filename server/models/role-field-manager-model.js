const mongoose = require('mongoose');
const {
    v4: uuidv4
} = require('uuid');

const roleFieldManagerSchema = new mongoose.Schema({
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
    fields: {
        type: [String], // Field UUIDs
        default: [],
        required: false
    }
});

module.exports = mongoose.model('role-field-manager', roleFieldManagerSchema);