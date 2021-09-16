const axios = require('axios');
const chai=require('chai');
const expect=chai.expect;
const sinon=require('sinon');

async function getHealthApi() {
    let apiUrl = 'http://localhost:5001/health';
    let apiRes = await axios.get(apiUrl)
        .then(response=> {
            this.response=response;
            return this.response;
        })
        .catch(error=> {
            this.error=error;
            return this.error;
    });
    return apiRes;
};

// AXIOS BASED HEALTH API TESTING. RUN AFTER STARTING THE APPLICATION
describe("Test Health API", function() {
    it("should return valid response when Health API is up", async function() {
        let apiRes = await getHealthApi(); //.then(res=> {return res.data});
        expect(apiRes.data['health']).to.equal('UP');
    });
});
