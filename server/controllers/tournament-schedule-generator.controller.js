const teamsService = require('../services/teams.service');
const fieldsService = require('../services/fields.service');
const refereesService = require('../services/referees.service');

async function generateTournamentSchedule() {
    teams = await getTeams();
    fields = await getFields();
    referees = await getReferees();
    scheduleInput = { // delete this. Only to show the full input format
        teams: teams,
        fields: fields,
        referees: referees
    };
    console.log('Received Scheduling Input (PFB): ');
    console.log(scheduleInput);
    return scheduleInput;
}

async function getTeams() {
    return await teamsService.getAll();
}

async function getFields() {
    return await fieldsService.getAll();
}

async function getReferees() {
    return await refereesService.getAll();
}

module.exports = {
    genSchedule: generateTournamentSchedule
}