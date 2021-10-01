var router = require('express').Router();

const appIndex = require('../controllers/app.controller');
const tokenGenerator = require('../controllers/token-generator.controller');
const pageAccessForRoles = require('../controllers/page-access-for-roles.controller');

// CRYPTO CONTROLLER ROUTES
router.get("/get-token", (req,res) => {
    res.send(tokenGenerator.generateToken(req.query.role,req.query.user));
});
router.get("/verify-token", (req,res) => {
    res.send(tokenGenerator.validateToken(req.query.role,req.query.user,req.query.token));
});

// ROLE ACCESS VERIFICATION ROUTES
router.post("/upsert-page-access", async (req,res) => {
    let response = await pageAccessForRoles.upsertPageAccessInfo(req.body);
    res.json(response);
});
router.post("/remove-page-access", async (req,res) => {
    let response = await pageAccessForRoles.removePageAccessInfo(req.body);
    res.json(response);
});

router.get("/health", (req,res) => {
    res.send(appIndex.healthInformation());
});
// USED FOR UNIT TESTING
// router.get("/health", (req,res) => {
//     res.send(appIndex.getIndexPage());
// });

router.get("/*", function(req,res) {
    res.sendFile(`${__dirname}/../client/build/index.html`, function(err) {
        if(err) {
            res.status(500).send(err);
        }
    });
});

module.exports = router;