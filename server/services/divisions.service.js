const {
    divisionSchema
} = require('../models/tournament-divison-model');

boysDivisions = {
    1: "Boys U08 DOB2014 7 v7",
    2: "Boys U09 DOB2013 7 v7",
    3: "Boys U10 DOB2012 7 v7",
    4: "Boys U10 DOB2012 9 v9",
    5: "Boys U11 DOB2011 9 v9",
    6: "Boys U12 DOB2010 9 v9",
    7: "Boys U12 DOB2010 11 v11",
    8: "Boys U13 DOB2009 11 v11",
    9: "Boys U14 DOB2008 11 v11",
    10: "Boys U15 DOB2007 11 v11",
    11: "Boys U16 DOB2006 11 v11",
    12: "Boys U17 DOB2005 11 v11",
    13: "Boys U18 DOB2004 11 v11",
    14: "Boys U19 DOB2003 11 v11",
}

girlsDivisions = {
    15: "Girls U08 DOB2014 7 v7",
    16: "Girls U09 DOB2013 7 v7",
    17: "Girls U10 DOB2012 7 v7",
    18: "Girls U10 DOB2012 9 v9",
    19: "Girls U11 DOB2011 9 v9",
    20: "Girls U12 DOB2010 9 v9",
    21: "Girls U12 DOB2010 11 v11",
    22: "Girls U13 DOB2009 11 v11",
    23: "Girls U14 DOB2008 11 v11",
    24: "Girls U15 DOB2007 11 v11",
    25: "Girls U16 DOB2006 11 v11",
    26: "Girls U17 DOB2005 11 v11",
    27: "Girls U18 DOB2004 11 v11",
    28: "Girls U19 DOB2003 11 v11"
}

divisionWisePrices = {
    1: 600,
    2: 600,
    3: 600,
    4: 700,
    5: 700,
    6: 700,
    7: 800,
    8: 800,
    9: 800,
    10: 900,
    11: 900,
    12: 900,
    13: 1000,
    14: 1000,
    15: 600,
    16: 600,
    17: 600,
    18: 700,
    19: 700,
    20: 700,
    21: 800,
    22: 800,
    23: 800,
    24: 900,
    25: 900,
    26: 900,
    27: 1000,
    28: 1000
}

divisionWiseMaxAges = {
    1: 8,
    2: 9,
    3: 10,
    4: 10,
    5: 11,
    6: 12,
    7: 12,
    8: 13,
    9: 14,
    10: 15,
    11: 16,
    12: 17,
    13: 18,
    14: 19,
    15: 8,
    16: 9,
    17: 10,
    18: 10,
    19: 11,
    20: 12,
    21: 12,
    22: 13,
    23: 14,
    24: 15,
    25: 16,
    26: 17,
    27: 18,
    28: 19
}

allDivisions = Object.assign(boysDivisions, girlsDivisions);

async function getDivisions(query) {
    if (query == null || query == undefined || query.id == null || query.id == undefined) {
        return allDivisions;
    } else {
        return allDivisions[query.id];
    }
}

async function getDivisionPrice(query) {
    return divisionWisePrices[query.id];
}

async function getDivisionMaxAge(query) {
    return divisionWiseMaxAges[query.id];
}

module.exports = {
    getDivisions,
    getDivisionPrice,
    getDivisionMaxAge
}

// async function upsertDivisions() {

// }

// async function deleteDivisions() {

// }

// allDivisionsDummyInput = []
// for (i = 0; i < 4; i++) {
//     tempSchema = new divisionSchema();
//     tempSchema.name = "Boys Under " + (10 + i * 2);
//     allDivisionsDummyInput.push(tempSchema);
// }