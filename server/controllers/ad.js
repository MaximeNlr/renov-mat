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
    };

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

    if (req.files && req.files.length > 0) {
        imagePromises = req.files.map(file => {
          console.log(file.filename)
        const image = new Image({
          imageUrl: `${req.protocol}://${req.get('host')}/images/${file.filename}`,
          ad_id: savedAd._id
        });
        return image.save();
      })};

    const savedImages = await Promise.all(imagePromises);

    savedImages.forEach(img => savedAd.images.push(img._id));
    await savedAd.save();

    return res.status(201).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({success: false, message: 'Erreur serveur'})
  }
};

exports.GetUserAd = async(req, res, next) => {
  try {
    const userId = userIdFromToken(req.cookies);
    const seller = await Seller.findOne({user_id: userId})
    if (!seller) {
      return res.status(404).json({  success: false, message: 'Vendeur introuvable'})
    }
    const ads = await Ad.find({ seller_id: seller._id }).populate('images');
    
    return res.status(200).json({success: true, ads});
  } catch (error) {
    console.log(error);
    return res.status(500).json({success: false, message: 'Erreur serveur'})
  }
};

exports.adView = async(req, res, next) => {
  try {
    const ad = await Ad.findOne({_id: req.params.id }).populate('images').populate({ path: 'user_id', select: '_id firstname adress imageUrl' });
    if (!ad) {
      return res.status(404).json({message: 'Annonce non trouvé !'});
    } else {
      return res.status(200).json({success: true, ad});
    }
  } catch (error) {    
    return res.status(500).json({success: false, message: 'Erreur serveur'})
  }
};

exports.GetAds = async(req, res, next) => {
  try {
    const ads = await Ad.find().limit(10).populate('images');
    if (!ads) {
      return res.status(200).json({succes: true, message: 'Aucune annonce non trouvé !'})
    };
    return res.status(200).json({success: true, ads})
  } catch (error) {
    return res.status(500).json({success: false, message: 'Erreur serveur'})
  }
};

exports.deleteAd = async(req, res, next) => {
  try {
    const userId = userIdFromToken(req.cookies);
    const seller = await Seller.findOne({ user_id: userId })
    const ad = await Ad.findOne({ seller_id: seller._id}).populate('images');
    if (!ad) {
      return res.status(404).json({message: 'Annonce introuvable !'})
    };

    await Promise.all(ad.images.map(async (image) => {
      await Image.deleteOne({_id: image._id});
    }));

    await Ad.deleteOne({_id: ad._id})

    return res.status(200).json({success: true})
  } catch (error) {
    console.log(error)
    return res.status(500).json({success: false, message: 'Erreur serveur'})
  }
};