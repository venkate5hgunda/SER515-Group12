const appIndex = require('../controllers/app.controller');
const tokenGenerator = require('../controllers/token-generator.controller');

module.exports = function(app) {
    app.get("/health", (req,res) => {
        // res.send({
        //     health: "UP"
        // });
        res.send(appIndex.getIndexPage());
    });
    // Crypto Generation Route
    app.get("/gettoken", (req,res) => {
        res.send(tokenGenerator.generateToken(req.query.role,req.query.user));
    });
    
    app.get("/verifytoken", (req,res) => {
        res.send(tokenGenerator.validateToken(req.query.role,req.query.user,req.query.token));
    });
    
    app.get("/*", function(req,res) {
        res.sendFile(`${__dirname}/../client/build/index.html`, function(err) {
            if(err) {
                res.status(500).send(err);
            }
        });
    });
}