const pageAccessForRoles = require('../models/page-access-for-roles-model');

// pageInfo: { pageName: string, rolesWithAccess: string[] }
async function addPageAccessInfo(pageInfo) {
    const newPage = new pageAccessForRoles({
        pageName: pageInfo.pageName,
        rolesWithAccess: pageInfo.rolesWithAccess
    });
    let query={pageName: pageInfo.pageName},
        update={rolesWithAccess: pageInfo.rolesWithAccess},
        options={upsert:true};

    try {
        let response = await pageAccessForRoles.findOneAndUpdate(query,update,options,function(error,result) {
            if(!error) {
                if(!result) {
                    result = new pageAccessForRoles();
                }
                result.save(function(error) {
                    if(!error) {
                        pageAccessForRoles.updateOne({
                            "$push": {
                            rolesWithAccess: pageInfo.rolesWithAccess
                            }
                        });
                    }
                    else {
                        throw error;
                    }
                });
            }
        });
        // let response = await pageAccessForRoles.find({pageName: pageInfo.pageName});
        // console.log(response);
        // if(response==null || response.length==0) {
        //     response = await newPage.save();
        // }
        // else {
        //     // Code for Upserting the Roles Array. Also, we need to make sure the values in the MongoDB array are unique.
        // }
        return response;
    }
    catch(error) {
        return error;
    }
}

module.exports = {addPageAccessInfo: addPageAccessInfo};