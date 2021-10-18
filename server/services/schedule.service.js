const scheduleSchema = require('../models/tournament-schedule-model');

async function getAllGeneratedSchedules() { // If there are multiple schedules available, return all

}

async function getLatestSchedule() { // Get the latest generated one if multiple

}

async function insertNewSchedule(schedule) { // Adds a new schedule to MongoDB

}

async function deleteExistingSchedule(scheduleId) {

}

module.exports = {
    get: getLatestSchedule,
    getAll: getAllGeneratedSchedules,
    addNew: insertNewSchedule,
    delete: deleteExistingSchedule
}