const userRoleForAuthModel = require('../models/user-role-auth-model');

// GET USER ROLE INFORMATION
async function getUserRoleInfo(userInfo) {
    try {
        let response = await userRoleForAuthModel.find({
            userName: userInfo.userName
        });
        if (!response || response.length == 0) {
            return null; // USER DOES NOT EXIST
        } else {
            return response.roleName;
        }
    } catch (error) {
        return error;
    }
}

// userInfo: { userName: string, roleName: string[] }
// INSERT/UPDATE USER ROLE INFORMATION
async function upsertUserRoleInfo(userInfo) {
    try {
        let response = await userRoleForAuthModel.find({
            userName: userInfo.userName
        });
        if (response && response.length > 0) {
            response = await userRoleForAuthModel.updateOne({
                'userName': {
                    '$eq': userInfo.userName
                }
            }, {
                'roleName': userInfo.roleName
            });
        } else {
            const newUserRole = new userRoleForAuthModel({
                userName: userInfo.userName,
                roleName: userInfo.roleName
            });
            response = await newUserRole.save(async function (error, data) {
                if (error) return error;
                else {
                    return data;
                }
            });
            return 'Successfully Saved New Entry to Database';
        }
        return response;
    } catch (error) {
        return error;
    }
}

// REMOVE USER ROLE INFORMATION
async function removeUserRoleInfo(userInfo) {
    try {
        let response = await userRoleForAuthModel.find({
            userName: userInfo.userName
        });
        if (response && response.length > 0) {
            response = await userRoleForAuthModel.updateOne({
                'userName': userInfo.userName
            }, {
                '$pull': {
                    'roleName': userInfo.roleName
                }
            });
        } else {
            return {
                'message': `The user '${userInfo.userName}' is not present in the Database`
            };
        }
        return response;
    } catch (error) {
        return error;
    }
}

module.exports = {
    get: getUserRoleInfo,
    upsert: upsertUserRoleInfo,
    remove: removeUserRoleInfo
};