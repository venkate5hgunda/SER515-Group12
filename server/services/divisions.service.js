const {
    divisionSchema
} = require('../models/tournament-divison-model');

async function getAllDivisions() {
    return allDivisionsDummyInput;
}

async function getDivision(divisionId) {

}

async function upsertDivisions() {

}

async function deleteDivisions() {

}

module.exports = {
    get: getDivision,
    getAll: getAllDivisions,
    upsert: upsertDivisions,
    delete: deleteDivisions
}

allDivisionsDummyInput = []
for (i = 0; i < 4; i++) {
    tempSchema = new divisionSchema();
    tempSchema.name = "Boys Under " + (10 + i * 2);
    allDivisionsDummyInput.push(tempSchema);
}