const Ad = require('../models/ad');
const Image = require('../models/image');
const User = require('../models/user');
const Seller = require('../models/seller');
const { sanitize } = require('../utils/sanitize');
const { userIdFromToken } = require('../utils/token');

exports.CreateAd = async (req, res, next) => {
  try {
    req.body = sanitize(req.body, ['_id']);
    const userId = userIdFromToken(req.cookies);

    let seller = await Seller.findOne({user_id: userId});

    if (!seller) {
        seller = await Seller.create({ user_id: userId});
        console.log('seller =>>>', seller);

    }

    const ad = new Ad({
      title: req.body.title,
      type: req.body.type,
      quantity: req.body.quantity,
      unit: req.body.unit,
      price: req.body.price,
      state: req.body.state,
      description: req.body.description,
      seller_id: seller._id
    });

    const savedAd = await ad.save();
    let imagePromises = [];
    const folder = 'ad';

    if (req.files && req.files.length > 0) {
        imagePromises = req.files.map(file => {
        const image = new Image({
          imageUrl: `${req.protocol}://${req.get('host')}/images/${folder}/${file.filename}`,
          ad_id: savedAd._id
        });
        return image.save();
      })};

    const savedImages = await Promise.all(imagePromises);

    savedImages.forEach(img => savedAd.images.push(img._id));
    await savedAd.save();

    res.status(201).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error});
  }
};

exports.GetUserAd = async(req, res, next) => {
  try {
    const userId = userIdFromToken(req.cookies);
    const seller = await Seller.findOne({user_id: userId})
    const ads = await Ad.find({ seller_id: seller._id }).populate('images');
    res.status(200).json({success: true, ads});
  } catch (error) {
    console.log(error);
    res.status(500).json({success: false, error})
  }
};

exports.adView = async(req, res, next) => {
  try {
    const ad = await Ad.findOne({_id: req.params.id }).populate('images').populate({ path: 'user_id', select: '_id firstname adress imageUrl' });
    if (!ad) {
      res.status(404).json({message: 'Annonce non trouvé !'});
    } else {
      res.status(200).json({success: true, ad});
    }
  } catch (error) {
    console.log(error);
    
    res.status(500).json({error});
  }
};

exports.GetAds = async(req, res, next) => {
  try {
    const ads = await Ad.find().limit(10).populate('images');
    if (!ads) {
      res.status(200).json({succes: true, message: 'Aucune annonce non trouvé !'})
    };
    res.status(200).json({success: true, ads})
  } catch (error) {
    res.status(500).json({success: false, error});
  }
};

exports.deleteAd = async(req, res, next) => {
  try {
    const userId = userIdFromToken(req.cookies);
    const ad = await Ad.findOne({ user_id: userId}).populate('images');
    if (!ad) {
      res.status(404).json({message: 'Annonce introuvable !'})
    };

    await Promise.all(ad.images.map(async (img) => {
      await Image.deleteOne({_id: img._id});
    }))

    res.status(200).json({success: true})
  } catch (error) {
    res.Status(500).json({success: false, error});
  }
};