const pageAccessForRoles = require('../models/page-access-for-roles-model');

// pageInfo: { pageName: string, rolesWithAccess: string[] }
async function addPageAccessInfo(pageInfo) {
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

module.exports = {addPageAccessInfo: addPageAccessInfo};