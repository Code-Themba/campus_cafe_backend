const router = require('express').Router();
const {
    deleteUserProfile,
    getUserProfile,
    loginUser,
    logoutUser,
    registerUser,
    updateUserProfile
} = require('../controllers/usersContoller'); 

router.delete('/delete-profile',deleteUserProfile)
router.get('/get-profile', getUserProfile);
router.post('/login', loginUser)
router.post('/logout', logoutUser)
router.post('/register', registerUser)
router.put('/update-profile', updateUserProfile)

module.exports = router;