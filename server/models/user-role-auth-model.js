const mongoose = require('mongoose');

const userRoleForAuthSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    roleName: {
        type: String,
        default: 'user',
        required: true,
        default: false
    }
});

module.exports = mongoose.model('user-role-for-auth', userRoleForAuthSchema);