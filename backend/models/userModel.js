const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const crypto = require("crypto")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please enter name']
    },
    email: {
        type: String,
        required: [true, 'please enter email'],
        unique: true,
        validate: [validator.isEmail, 'please enter vaild Email Address']
    },
    password: {
        type: String,
        required: [true, 'please enter password'],
        maxlength: [12, 'password cannot exceed 12 characters'],
        select: false
    },
    avatar: {
        type: String
    },
    role: {
        type: String,
        default: 'user'
    },
    resetPasswordToken: String,
    resetPasswordTokenExpire: Date,
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)

})

userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this.id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES_TIME
    })
}

userSchema.methods.isValidPassword = function (enteredPassword) {
    return bcrypt.compare(enteredPassword, this.password)
}

userSchema.methods.getResetPasswordToken = function () {
    //generate token
    const token = crypto.randomBytes(20).toString('hex');

    //generate hash token and set to reset password
    this.resetPasswordToken = crypto.createHash('sha256').update(token).digest('hex')

    //set expire time
    this.resetPasswordTokenExpire = Date.now() + 30 * 60 * 1000

    return token;

}



module.exports = mongoose.model('User', userSchema)