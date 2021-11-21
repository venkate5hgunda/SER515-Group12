const teamsService = require('../services/teams.service');
const fieldsService = require('../services/fields.service');
const refereesService = require('../services/referees.service');
const {
    gameModel, scheduleModel
} = require('../models/tournament-game-model');
const GroupStage = require('groupstage');
const moment = require('moment');
const { fieldModel } = require('../models/role-field-model');
const { refereeModel } = require('../models/role-referee-model');

async function generateTournamentSchedule(options) {
    teams = await getTeams();
    fields = await getFields();
    referees = await getReferees();
    scheduleInput = { // delete this. Only to show the full input format
        teams: teams,
        fields: fields,
        referees: referees
    };
    // Scheduling Source: https://www.npmjs.com/package/tournament
    // Split Teams based on Division. Send it to scheduleService (tournament), take the match indices and assign them to games objects and return the gamesList object for each division.
    teamsByDivision = getTeamsByDivision(teams);
    allGames = [];
    for (const [key, val] of Object.entries(teamsByDivision)) {
        allGames.push.apply(allGames, await getGamesForDivision(val, key, options.groupSize));
    }
    return allGames;
}

function getTeamsByDivision(teams) {
    var teamsByDivision = {};
    for (i = 0; i < teams.length; i++) {
        if (teamsByDivision.hasOwnProperty(teams[i]["division"])) {
            teamsByDivision[teams[i]["division"]].push(teams[i])
        } else {
            teamsByDivision[teams[i]["division"]] = [teams[i]];
        }
    }
    return teamsByDivision;
}

async function getGamesForDivision(teams, divisionId, groupSize) {
    var matchGen = new GroupStage(teams.length, {
        groupSize: groupSize
    }).matches;
    var games = [];
    var fields = await getFields();
    var referees = await getReferees();
    for (i = 0; i < matchGen.length; i++) {
        var homeTeam = teams[matchGen[i]["p"][0] - 1];
        var visitingTeam = teams[matchGen[i]["p"][1] - 1];
        var game = new gameModel();
        game.division = divisionId; // change it to division object
        game.homeTeam = homeTeam;
        game.visitingTeam = visitingTeam;
        game.field = new fieldModel();
        game.field.name = fields[Math.floor(Math.random() * fields.length)]["name"]; // put it in fieldModel
        game.field.location = "Tempe";
        game.referee = new refereeModel(); // put it in refereeModel
        game.referee.name = referees[Math.floor(Math.random() * referees.length)]["name"];
        game.schedule = getTimeSlots(1)[0];
        // add group assignment logic
        games.push(game);
    }
    return games;
}

async function getTeams() {
    return await teamsService.getAll();
}

async function getFields() {
    fields = await fieldsService.getAll();
    return fields;
}

async function getReferees() {
    referees = await refereesService.getAll();
    return referees;
}

// tournament start date: 2020-12-03 09:00 AM
var startTime = moment().set({ 'year': 2021, 'month': 11, 'date': 3, 'hour': 9, 'minute': 0, 'second': 0 });
function getTimeSlots(length) {
    let timeslots = [];
    for (let i = 0; i < length; i++) {
        if(startTime.get('hour')<9) {
            startTime = startTime.set({'hour': 9, 'minute': 0, 'second': 0});
        }
        else if(startTime.get('hour')>=17) {
            startTime = startTime.add(1, 'day');
            startTime = startTime.set({'hour': 9, 'minute': 0, 'second': 0});
        }
        let timeSlot = new scheduleModel();
        timeSlot.start = startTime.format('LLLL');
        timeSlot.end = startTime.add(90, "minute").format('LLLL');
        timeslots.push(timeSlot);
    }
    console.log(timeslots);
    return timeslots;
    // get the time slots
    // create a dictionary of fields and referees
    // a 2d matrix of field and time slot availability
    // a 2d matrix of referees and time slot availability
    // find the first available time slot for a game to match any of the field and referee
    // update the availability of the field and referee
    // return the time slot
}

module.exports = {
    genSchedule: generateTournamentSchedule
}