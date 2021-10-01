const pageAccessForRoles = require('../models/page-access-for-roles-model');

async function verifyPageAccessInfo(pageInfo) {
    try {
        let response = await pageAccessForRoles.find({pageName: pageInfo.pageName});
        if(!response || response.length==0) {
            return false;
        }
        else {
            if(response.shift().rolesWithAccess.indexOf(pageInfo.role)>-1) return true;
            else return false;
        }
    }
    catch(error) {
        return error;
    }
}

// pageInfo: { pageName: string, rolesWithAccess: string[] }
// INSERT/UPDATE PAGE ACCESS INFORMATION
async function upsertPageAccessInfo(pageInfo) {
    try {
        let response = await pageAccessForRoles.find({pageName: pageInfo.pageName});
        if(response && response.length>0) {
            response = await pageAccessForRoles.updateOne(
                {'pageName': {'$eq': pageInfo.pageName }},
                {'$addToSet': {'rolesWithAccess': { '$each': pageInfo.rolesWithAccess }}}
            );
        }
        else {
            const newPage = new pageAccessForRoles({
                pageName: pageInfo.pageName,
                rolesWithAccess: pageInfo.rolesWithAccess
            });
            response = newPage.save(function(error, data) {
                if(error) return error;
                else return data;
            });          
        }
        return response;
    }
    catch(error) {
        return error;
    }
}

// REMOVE PAGE ACCESS INFORMATION, AND PAGE IF ROLES ARRAY IS EMPTY
async function removePageAccessInfo(pageInfo) {
    try {
        let response = await pageAccessForRoles.find({pageName: pageInfo.pageName});
        if(response && response.length>0) {
            response = await pageAccessForRoles.updateOne(
                {'pageName': pageInfo.pageName },
                {'$pull': {'rolesWithAccess': {'$in': pageInfo.rolesWithAccess }}}
            );
        }
        else {
            return {'message': `The page '${pageInfo.pageName}' not present in the Database`};
        }
        return response;
    }
    catch(error) {
        return error;
    }
}

module.exports = {
    verifyPageAccessInfo: verifyPageAccessInfo,
    upsertPageAccessInfo: upsertPageAccessInfo,
    removePageAccessInfo: removePageAccessInfo
};