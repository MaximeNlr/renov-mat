const express = require('express');
const parser = require('../middleware/upload');
const router = express.Router();
const userController = require('../controllers/user');
const auth = require('../middleware/auth');

router.post('/upload-avatar', auth, parser.single('image'), userController.uploadAvatar);
router.get('/info', auth, userController.getUser);

module.exports = router;