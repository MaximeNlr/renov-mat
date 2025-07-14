const jwt = require('jsonwebtoken');
require('dotenv').config();

function userIdFromToken(cookies) {
    const token = cookies.token;
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    return  decodedToken.userId;
};

module.exports = { userIdFromToken };