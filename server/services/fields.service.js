const fieldSchema = require('../models/role-field-model');

async function getAllFields() {
    return allFieldsDummyInput;
}

async function getField(fieldId) {

}

async function upsertFields() {

}

async function deleteFields() {

}

module.exports = {
    get: getField,
    getAll: getAllFields,
    upsert: upsertFields,
    delete: deleteFields
}

allFieldsDummyInput = [{
        _id: "44242342341241",
        name: "Tempe Soccer FC (Field #1)"
    },
    {
        _id: "4424234234123",
        name: "Tempe Soccer FC (Field #3)"
    },
    {
        _id: "44242342341241213",
        name: "Phoenix Rising MLS FC (Field #9)"
    },
    {
        _id: "44242342341223",
        name: "Phoenix Rising MLS FC (Field #10)"
    }
]