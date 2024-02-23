const asyncHandler = require('express-async-handler');
const User = require('../models/User');

const generateToken = require('../utils/tokenGenerator');
const isPasswordValid = require('../utils/passwordValidator')
const isEmailValid = require('../utils/emailValidator')

//Route     -   /api/account/delete-profile
//Desc      -   Gets User By Id And Deletes Information from Database
//access    -   Private
const deleteUserProfile = asyncHandler(async (req, res) => { });

//Route     -   /api/account/get-profile
//Desc      -   Gets User Information from Database
//access    -   Private
const getUserProfile = asyncHandler(async (req, res) => { });

//Route     -   /api/account/login
//Desc      -   Logs In Already Registered User.
//access    -   Public
const loginUser = asyncHandler(async (req, res) => { });

//Route     -   /api/account/logout
//Desc      -   Logs In Already Logged In User.
//access    -   Private
const logoutUser = asyncHandler(async (req, res) => { });

//Route     -   /api/account/get-profile
//Desc      -   Registers New User. Stores Information Submitted To Database.
//access    -   Private
const registerUser = asyncHandler(async (req, res) => { 
    const { firstName, lastName, email, password, confirm_password } = req.body;
    console.log({ firstName, lastName, email, password, confirm_password })
    const user_exits = await User.findOne({ email: req.body.email });
    
    if (user_exits) {
        res.status(400);
        throw new Error('User with that email already exists. Please try a different email address.');
    }
    else if (password !== confirm_password) { 
        res.status(400);
        throw new Error('Please make sure passwords match.');
    }
    else if(!isPasswordValid(password)){
        res.status(400);
        throw new Error('Password must be between 8 and 20 characters long and contain letters, numbers and special characterse e.g("@", "$",".","#","!", "%", "*", "?", "&", "^").');
    }
    else if(!isEmailValid(email)){
        res.status(400);
        throw new Error('Invalid email address. Please enter a valid email.');
    }
    else {
        const user = await User.create({
            firstName,
            lastName,
            email,
            password
        });
        if (user) {
            generateToken(res, user._id);
            res.status(201).json({
                _id: user._id,
                firstname: user.firstName,
                lastName: user.lastName,
                email: user.email,
            })
        }
    }
});

//Route     -   /api/account/update-profile
//Desc      -   Updates User Information In Database
//access    -   Private
const updateUserProfile = asyncHandler(async (req, res) => { });

module.exports = {
    deleteUserProfile,
    getUserProfile,
    loginUser,
    logoutUser,
    registerUser,
    updateUserProfile
}