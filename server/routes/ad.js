const express = require('express');
const router = express.Router();
const parser = require('../middleware/upload');
const adController = require('../controllers/ad');

const auth = require('../middleware/auth')

router.post('/create_ad', auth, parser.array('images', 5), adController.CreateAd);
router.put('/edit-ad/:id', auth, adController.EditAd);
router.get('/user_ad', auth, adController.GetUserAd);
router.get('/ads', adController.GetAds);
router.get('/ad/:id', adController.adView);
router.delete('/delete_ad', auth, adController.deleteAd);

module.exports = router;