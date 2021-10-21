const crypto = require("crypto");

// The logic is to take the role. Multiply the user role.length number of times and generate a hash from the resulting string
function generateToken(role,user) {
    let tokenGenStr = `${role} ${user.repeat(role.length)}`;
    return {token: crypto.createHash('sha256').update(tokenGenStr).digest('hex')};
}

function validateToken(role,user,expHash) {
    let valHash = generateToken(role,user);
    return {validity: expHash==valHash}; // Need to check. valHash might not be a string, === is returning FALSE
}

module.exports = {
    generateToken: generateToken,
    validateToken: validateToken
};