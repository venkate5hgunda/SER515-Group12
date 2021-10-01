// USED FOR UNIT TESTING
// module.exports = {
//     getIndexPage: (req,res) => {
//         if(req.user.isLoggedIn()) {
//             return res.send("Hey");
//         }
//         res.send("Ooops. You need to log in");
//     }
// }

module.exports = {
    healthInformation: () => {
        return {"Health": "UP" };
    },
   
}