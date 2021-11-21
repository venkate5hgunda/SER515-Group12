const teamsService = require('../services/teams.service');
const fieldsService = require('../services/fields.service');
const refereesService = require('../services/referees.service');
const {
    gameModel
} = require('../models/tournament-game-model');
const GroupStage = require('groupstage');
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
        // add schedule property
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

module.exports = {
    genSchedule: generateTournamentSchedule
}