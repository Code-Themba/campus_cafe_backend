const asyncHandler = require('express-async-handler');
const User = require('../models/User');

const {
    destroyToken,
    generateToken
} = require('../utils/tokenHandler');

const isPasswordValid = require('../utils/passwordValidator');
const isEmailValid = require('../utils/emailValidator')

//Route     -   /api/account/delete-profile
//Desc      -   Gets User By Id And Deletes Information from Database
//access    -   Private
const deleteUserProfile = asyncHandler(async (req, res) => { 
    const user = await User.findById(req.user._id);

    if (user) { 
        user.deleteOne();
        destroyToken(res)
        res.status(200).json({
            message: `User ${user._id} account deleted.`
        })
    } else { 
        res.status(404);
        throw new Error('User not found.')
    }
});

//Route     -   /api/account/get-profile
//Desc      -   Gets User Information from Database
//access    -   Private
const getUserProfile = asyncHandler(async (req, res) => { 
    const user = {
        _id: req.user._id,
        firstname: req.user.firstName,
        lastname: req.user.lastName,
        email: req.user.email,
    }
    res.status(200).json(user);
});

//Route     -   /api/account/login
//Desc      -   Logs In Already Registered User.
//access    -   Public
const loginUser = asyncHandler(async (req, res) => { 
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    if (!user) {
        res.status(400);
        throw new Error(`No user with that email address ${email}. Please try another email address.`)
    }
    else {
        if (user && user.comparePasswords(password)) {
            generateToken(res, user._id);
            res.status(200).json({
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            })
        }
    }
});

//Route     -   /api/account/logout
//Desc      -   Logs In Already Logged In User.
//access    -   Private
const logoutUser = asyncHandler(async (req, res) => { 
    destroyToken(res);
    res.status(200).send('User Logged Out Successfully...')
});

//Route     -   /api/account/get-profile
//Desc      -   Registers New User. Stores Information Submitted To Database.
//access    -   Private
const registerUser = asyncHandler(async (req, res) => { 
    const { firstName, lastName, email, password, confirm_password } = req.body;
    // const user_exits = await User.findOne({ email: req.body.email });
    
    if (await User.findOne({ email: req.body.email })) {
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
const updateUserProfile = asyncHandler(async (req, res) => { 
    const user = await User.findById(req.user._id);

    if (user) {
        user.firstName = req.body.firstName || user.firstName
        user.lastName = req.body.lastName || user.lastName
        user.email = req.body.email || user.email
        
        if (req.body.password) user.password = req.body.password

        const _user = await user.save();

        res.status(200).json({
            _id: _user._id,
            updatedFirstName: _user.firstName,
            updatedLastName: _user.lastName,
            updatedEmail: _user.email
        });

    } else {
        res.status(404);
        throw new Error('No user found.')
    }
});

module.exports = {
    deleteUserProfile,
    getUserProfile,
    loginUser,
    logoutUser,
    registerUser,
    updateUserProfile
}