const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

router.get('/check-auth', auth, (req, res, next) => {
    res.json({success: true, user: req.user});
});

router.post('/signup', multer, userController.signup);
router.post('/login', userController.login);
router.post('/upload-avatar', auth, multer, userController.uploadAvatar);
router.get('/info', auth, userController.getUser);
router.get('/logout', userController.logout);

module.exports = router;