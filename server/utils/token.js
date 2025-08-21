const jwt = require('jsonwebtoken');
require('dotenv').config();

function userIdFromToken(req) {
   try {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        return
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    return  decodedToken.userId;
   } catch (error) {
    console.error("Token invalide ou absent:", err.message);
    return null;
   }
};

module.exports = { userIdFromToken };