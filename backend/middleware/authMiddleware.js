const jwt = require('jsonwebtoken');

const User = require('../models/User');

const protectRoutes = async(req, res, next) => { 
    let token;
    token = req.cookies.authToken;

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.userId).select('-password');
            next();
        } catch (error) {
            console.log(error)
            res.status(401);
            throw new Error('Not Authorized. Invalid token. Please log in again.')
        }
    } else {
        res.status(401);
        throw new Error('Not Authorized. No Token Found.')
    }
};

module.exports = protectRoutes;