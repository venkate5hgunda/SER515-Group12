const chai = require("chai");
const expect = chai.expect;
chai.use(require("chai-as-promised"));

// ASYNC FUNCTION WITH CALLBACK
// function someMadeUpAsyncFunc(boolVal, cb) {
//     setTimeout(function() {
//         cb(boolVal ? "You get a sweet :)" : "You get nothing!!")
//     },0);
// }

// ASYNC FUNCTION WITH PROMISE
function someMadeUpAsyncFunc(boolVal) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(boolVal ? "You get a sweet :)" : "You get nothing!!")
        },0);
    })
}

// ASYNC TEST FOR CALLBACKS FUNCTION
// describe("AsyncTest", function() {
//     it("should return 'You get a sweet :)' if 'true' is passed in", function(done) {
//         someMadeUpAsyncFunc(true,function(sweetCheck) {
//             expect(sweetCheck).to.equal("You get a sweet :)");
//             done();
//         });
//     });
//     it("should return 'You get nothing!!' if 'false' is passed in", function(done) {
//         someMadeUpAsyncFunc(false, function(sweetCheck) {
//             expect(sweetCheck).to.equal("You get nothing!!");
//             done();
//         });
//     });
// });

// ASYNC TEST FOR PROMISE-BASED FUNCTION
describe("AsyncTest", function() {
    it("should return 'You get a sweet :)' if 'true' is passed in", function() {
        return expect(someMadeUpAsyncFunc(true)).to.eventually.equal("You get a sweet :)");
    });
    it("should return 'You get nothing!!' if 'false' is passed in", function() {
        return expect(someMadeUpAsyncFunc(false)).to.eventually.equal("You get nothing!!");
    });
});