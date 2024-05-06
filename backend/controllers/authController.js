const expressAsyncHandler = require("express-async-handler");
const userDB = require('../models/userModel')
const ErrorHandler = require('../utils/errorHandler')
const sendToken = require('../utils/jwt');
const sendmail = require("../utils/email");
const crypto = require('crypto')

//Register user - /api/register
exports.registerUser = expressAsyncHandler(async (req, res) => {

    const { name, email, password } = req.body;

    let avatar;

    let BASE_URL = process.env.BACKEND_URL;
    if (process.env.NODE_ENV === 'production') {
        BASE_URL = `${req.protocol}://${req.get('host')}`
    }

    if (req.file) {
        avatar = `${BASE_URL}/uploads/user/${req.file.originalname}`
    }

    const user = await userDB.create({
        name, email, password, avatar
    });

    sendToken(user, 201, res)

})

//Login user - /api/login
exports.loginUser = expressAsyncHandler(async (req, res, next) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ErrorHandler('please enter email & password', 400))
    }

    //finding the user from database
    const user = await userDB.findOne({ email }).select('+password')

    if (!user) {
        return next(new ErrorHandler('Invalid email or password', 401))

    }

    if (! await user.isValidPassword(password)) {
        return next(new ErrorHandler('Invalid email or password', 401))
    }

    sendToken(user, 201, res)

})

//Logout user - /api/logout
exports.logoutUser = (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })
        .status(200)
        .json({
            success: true,
            message: 'logged out'
        })
}

//Get user profile
exports.getUserProfile = expressAsyncHandler(async (req, res, next) => {
    const user = await userDB.findById(req.user.id)
    res.status(200).json({
        success: true,
        user
    })
})

//Update Profile - 
exports.updateProfile = expressAsyncHandler(async (req, res, next) => {

    let newUserData = {
        name: req.body.name,
        email: req.body.email
    }

    const user = await userDB.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
    })

    res.status(200).json({
        success: true,
        user
    })
})


//Admin: Get All User api/admin/users
exports.getAllUser = expressAsyncHandler(async (req, res, next) => {
    const users = await userDB.find();
    res.status(200).json({
        success: true,
        users
    })
})

//Admin: Get Specific User - api/admin/user/:id
exports.getUser = expressAsyncHandler(async (req, res, next) => {
    const user = await userDB.findById(req.params.id);
    if (!user) {
        return next(new ErrorHandler(`User not found with this id ${req.params.id}`))
    }
    res.status(200).json({
        success: true,
        user
    })
});

//Admin: Update User - api/admin/user/:id
exports.updateUser = expressAsyncHandler(async (req, res, next) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role
    }

    const user = await userDB.findByIdAndUpdate(req.params.id, newUserData, {
        new: true,
        runValidators: true,
    })

    res.status(200).json({
        success: true,
        user
    })
})

//Admin: Delete User - api/admin/user/:id
exports.deleteUser = expressAsyncHandler(async (req, res, next) => {

    const user = await userDB.findByIdAndDelete(req.params.id);
    if (!user) {
        return next(new ErrorHandler(`User not found with this id ${req.params.id}`))
    }
    res.status(200).json({
        success: true
    })
})