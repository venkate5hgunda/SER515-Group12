const pageAccessForRoles = require('../models/page-access-for-roles-model');

// pageInfo: { pageName: string, rolesWithAccess: string[] }
// INSERT/UPDATE PAGE ACCESS INFORMATION
async function upsertPageAccessInfo(pageInfo) {
    try {
        let response = await pageAccessForRoles.find({pageName: pageInfo.pageName});
        if(response && response.length>0) {
            response = await pageAccessForRoles.updateOne(
                {'pageInfo': {'$eq': pageInfo.pageName }},
                {'$addToSet': {'rolesWithAccess': { '$each': pageInfo.rolesWithAccess }}}
            );
        }
        else {
            const newPage = new pageAccessForRoles({
                pageName: pageInfo.pageName,
                rolesWithAccess: pageInfo.rolesWithAccess
            });
            result = newPage.save();          
        }
        console.log(response);
        return response;
    }
    catch(error) {
        return error;
    }
}

// REMOVE PAGE ACCESS INFORMATION, AND PAGE IF ROLES ARRAY IS EMPTY
async function removePageAccessInfo(pageInfo) {

}

module.exports = {
    upsertPageAccessInfo: upsertPageAccessInfo,
    removePageAccessInfo: removePageAccessInfo
};