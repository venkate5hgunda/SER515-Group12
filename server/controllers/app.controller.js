module.exports = {
    minPrivilege: "Coach",
    getIndexPage: (req,res) => {
        if(req.user.isLoggedIn()) {
            return res.send("Hey");
        }
        res.send("Ooops. You need to log in");
    }
}