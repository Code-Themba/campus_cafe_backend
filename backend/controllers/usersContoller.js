const asyncHandler = require('express-async-handler');

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
const registerUser = asyncHandler(async (req, res) => { });

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