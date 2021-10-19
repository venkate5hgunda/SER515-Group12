const path = require('path');

var router = require('express').Router();

const appIndex = require('../controllers/app.controller');
const baseScheduleController = require('../controllers/base-schedule.controller');
const generateTournamentSchedule = require('../controllers/tournament-schedule-generator.controller');
const tokenGenerator = require('../controllers/token-generator.controller');
const pageAccessForRoles = require('../controllers/page-access-for-roles.controller');

// CRYPTO CONTROLLER ROUTES
router.get("/api/get-token", (req,res) => {
    let response = tokenGenerator.generateToken(req.query.role,req.query.user);
    res.json(response);
});
router.get("/api/verify-token", (req,res) => {
    res.json(tokenGenerator.validateToken(req.query.role,req.query.user,req.query.token));
});

// PAGE ACCESS VERIFICATION ROUTES
router.get("/api/verify-page-access", async (req, res) => { // READ
    let response = await pageAccessForRoles.verifyPageAccessInfo(req.query); // Need pageName and role params
    res.json(response);
});
router.post("/api/upsert-page-access", async (req, res) => { // CREATE, UPDATE
    let response = await pageAccessForRoles.upsertPageAccessInfo(req.body);
    res.json(response);
});
router.post("/api/remove-page-access", async (req, res) => { // DELETE
    let response = await pageAccessForRoles.removePageAccessInfo(req.body);
    res.json(response);
});

router.get("/api/health", (req, res) => {
    res.send(appIndex.healthInformation());
});
// USED FOR UNIT TESTING
// router.get("/health", (req,res) => {
//     res.send(appIndex.getIndexPage());
// });

router.get("/api/get-tournament-schedule", async (req, res) => {
    let response = await generateTournamentSchedule.genSchedule(req.query);
    res.json(response);
});

router.get("/api/baseschedule", (req, res) => {
    res.send(baseScheduleController.baseSchedule())
});

// app.use(express.static(`${__dirname}/../client/build/`));
router.get("/*", function (req, res) {
    res.sendFile('index.html', {
        root: path.join(__dirname, '../../client/build')
    }, function (err) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
    });
});

module.exports = router;