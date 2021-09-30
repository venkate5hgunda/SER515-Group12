const mongoose = require('mongoose');

const pageAccessForRolesSchema = new mongoose.Schema({
    pageName: {
        type: String,
        required: true,
        unique: true
    },
    rolesWithAccess: {
        type: [String],
        default: ['admin'],
        required: true,
        default: false
    }
});

module.exports = mongoose.model('page-access-for-roles', pageAccessForRolesSchema);