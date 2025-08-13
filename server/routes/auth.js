const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

router.get('/check-auth', auth, (req, res, next) => {
    res.json({success: true, user: req.user});
});

router.post('/signup', multer, authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

module.exports = router;