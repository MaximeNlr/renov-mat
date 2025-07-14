const express = require('express');
const router = express.Router();
const adController = require('../controllers/ad');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth')

router.post('/create_ad', auth, multer, adController.CreateAd);
router.get('/user_ad', auth, adController.GetUserAd);
router.get('/ads', adController.GetAds);
router.get('/ad/:id', adController.adView);
router.delete('/delete_ad', auth, adController.deleteAd);

module.exports = router;