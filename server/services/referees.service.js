const refereeSchema = require('../models/role-referee-model');

async function getAllReferees() {
    return allRefereesDummyInput;
}

async function getReferee(refereeId) {

}

async function upsertReferee() {

}

async function deleteReferee() {

}

module.exports = {
    get: getReferee,
    getAll: getAllReferees,
    upsert: upsertReferee,
    delete: deleteReferee
}

allRefereesDummyInput = [{
        _id: "44242342341241",
        name: "Gonzalez"
    },
    {
        _id: "4424234234123",
        name: "Mark"
    },
    {
        _id: "44242342341241213",
        name: "Phillip"
    },
    {
        _id: "44242342341223",
        name: "Kevin"
    }
]