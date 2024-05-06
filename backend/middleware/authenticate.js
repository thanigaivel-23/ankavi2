const expressAsyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/errorHandler");
const jwt = require('jsonwebtoken')
const userDB = require('../models/userModel')


exports.isAuthenticateUser = expressAsyncHandler(async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return next(new ErrorHandler('Login frist to handle this resource', 401))
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await userDB.findById(decode.id)

    next();
})

exports.authorisedRole = (...roles) => {

    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(new ErrorHandler(`Role ${req.user.role} is not allowed`, 401))

        }
        next();
    }
}