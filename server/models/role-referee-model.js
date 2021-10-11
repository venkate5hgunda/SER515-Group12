const mongoose = require('mongoose');
const {
    v4: uuidv4
} = require('uuid');

const roleRefereeSchema = new mongoose.Schema({
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
    }
});

module.exports = mongoose.model('role-referee', roleRefereeSchema);