const router = require('express').Router();
const {
    deleteUserProfile,
    getUserProfile,
    loginUser,
    logoutUser,
    registerUser,
    updateUserProfile
} = require('../controllers/usersContoller'); 

const protectRoutes = require('../middleware/authMiddleware');

router.delete('/delete-profile', protectRoutes, deleteUserProfile);
router.get('/get-profile', protectRoutes, getUserProfile);
router.post('/login', loginUser);
router.post('/logout', protectRoutes, logoutUser);
router.post('/register', registerUser);
router.put('/update-profile', protectRoutes, updateUserProfile);

module.exports = router;