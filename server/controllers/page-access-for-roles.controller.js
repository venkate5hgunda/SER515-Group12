const pageAccessForRoles = require('../models/page-access-for-roles-model');

// pageInfo: { pageName: string, rolesWithAccess: string[] }
async function addPageWithAccessInfo(pageInfo) {
    const newPage = new pageAccessForRoles({
        pageName: pageInfo.pageName,
        rolesWithAccess: pageInfo.rolesWithAccess
    });
    try {
        let response = await pageAccessForRoles.find({pageName: pageInfo.pageName});
        console.log(response);
        if(response==null || response.length==0) {
            response = await newPage.save();
        }
        else {
            // Code for Upserting the Roles Array. Also, we need to make sure the values in the MongoDB array are unique.
        }
        return res;
    }
    catch(error) {
        return error;
    }
}

module.exports = {addPageWithAccessInfo: addPageWithAccessInfo};