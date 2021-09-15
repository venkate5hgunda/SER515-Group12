const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");

const indexPage = require("../../../server/controllers/app.controller.js");

const user = {
    addUser: (name) => {
        this.name = name;
    }
}

// SPY
// describe("AppController", function() {
//     describe("getIndexPage", function() {
//         it("should return hey", function() {
//             let req={}
//             let res={
//                 send: sinon.spy()
//             }
//             indexPage.getIndexPage(req,res);
//             console.log(res.send);
//             expect(res.send.calledOnce).to.be.true;
//             expect(res.send.firstCall.args[0]).to.equal("Hey");
//         });
//     });
// });

// STUB
describe("AppController", function() {
    describe("getIndexPage", function() {
        it("should send hey when user is logged in", function() {
            let user = {
                isLoggedIn: function() {}
            }
            const isLoggedInStub = sinon.stub(user, "isLoggedIn").returns(true);

            let req={
                user:user
            }
            let res={
                send: sinon.spy()
            }
            indexPage.getIndexPage(req,res);
            expect(res.send.calledOnce).to.be.true;
            expect(res.send.firstCall.args[0]).to.equal("Hey");
            expect(isLoggedInStub.calledOnce).to.be.true;
        });
        it("should send 'oops...' when user is not logged in", function() {
            let user = {
                isLoggedIn: function() {}
            }
            const isLoggedInStub = sinon.stub(user, "isLoggedIn").returns(false);

            let req={
                user:user
            }
            let res={
                send: sinon.spy()
            }
            indexPage.getIndexPage(req,res);
            expect(res.send.calledOnce).to.be.true;
            expect(res.send.firstCall.args[0]).to.equal("Ooops. You need to log in");
            expect(isLoggedInStub.calledOnce).to.be.true;
        });
    });
});

// MOCKS
describe("AppController", function() {
    describe("getIndexPage", function() {
        it("should send hey when user is logged in", function() {
            let user = {
                isLoggedIn: function() {}
            }
            const isLoggedInStub = sinon.stub(user, "isLoggedIn").returns(true);

            let req={
                user:user
            }
            let res={
                send: function() {}
            }
            const mock=sinon.mock(res);
            mock.expects("send").once().withExactArgs("Hey");
            
            indexPage.getIndexPage(req,res);

            expect(isLoggedInStub.calledOnce).to.be.true;
            mock.verify();
        });
    });
});

describe("User", function() {
    describe("addUser", function() {
        it("Should add a user", function() {
            sinon.spy(user, "addUser");
            user.addUser('Venkatesh');
            console.log(user.addUser);
            expect(user.addUser.calledOnce).to.be.true;
        });
    });
});