const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

router.post('/upload-avatar', auth, multer, userController.uploadAvatar);
router.get('/info', auth, userController.getUser);

module.exports = router;